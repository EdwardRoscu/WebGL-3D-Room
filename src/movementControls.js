function setupMovementControls(camera, controls) {
  const moveSpeed = 0.005;
  const roomWidth = 0.8;
  const roomDepth = 0.65;
  const directionVector = new THREE.Vector3();
  const tempVector = new THREE.Vector3();

  const keyPressed = {
    'KeyW': false,
    'KeyS': false,
    'KeyA': false,
    'KeyD': false
  };

  const onKeyDown = (event) => {
    if (keyPressed.hasOwnProperty(event.code)) {
      keyPressed[event.code] = true;
    }
  };

  const onKeyUp = (event) => {
    if (keyPressed.hasOwnProperty(event.code)) {
      keyPressed[event.code] = false;
    }
  };

  document.addEventListener('keydown', onKeyDown, false);
  document.addEventListener('keyup', onKeyUp, false);

  const updatePosition = () => {
    directionVector.set(0, 0, 0);

    for (const key in keyPressed) {
      if (keyPressed[key]) {
        switch (key) {
          case 'KeyW':
            directionVector.add(controls.getDirection(tempVector));
            break;
          case 'KeyS':
            directionVector.add(controls.getDirection(tempVector).negate());
            break;
          case 'KeyA':
            directionVector.add(controls.getDirection(tempVector.setY(0)).cross(camera.up).negate());
            break;
          case 'KeyD':
            directionVector.add(controls.getDirection(tempVector.setY(0)).cross(camera.up));
            break;
        }
      }
    }

    if (directionVector.length() > 0) {
      const newPosition = camera.position.clone().add(directionVector.normalize().multiplyScalar(moveSpeed));
      newPosition.y = camera.position.y;

      if (newPosition.x > -roomWidth / 2 && newPosition.x < roomWidth / 2) {
        camera.position.x = newPosition.x;
      }

      if (newPosition.z > -roomDepth / 2 && newPosition.z < roomDepth / 2) {
        camera.position.z = newPosition.z;
      }
    }
  };

  return updatePosition;
}