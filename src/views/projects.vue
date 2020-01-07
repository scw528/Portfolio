<template>
  <v-container fill-height >
    <v-row class="ma-auto">
      <v-col lg="4" md="6" sm="12">
          <v-row v-for="item in projects" :key="item.name">
            <v-sheet
              id="projectSheet"
              height="200px"
              width="100%"
              tile
              :color="item.color"
              @click="showProject(item)"
            >
              <v-container fill-height>
                <v-row align="center" class="ma-auto">
                  <h3 id="projectName" class="text-center"> {{item.name}} </h3>
                  <v-spacer></v-spacer>
                  <v-icon id="projectIcon" color="white">mdi-chevron-right</v-icon>
                </v-row>
              </v-container>
            </v-sheet>

          </v-row>
      </v-col>
      <v-col v-if="projectInfoSheet" lg="8" md="6" sm="12">
        <v-row v-for="item in activeProjects" :key="item.name">
          <v-sheet tile :color="item.color" id="infoSheet" height="800px" width="50vw">
            <v-container fluid fill-height>
              <v-row class="mx-3" style="height: inherit">
                <v-col cols="12">
                  <v-row class="mb-2" align="start" justify="start" style="height: inherit">
                    <h2 id="info" v-html="item.description"></h2>
                  </v-row>
                  <v-row class="mt-2" align="center" justify="start" style="height: inherit">
                    <h3 id="techStack">Technologies Used: {{item.stack}}</h3>
                  </v-row>
                </v-col>
                <v-row align="end" justify="end">
                    <v-btn router v-bind:to="item.github" text icon><v-icon>mdi-github-circle</v-icon></v-btn>
                    <v-btn router v-bind:to="item.link" text icon> <v-icon>mdi-open-in-new</v-icon> </v-btn>
                </v-row>
              </v-row>
            </v-container>
          </v-sheet>
        </v-row>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'

export default {
  data: () => ({
    projectInfoSheet: false,
    projects: [
      {name: "Grub", 
        description: "Working with two other University of Saskatchewan graduates, we aim to decrease waste,\
        by providing alternatives for single-use takeout cups and containers. <br/><br/> I developed a fully responsive\
        website to advertise and promote our business.", 
        stack: "React, Firebase",
        github: "/gitgrub",
        link: "grub",
        color: "#70AE98", active: false
      },
      {name: "PureBody Balance", 
        description: "PureBody Balance is a web application for a Yoga and Melt Method business located in\
        Saskatoon, SK. <br/><br/> I developed a responsive and dynamic website to promote their business, as well as a custom CMS\
        that allows them to update their calendar.",
        stack: "Node.js, Vue.js, Firebase",
        github: "/gitPBB",
        link: "/PBB",
        color: "#ECBE7A", active: false
      },
      {name: "RUNNR", 
        description: "Runnr is a Saskatoon based startup, that allows a customer to choose the date and time\
        for their parcel delivery. <br/><br/> I developed a dynamic, responsive website to authenticate users,\
        list deliveries, and schedule deliveries.", 
        stack: "Node.js, Vue.js, Vuetify, MySQL(V1), Firebase(V2)",
        github: "/gitRUNNR",
        link: "/RUNNR",
        color: '#9DABDD', active: false
      },
      {name: "POTA",
        description: "POTA, or Pre-Operative Testing Application is an online form which aids doctors and nurses\
        to organize and simplify low risk minor surgeries in Saskatchewan. This was a group project which was\
        completed for a Software Management class at the U of S. Acting as Front-end lead, I was responsible for\
        leading my team to create a simple, responsive page, while liaising with doctors at the University of Saskatchewan.",
        stack: "Node.js, Vue.js, Jest, Nightwatch",
        github: "",
        link: "",
        color: "#E58B88", active: false
      },
    ]
  }),
  methods: {
    //eslint-disable-next-line no-unused-vars
    showProject(item) {
      this.projectInfoSheet = true;
      this.projects.forEach((el)=>{el.active = false;})
      item.active = true;
    }
  },
  computed: {
    activeProjects: function() {
      return this.projects.filter(function(project) {
        return project.active
      }
    )}
  }
}
</script>

<style>
@import "../scss/styles.scss";

#projectName {
  font-family: AnonymousPro;
  font-size: 20pt;
  letter-spacing: 2.5pt;
  color: white;
  position: relative;
}

#projectSheet #projectIcon {
  opacity: 0;
}

#projectSheet:hover #projectIcon{
  opacity: 1;
}

#projectSheet:hover {
  cursor: pointer;
  z-index: 10;
}

#info {
  font-family: PoppinsReg;
  color: white;
}

#techStack {
  font-family: AnonymousPro;
  color: black
}

</style>

