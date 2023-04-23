# WebGL 3D Room

This is a simple WebGL application that allows you to walk around a single room and look outside through windows.

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the root directory of the project.
3. Run `start.bat` if you are on Windows, or `start.sh` if you are on Linux/Mac, to start the server and open the application in your default web browser.
4. Once the application is running, use your mouse to look around, and use the WASD keys to move around the room.

## Dependencies

- Python (v3.x recommended)
- WebGL-capable web browser (Chrome, Firefox, Safari, Edge, etc.)

## Files

- `index.html` - The main HTML file that includes the necessary scripts and stylesheets.
- `styles.css` - The CSS stylesheet for the application.
- `main.js` - The main JavaScript file that sets up the scene, camera, and controls, and calls the animation loop.
- `movementControls.js` - A helper script that defines the WASD movement controls.
- `loadObjects.js` - A helper script that loads the 3D model of the room and adds it to the scene, as well as the ground and sky.
- `start.bat` - A Windows batch file that starts the server and opens the application in the default web browser.
- `start.sh` - A Linux/Mac shell script that starts the server and opens the application in the default web browser.
- `js/` - A directory containing the necessary JavaScript libraries (Three.js, OrbitControls.js, PointerLockControls.js, OBJLoader.js, and MTLLoader.js).
- `assets/` - A directory containing the textures and 3D model of the room.
- `screenshots.pdf` - A PDF file containing a series of screenshots showcasing the features of the application.

## Credits

This application was created using the following resources:

- Three.js (https://threejs.org/)
- OrbitControls.js (https://threejs.org/docs/#examples/en/controls/OrbitControls)
- PointerLockControls.js (https://threejs.org/docs/#examples/en/controls/PointerLockControls)
- OBJLoader.js (https://threejs.org/docs/#examples/en/loaders/OBJLoader)
- MTLLoader.js (https://threejs.org/docs/#examples/en/loaders/MTLLoader)
- Beach texture (https://www.pexels.com/photo/brown-sand-under-clear-blue-sky-210230/)
- Sky texture (https://www.pexels.com/photo/white-and-blue-clouds-160836/)
- Simple Work Room 3D model by 3D LT (https://www.turbosquid.com/3d-models/simple-work-room-3d-1778232)
