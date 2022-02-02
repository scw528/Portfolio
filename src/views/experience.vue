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
              @click="toggleProject(item)"
            >
              <v-container fluid fill-height>
                <v-row align="center" class="ma-auto">
                  <h3 id="position" class="text-center"> {{item.name}} </h3>
                  <v-spacer></v-spacer>
                  <h3 id="company" class="text-center"> {{item.company}} </h3>
                  <h3 id="datesActive" class="text-center"> {{item.dates}} </h3>
                  
                  <v-icon v-if="$vuetify.breakpoint.mdAndUp" id="arrowRight" color="white">mdi-chevron-right</v-icon>
                  <v-icon v-if="$vuetify.breakpoint.smAndDown" id="arrowLeft" color="white">mdi-chevron-down</v-icon>
                </v-row>
              </v-container>
            </v-sheet>
            <v-sheet id="mobileProject" class="mt-n12" v-if="projectInfoSheet && item.active && $vuetify.breakpoint.smAndDown" tile width="100%" :color="item.color">
              <v-col class="px-6">
                <v-row class="mb-2 text-wrap" align="start" justify="start" style="height: inherit; word-wrap: break-word;">
                  <h2 id="info" v-html="item.description"></h2>
                </v-row>
              </v-col>
            </v-sheet>

          </v-row>
      </v-col>
      <v-col v-if="projectInfoSheet && $vuetify.breakpoint.mdAndUp" lg="8" md="6" sm="12">
        <v-row v-for="item in activeProjects" :key="item.name">
          <v-sheet tile :color="item.color" id="infoSheet" height="800px" width="50vw">
            <v-container fluid fill-height>
              <v-row class="mx-3" style="height: inherit">
                <v-col cols="12">
                  <v-row class="mb-2" align="start" justify="start" style="height: inherit">
                    <h2 id="info" v-html="item.description"></h2>
                  </v-row>
                </v-col>
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
        {
            name: "Programmer Analyst", 
            company: "University of Saskatchewan",
            dates: "February 2020 - October 2021",
            description: "As a Programmer at the University of Saskatchewan, I worked collectively with Consumer Services Developers and University Relations to effectively find solutions to a multitude of problems\
                    for various divisions and stakeholders across the university. My responsibilities include providing support and development, as\
                    well as diagnosing and applying fixes to bugs found in current web applications. This is achieved by understanding and adapting to client needs and finding creative solutions. Within my team, we employ\
                    a collective process for planning new features for current or new applications and implementing the proposed changes.",
            color: "#81C14B", active: false, disabled: false,
        },
        {
            name: "Lead Hand/Operator", 
            company: "ASL Paving",
            dates: "August 2013 - October 2019",
            description: "In my position of Lead Hand at ASL Paving, I was responsible for excavating, grading and shaping roads by operating machinery\
                    and providing manual labour while delegating tasks to other members of the\
                    base crew.", 
            color: "#697268", active: false, disabled: false,
        },
    ]
  }),
  methods: {
    //eslint-disable-next-line no-unused-vars
    toggleProject(item) {
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

#position {
  font-family: AnonymousPro;
  font-size: 20pt;
  letter-spacing: 2.5pt;
  color: white;
  position: relative;
}

#projectSheet #arrowRight {
  opacity: 0;
}

#projectSheet:hover #arrowRight{
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

#company, #datesActive {
  font-family: AnonymousPro;
  color: black
}

.v-extension-panel {
  min-height: 200px;
}

#mobileProject {
  z-index: 10;
  font-size: 10pt;
  word-break: normal;
  word-wrap: break-word
}

</style>

