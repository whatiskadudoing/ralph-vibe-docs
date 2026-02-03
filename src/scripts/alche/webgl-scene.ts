/**
 * Alche Clone - WebGL Scene with Three.js
 * Creates the 3D animated logo and background effects
 */

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import gsap from 'gsap';

interface WebGLScene {
  updateProgress: (section: string, progress: number) => void;
  dispose: () => void;
}

export async function initWebGL(basePath: string): Promise<WebGLScene> {
  const canvas = document.getElementById('gl-canvas');
  if (!canvas) {
    console.warn('[WebGL] Canvas not found');
    return createDummyScene();
  }

  // Setup renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas as HTMLCanvasElement,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  // Setup scene
  const scene = new THREE.Scene();

  // Setup camera
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const pointLight = new THREE.PointLight(0x4488ff, 1, 10);
  pointLight.position.set(-3, 2, 3);
  scene.add(pointLight);

  // Create animated logo geometry
  const logoGroup = new THREE.Group();
  scene.add(logoGroup);

  // Create "A" shape with custom geometry
  const logoGeometry = createLogoGeometry();
  const logoMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.8,
    roughness: 0.2,
    envMapIntensity: 1,
  });

  const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
  logoMesh.scale.setScalar(0.5);
  logoGroup.add(logoMesh);

  // Add wireframe
  const wireframeMaterial = new THREE.LineBasicMaterial({
    color: 0x4488ff,
    transparent: true,
    opacity: 0.3
  });
  const wireframe = new THREE.LineSegments(
    new THREE.WireframeGeometry(logoGeometry),
    wireframeMaterial
  );
  wireframe.scale.setScalar(0.52);
  logoGroup.add(wireframe);

  // Particle system
  const particles = createParticles();
  scene.add(particles);

  // Grid floor
  const grid = createGrid();
  grid.position.y = -2;
  grid.rotation.x = -Math.PI / 2;
  scene.add(grid);

  // State
  let currentSection = 'kv';
  let sectionProgress: Record<string, number> = {
    kv: 0,
    works: 0,
    mission: 0,
    vision: 0,
    service: 0,
    stellla: 0
  };

  // Mouse tracking
  const mouse = new THREE.Vector2();
  const targetRotation = new THREE.Vector2();

  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Resize handler
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', handleResize);

  // Animation loop
  let animationId: number;
  const clock = new THREE.Clock();

  const animate = () => {
    animationId = requestAnimationFrame(animate);

    const elapsed = clock.getElapsedTime();

    // Smooth mouse follow
    targetRotation.x += (mouse.y * 0.3 - targetRotation.x) * 0.05;
    targetRotation.y += (mouse.x * 0.3 - targetRotation.y) * 0.05;

    // Logo animation based on section
    logoGroup.rotation.x = targetRotation.x + Math.sin(elapsed * 0.5) * 0.1;
    logoGroup.rotation.y = targetRotation.y + elapsed * 0.2;

    // Section-based transformations
    const kvProgress = sectionProgress.kv;
    const worksProgress = sectionProgress.works;
    const missionProgress = sectionProgress.mission;

    // Scale based on scroll
    const baseScale = 0.5;
    const scrollScale = 1 - kvProgress * 0.3;
    logoGroup.scale.setScalar(baseScale * scrollScale);

    // Position based on section
    logoGroup.position.y = -kvProgress * 2 + worksProgress * 1;
    logoGroup.position.z = -missionProgress * 3;

    // Wireframe pulse
    wireframe.material.opacity = 0.3 + Math.sin(elapsed * 2) * 0.1;

    // Particles animation
    particles.rotation.y = elapsed * 0.1;
    const positions = particles.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(elapsed + positions[i] * 0.5) * 0.001;
    }
    particles.geometry.attributes.position.needsUpdate = true;

    // Grid animation
    grid.material.opacity = 0.1 + kvProgress * 0.1;

    renderer.render(scene, camera);
  };

  animate();

  // Try to load 3D model
  try {
    const loader = new GLTFLoader();
    const gltf = await loader.loadAsync(`${basePath}/common/scene.glb`);
    if (gltf.scene) {
      // Replace simple geometry with loaded model
      logoGroup.remove(logoMesh);
      logoGroup.remove(wireframe);

      gltf.scene.scale.setScalar(0.3);
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = logoMaterial;
        }
      });
      logoGroup.add(gltf.scene);
    }
  } catch (e) {
    console.log('[WebGL] Using fallback geometry');
  }

  return {
    updateProgress(section: string, progress: number) {
      sectionProgress[section] = progress;
      currentSection = section;
    },
    dispose() {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    }
  };
}

function createLogoGeometry(): THREE.BufferGeometry {
  // Create an "A" shaped geometry
  const shape = new THREE.Shape();

  // Outer triangle
  shape.moveTo(0, 1.5);
  shape.lineTo(-1, -1);
  shape.lineTo(1, -1);
  shape.closePath();

  // Inner hole
  const hole = new THREE.Path();
  hole.moveTo(0, 0.5);
  hole.lineTo(-0.3, -0.3);
  hole.lineTo(0.3, -0.3);
  hole.closePath();
  shape.holes.push(hole);

  const extrudeSettings = {
    depth: 0.3,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3,
  };

  const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  geometry.center();

  return geometry;
}

function createParticles(): THREE.Points {
  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x4488ff,
    size: 0.02,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true,
  });

  return new THREE.Points(geometry, material);
}

function createGrid(): THREE.LineSegments {
  const size = 20;
  const divisions = 20;
  const geometry = new THREE.BufferGeometry();
  const positions: number[] = [];

  const step = size / divisions;
  const half = size / 2;

  for (let i = 0; i <= divisions; i++) {
    const pos = i * step - half;
    positions.push(-half, 0, pos, half, 0, pos);
    positions.push(pos, 0, -half, pos, 0, half);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

  const material = new THREE.LineBasicMaterial({
    color: 0x4488ff,
    transparent: true,
    opacity: 0.1,
  });

  return new THREE.LineSegments(geometry, material);
}

function createDummyScene(): WebGLScene {
  return {
    updateProgress() {},
    dispose() {}
  };
}
