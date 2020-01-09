<template>
    <v-container fill-height class="pa-0">
      <v-row class="ma-auto" justify-lg="start" align-lg="end" justify-sm="center" align-sm="center" style="height: inherit">
        <v-col class="pb-0" lg="8" md="7" sm="6" style="height: inherit" @click.once="dropItems()" id="sheetCol">
          <v-sheet
            id="sheet"
            tile
            height="800px"
            class="clickable"
            color="#D0CFEC"
          >
            <canvas id="canvas"></canvas>
            <v-container fluid fill-height>
              <v-row justify="start" align="start" class="mt-n12">
                <v-col lg="4" md="4" sm="6">
                  <h1 class="text-left" id="what">Full Stack Developer</h1>
                </v-col>
              </v-row>
              <v-spacer></v-spacer>
              <v-row justify="end" align="end" class="ml-3 mb-n12">
                <v-col lg="4" md="4" sm="6">
                  <h1 class="text-right" id="where">Saskatoon Sk</h1>
                </v-col>
              </v-row>
            </v-container>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import Matter from 'matter-js';

export default {
  data() {
    return{
    }
  },
  methods: {
    dropItems() {
      // set the cursor to default
      document.body.style.cursor = 'default';
      // get coordinates of sheet
      var sheet = document.getElementById("sheet").getBoundingClientRect();
      //eslint-disable-next-line no-console
      console.log(sheet.left, sheet.right, sheet.top, sheet.bottom, sheet.width, sheet.height);

      // module aliases
      var Engine = Matter.Engine,
          Render = Matter.Render,
          World = Matter.World,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Composites = Matter.Composites,
          Common = Matter.Common,
          Bodies = Matter.Bodies;

      // create an engine
      var engine = Engine.create();

      // create a renderer
      var render = Render.create({
        canvas: document.getElementById('canvas'),
        engine: engine,
        options: {
          background: 'transparent',
          wireframes: false,
          width: sheet.width,
          height: sheet.height,
        }
      });

      Render.run(render);

      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);

      // create bodies
      var stack = Composites.stack(sheet.width/2-40, 0, 2, sheet.height/40 - 1, 1, 0, function(x, y) {
        switch (Math.round(Common.random(0, 3))) {
          case 0:
            return Bodies.rectangle(x, y, 40, 40,  {
              render: {

                fillStyle: '#70AE98'
              },
              restitution: 0.1, 
              density: 0.5
              });
          case 1:
            return Bodies.rectangle(x, y, 40, 40,  {
              render: {

                fillStyle: '#ECBE7A'
              },
              restitution: 0.1, 
              density: 0.5
              });
          case 2:
            return Bodies.rectangle(x, y, 40, 40,  {
              render: {

                fillStyle: '#9DABDD'
              },
              restitution: 0.1, 
              density: 0.5
              });
          case 3:
            return Bodies.rectangle(x, y, 40, 40,  {
              render: {

                fillStyle: '#E58B88'
              },
              restitution: 0.1, 
              density: 0.5
              });
        }
      });
            
      // create the walls
      var groundLeft = Bodies.rectangle(0, sheet.height/2, 50, sheet.height, { isStatic: true, render: { visible: false} });
      var groundRight = Bodies.rectangle(sheet.width, (sheet.height/2), 50, sheet.height, { isStatic: true, render: { visible: false} });
      var groundBottom = Bodies.rectangle(sheet.width/2, sheet.height, sheet.width, 50, { isStatic: true, render: { visible: false} });
      var groundTop = Bodies.rectangle(sheet.width/2, 0, sheet.width, 50, { isStatic: true, render: { visible: false} });

      // add all of the bodies to the world
      World.add(engine.world, [stack, groundLeft, groundRight, groundBottom, groundTop]);

      // add mouse control
      var mouse = Mouse.create(render.canvas),
          mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                  stiffness: 0.02,
                  render: {
                      visible: false
                  }
              }
          });

      mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

      // keep the mouse in sync with rendering
      render.mouse = mouse;


      World.add(engine.world, mouseConstraint);

      //Add event with 'mousemove' which changes the cursor when over a body
      Matter.Events.on(mouseConstraint, 'mousemove', function (event) {
        // set the cursor to default
        document.body.style.cursor = 'default';

        //For Matter.Query.point pass "array of bodies" and "mouse position"
        var foundPhysics = Matter.Query.point(stack.bodies, event.mouse.position);

        // when cursor is over a body, set it to pointer
        if (foundPhysics.length > 0) {
          document.body.style.cursor = 'pointer';
        }

      });

      // run the engine
      Engine.run(engine);

      // fit the render viewport to the scene
      Render.lookAt(render, {
          min: { x: 0, y: 0 },
          max: { x: sheet.width, y: sheet.height }
      });

      // run the renderer
      Render.run(render);

      document.getElementById('what').className ='slam';  

    }
  }
}
</script>

<style>
  #what {
    /* transform: translateX(-32%);  */
    font-size: 36pt;
    color: white;
    letter-spacing: 1.4pt;
    z-index:1;
    user-select: none;
    font-family: PoppinsSB
  }

  #where {
    /* transform: translateX(22%);  */
    font-size: 28pt;
    color: white;
    letter-spacing: 2pt;
    z-index:1;
    user-select: none;
    font-family: AnonymousPro
  }

  #sheet {
    position: relative;
    z-index: 2;
  }

  .clickable:visited {
    cursor: default
  }
  .clickable {
    cursor: pointer;
  }

  #sheet:hover {
    transform: scale(1.003);
  }

  #canvas {
    position: absolute;
    overflow: hidden;
    width:100%;
    height:100%;
    z-index: 3;
  }

  .bottomRight {
    height: inherit;
  }

  .slam {
    animation: rattle 0.8s;
    animation-timing-function: ease-in;
    position: relative;
  }

  @keyframes slam {
    0%
    {
      transform: scale(1.2, 1.2);
      opacity: 0;
    }
    
    40%
    {
      opacity: 1;
    }
    
    100%
    {
      transform: scale(1, 1);
      opacity: 1;
      transform: translateX(-15%);
    }
  }

  @keyframes rattle
  {
    0% { margin-top: 0; margin-left: 0; }
    10% { margin-top: -5px; margin-left: 0; }
    20% { margin-top: 0; margin-left: -5px; }
    30% { margin-top: 5px; margin-left: 0; }
    40% { margin-top: 0; margin-left: 5px; }
    50% { margin-top: -2px; margin-left: 0; }
    60% { margin-top: 0; margin-left: -2px; }
    70% { margin-top: 2px; margin-left: 0; }
    80% { margin-top: 0; margin-left: 2px; }
    90% { margin-top: -1px; margin-left: 0; }
    100% { margin-top: 0; margin-left: 0; }
  }

</style>

