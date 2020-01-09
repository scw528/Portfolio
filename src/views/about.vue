<template>
  <v-container fluid fill-height class="pb-2">
    <v-row v-if="$vuetify.breakpoint.smAndUp" style="height: inherit" align="end" justify-lg="space-around">
      <v-col lg="3" md="3" sm="12" v-for="item in about" :key="item.name" class="mx-2">
          <v-sheet v-if="item.active && $vuetify.breakpoint.smAndUp"
            id="detailBody"
            tile
            height="650px"
            width="100%"
            :color="item.color"
          >
            <v-container v-for="heading in item.headings" :key="heading.name">
              <v-row class="ma-1">
                <h1 id="headings">{{heading.name}}</h1>
              </v-row>
              <v-row class="ma-3">
                <h3 id="details" v-html="heading.detail">></h3>
              </v-row>
            </v-container>
          </v-sheet>

          <v-sheet
            id="detailTitle"
            tile
            height="150px"
            width="100%"
            :color="item.color"
            @click="toggleDetails(item)"
          >
            <v-container fill-height>
              <v-row align="center" justify="center">
                <h1 class="text-center">{{item.name}}</h1>
              </v-row>

            </v-container>
          </v-sheet>
      </v-col>
    </v-row>
    <v-row v-if="$vuetify.breakpoint.mdAndDown" align="center" justify="center" style="height: inherit" class="mx-auto" no-gutters>
      <v-col>
        <v-col v-for="item in about" :key="item.name">
          <v-sheet
            tile
            height="150px"
            :color="item.color"
            @click="toggleDetails(item)"
          >
            <v-container fill-height>
              <v-row align="center" justify="center">
                <h1 class="text-center">{{item.name}}</h1>
              </v-row>

            </v-container>
          </v-sheet>
          <v-sheet v-if="item.active"
            id="detailBody"
            tile
            height="650px"
            width="100%"
            :color="item.color"
          >
            <v-container>
              <v-row class="ma-1" v-for="heading in item.headings" :key="heading.name">
                <h1 id="headings">{{heading.name}}</h1>
                <v-row class="ma-3">
                  <h3 id="details" v-html="heading.detail">></h3>
                </v-row>
              </v-row>
            </v-container>
          </v-sheet>
      </v-col>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showMore: false,
    about: [
      { name: "Education", active: false,
        headings: [ 
          {name: "University", detail: "Bachelor of Science <br/> Computer Science Major <br/> Mathematics Minor <br/> University of Saskatchewan"},
          {name: "High School", detail: "Class of 2013 with distinction <br/> St. Joseph’s High School Saskatoon, SK"}],
        color: "#E58B88"
      },
      { name: "Hobbies", active: false,
        headings: [
          {name: "Photography", detail: "Amateur Photographer"},
          {name: "Design & Fashion", detail: "Interest in Architecture, Interior, Graphic & Product design <br/> Designer Wear"},
          {name: "Sports", detail: "Competitive Baseball <br/> Competitive Hockey <br/> Muay Thai Kick boxing <br/> Weight Trainging"},],
        color: "#D0CFEC"
      },
      { name: "Skills", active: false,
        headings: [
          {name: "Front-End", detail: "Vue.js, Vuetify, React, Material-UI, HTML, CSS"},
          {name: "Back-End", detail: "Node.js, SQL, Firebase, Java, Python, C#"},
          {name: "Tools", detail: "GitHub, VSCode, Eciplse, Intellij IDEA, PyCharm, Command Line (Linux), Pixlr x"}],
        color: "#ECBE7A"}
    ]
  }),
  methods: {
    toggleDetails(item) {
      this.showMore = !this.showMore;
      // this.about.forEach((el)=>{el.active = false;})
      item.active = !item.active;
    }
  },
  computed: {
    activeDetails: function() {
      return this.about.filter(function(about) {
        return about.active
      }
    )}
  }
}
</script>

<style>
@import "../scss/styles.scss";

  #detailTitle:hover {
    transform: initial;
    cursor: pointer;
  }

  #detailBody:hover {
    transform: initial;
    cursor: default;
  }

  #details {
    font-family: AnonymousPro;
  }

</style>

