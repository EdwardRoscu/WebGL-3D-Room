document.addEventListener('DOMContentLoaded', init);

function init() {
  createLoadingIndicator();
  setupThreeJsScene();
}

function createLoadingIndicator() {
  const loadingIndicator = document.createElement('div');
  loadingIndicator.id = 'loadingIndicator';
  loadingIndicator.innerHTML = 'Loading...';
  document.body.appendChild(loadingIndicator);
}

function setupThreeJsScene() {
  const {
    scene,
    camera,
    renderer
  } = createSceneAndRenderer();
  addLightsToScene(scene);
  loadAndAddObjectsToScene(scene, () => {
    document.getElementById('loadingIndicator').style.display = 'none';
  });
  const controls = createPointerLockControls(camera);
  handleWindowResize(camera, renderer);
  setupMovementControls(camera, controls);
  animate(renderer, scene, camera, controls);
}

function createSceneAndRenderer() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0.5, 0);
  camera.rotation.y = -Math.PI/2;

  const renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  return {
    scene,
    camera,
    renderer
  };
}

function createPointerLockControls(camera) {
  const controls = new THREE.PointerLockControls(camera, document.body);

  document.addEventListener('click', () => {
    controls.lock();
  }, false);

  return controls;
}

function addLightsToScene(scene) {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.9);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);
}

function handleWindowResize(camera, renderer) {
  window.addEventListener("resize", () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}

function animate(renderer, scene, camera, controls) {
  const updatePosition = setupMovementControls(camera, controls);

  const loop = () => {
    requestAnimationFrame(loop);
    updatePosition();
    renderer.render(scene, camera);
  };

  loop();
}