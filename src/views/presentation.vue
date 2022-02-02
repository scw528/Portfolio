<template>
    <div class="reveal">
      <div class="slides">
        <section>
            <div class="container">
              <div class="content">
                <div class="firstSlideSquare">
                  <h2 id="nameTitle">Sam Wilkinson</h2>
                  <p id="where">Saskatoon SK</p>
                </div>
                <div class="firstSlideImage">
                  <img class="headshotImage" src="../assets/images/headshot.jpg" alt="headshot">
                </div>
              </div>
              <div class="whatIAm">
                <p>Full Stack Developer</p>
              </div>
            </div>
        </section>
        <section>
          <section>
            <div class="container2">
              <div id="secondSlidePhoto" style="text-align: left">
                <img class="peoplesJournal" src="../assets/images/peoplesJournal.jpg" alt="peoplesJournal">
              </div>
              <div class="getToKnowMe">
                <div>
                  <h2 id="gtkm">Get To know me</h2>
                </div>
                <div id="GTKMdetails">
                  <p>Bachelor of Science (B.Sc.) - Computer Science</p>
                  <p>My entire life, I've been influenced by design and computing.</p>
                </div>
              </div>
              <div id="secondSlidePhoto" style="text-align: right">
                <img class="stilts" src="../assets/images/stilts.jpg" alt="stilts">
              </div>
            </div>
          </section>
          <section>
            <div class="container3">
              <div class="earlyLife">
                <div class="ELTitle">Early Life</div>
                <div class="ELBody"></div>
              </div>
              <div class="University">
                <div class="UniTitle">University</div>
                <div class="UniBody"></div>
              </div>
            </div>
          </section>
        </section>
        <section>
          <section>Background</section>
          <section>Early Age</section>
          <section>University</section>
          <section>Travel</section>
          <section>Professional Experience</section>
        </section>
        <section>
            <section>A Match made in heaven</section>
            <section>Jobs & Woz</section>
        </section>
        <section>Interests & Hobbies</section>
        <section>Why Me?</section>
      </div>
    </div>
</template>

<script>
import Reveal from "../../node_modules/reveal.js/dist/reveal"
// import Markdown from "../../node_modules/reveal.js/plugin/markdown/markdown"


export default {
  mounted() {
    Reveal.initialize()
  },
  data: () => ({
    
  }),
  methods: {
    
  },
  computed: {
    
  }
}
</script>

<style>
    @import '../../node_modules/reveal.js/dist/reveal.css';
    @import '../../node_modules/reveal.js/dist/theme/white.css';
    @import "../scss/styles.scss";

    .container {
      display: grid; 
      grid-template-columns: 80% 20%; 
      grid-template-rows: 1fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        "Content Text";
      height: 100%;
    }
    .container2 {  
      display: grid;
      grid-template-columns: 30% 40% 30fr;
      grid-template-rows: 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        ". . .";
      height: 100%;
      width: 100%;
    }

    .container3 {
      display: grid; 
      grid-template-columns: 1fr 1fr; 
      grid-template-rows: 1fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        "earlyLife University"; 
      width: 100%;
      height: 100%;
    }

    .Content {
      display: grid; 
      grid-template-columns: 50% 1fr; 
      grid-template-rows: 1fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        ". ."; 
      grid-area: Content; 
    }

    .whatIAm {
      grid-area: Text;
      margin-left: 50px;
      margin-top: 55%;
      font-family: AnonymousPro !important;
      color: black;
    }

    .firstSlideSquare {
        grid-area: Rectange;
        position: absolute;
        left: -9%;
        background-color: black;
        height: 65vh;
        width: 47vw;
        z-index: -1;
    }

    .firstSlideImage {
      text-align: right;
      margin-top: 30%;
    }

    .headshotImage {
        width: 39vh;
        grid-area: Image;
        left: 200%;
    }

    .getToKnowMe { 
      text-align: center;
      grid-area: 1 / 2 / 2 / 3;
      height: 100vh;
      top: -10% !important;
      background-color: black;
      margin-top: -10%;
    }

    .peoplesJournal, .stilts {
      margin-top: 0px !important;
    }

    .earlyLife {
      display: grid; 
      grid-template-columns: 1fr; 
      grid-template-rows: 0.4fr 1.6fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        "ELTitle"
        "ELBody"; 
      grid-area: earlyLife; 
    }

    .university {
      display: grid; 
      grid-template-columns: 1fr; 
      grid-template-rows: 0.4fr 1.6fr; 
      gap: 0px 0px; 
      grid-template-areas: 
        "UniTitle"
        "UniBody"; 
      grid-area: university; 
    }

    .ELTitle {
      text-align: center;
    }

    .UniTitle {
      text-align: center;
    }

    .ELBody {
      background-color: black;
      
    }

    .UniBody {
      background-color: blue;
      
    }

    #where {
      text-align: left;
      width: 50vw;
      margin-top: 72.5%;
      margin-left: 15px;
      color: #CBE7E2 !important;
      font-family: PoppinsReg !important;
      letter-spacing: -0.09rem;
    }

    #nameTitle {
      position: absolute;
      left: 2%;
      top: 19%;
      color: #E1BAD5 !important;
      font-family: PoppinsReg !important;
      letter-spacing: -0.09rem;
    }

    #gtkm {
      color: #FFD23F !important;
      font-family: PoppinsReg !important;
      letter-spacing: -0.09rem;
      margin-top: 52%;
      text-align: center;
    }

    #GTKMdetails {
      color: white !important;
      font-family: AnonymousPro !important;
      font-size: 16px;
      letter-spacing: -0.09rem;
      margin-top: 30%;
      text-align: center;
    }

    #ELTitle {
      color: #FFD23F !important;
      font-family: PoppinsReg !important;
      letter-spacing: -0.09rem;
      margin-top: 52%;
      text-align: center;
    }

    #secondSlidePhoto {
      width: auto;
      height: 100vh;
      margin-top: 90%;
    }
</style>

