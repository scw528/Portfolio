<template>
  <v-container fill-height>
    <v-row class="ma-auto" justify="center" align="end" style="height: inherit">
      <v-col lg="5" md="6" sm="9">
        <v-row v-for="item in contactItems" :key="item.name" align="end">
          <v-sheet
            tile
            width="100%"
            height="400px"
            :color="item.color"
          >
          <a :href="item.href" :target="item.target">
            <v-container fill-height>
                <v-row align="center" justify="center">
                  <h1 class="text-center">{{item.name}}</h1>
                </v-row>
            </v-container>
          </a>

          </v-sheet>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    contactItems: [
      {name: "Email", href: 'mailto:samuelwilkinson@me.com', target: "", color: "#9DABDD"},
      {name: "LinkedIn", href: 'https://www.linkedin.com/in/sam-wilkinson-17a995185/', target: "_blank", color: "#70AE98"}
    ]
  })
}
</script>

<style>

  a {
    text-decoration: none;
  }

  .v-sheet:hover {
    transform: scale(1.003);
  }

  h1 {
    font-family: PoppinsReg;
    color: white;
  }

</style>

