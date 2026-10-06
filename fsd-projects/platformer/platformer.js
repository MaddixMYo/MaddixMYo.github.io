$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(0, 200, 150, 15);
createPlatform(150, 200, 20, 400);
createBadPlatform(168, 350, 1122, 15);
createFakePlatform(1285, 350, 175, 15, "blue");
createPlatform(1275, 200, 25, 150);
createPlatform(350, 200, 50, 10);
createPlatform(600, 200, 50, 10);
createPlatform(850, 200, 50, 10);
createFakePlatform(1000, 200, 50, 10);
createPlatform(1125, 200, 50, 10);
createPlatform(150, 600, 20, 300);
createPlatform(150, 700, 1250, 15);

createPlatform(1100, 600, 200, 100);
createPlatform(800, 600, 200, 100);
createPlatform(500, 600, 200, 100);




    // TODO 3 - Create Collectables
createCollectable("steve", 250, 650, 0, 0);
createCollectable("max", 607, 150, 0, 0) ;
createCollectable("diamond", 1133, 150, 0, 0);



    
    // TODO 4 - Create Cannons
createCannon("left", 380, 2500);
createCannon("left", 500, 2500);
createCannon("left", 460, 2500);
createCannon("left", 420, 2500);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
