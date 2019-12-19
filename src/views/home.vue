<template>
    <v-container fill-height fill-width>
      <v-row class="d-flex" justify="end" align="end" style="height: inherit">
        <v-col cols="8" style="height: inherit" @click="dropItems" id="sheetCol">
          <v-sheet
            id="sheet"
            tile
            class="d-flex"
            color="#BF9ACA"
            style="height: inherit"
          >
            <canvas id="canvas"></canvas>
            <v-row>
              <v-col cols="6">
                <h1 id="what">Full Stack Developer</h1>
              </v-col>
            </v-row>
            <v-row align="end" justify="end">
              <v-col cols="12">
                <h1 class="text-right" id="where">Saskatoon SK</h1>
              </v-col>
            </v-row>
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
      // get coordinates of sheet
      var sheet = document.getElementById("sheet").getBoundingClientRect();
      //eslint-disable-next-line no-console
      console.log(sheet.left, sheet.right, sheet.top, sheet.bottom, sheet.width, sheet.height);

      // module aliases
      var Engine = Matter.Engine,
          Render = Matter.Render,
          World = Matter.World,
          Bodies = Matter.Bodies;

      // create an engine
      var engine = Engine.create();

      // create a renderer
      var render = Render.create({
        canvas: document.getElementById('canvas'),
        engine: engine,
        options: {
          background: 'transparent',
          wireframeBackground: 'transparent',
          width: sheet.width,
          height: sheet.height,
        }
      });

      // create two boxes and bounding ground boxes
      var boxA = Bodies.rectangle(200, 200, 80, 80);
      var boxB = Bodies.rectangle(80, 80, 80, 80);
      var groundLeft = Bodies.rectangle(0, sheet.height/2, 10, sheet.height, { isStatic: true });
      var groundBottom = Bodies.rectangle(sheet.width/2, sheet.height, sheet.width, 10, { isStatic: true });
      var groundRight = Bodies.rectangle(sheet.width, sheet.height/2, 10, sheet.height, { isStatic: true });
      // var groundTop = Bodies.rectangle()

      // add all of the bodies to the world
      World.add(engine.world, [boxA, boxB, groundLeft, groundBottom, groundRight]);

      // run the engine
      Engine.run(engine);

      // run the renderer
      Render.run(render);
    }
  }
}
</script>

<style>
  #what {
    transform: translateX(-15%); 
    font-size: 36pt;
    color: white;
    letter-spacing: 3pt;
    z-index:1;
  }

  #where {
    transform: translateX(12%); 
    font-size: 36pt;
    color: white;
    letter-spacing: 3pt;
    z-index:1;
  }

  #sheet {
    position: relative;
    z-index: 2;
  }

  #sheet:hover {
    cursor: pointer;
  }

  #canvas {
    position: absolute;
    overflow: hidden;
    width:100%;
    height:100%;
    z-index: 3;
  }


</style>

