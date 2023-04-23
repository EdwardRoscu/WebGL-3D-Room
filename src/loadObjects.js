function loadAndAddObjectsToScene(scene, onObjectsLoaded) {
    const mtlLoader = new THREE.MTLLoader();
    mtlLoader.setPath("assets/room-textures/");
    mtlLoader.load("room.mtl", materials => {
      materials.preload();
  
      const objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.setPath("assets/room-textures/");
      objLoader.load("room.obj", object => {
        object.position.set(-0.6, 0, 0.5);
        object.scale.set(10, 10, 10);
        scene.add(object);
        onObjectsLoaded();
        addGroundToScene(scene);
        addSkyToScene(scene);
      });
    });
  }
  
  function addGroundToScene(scene) {
    const textureLoader = new THREE.TextureLoader();
    const groundTexture = textureLoader.load('assets/beach.jpg');
    const groundMaterial = new THREE.MeshPhongMaterial({
      map: groundTexture,
      side: THREE.DoubleSide
    });
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    scene.add(ground);
  }
  
  function addSkyToScene(scene) {
    const textureLoader = new THREE.TextureLoader();
    const textureUrl = 'assets/sky.jpg';
    const skyTexture = textureLoader.load(textureUrl);
    const skyMaterial = new THREE.MeshBasicMaterial({
      map: skyTexture,
      side: THREE.BackSide
    });
    const skyGeometry = new THREE.BoxGeometry(100, 100, 100);
    const sky = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(sky);
  }