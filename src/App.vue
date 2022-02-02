<template>
  <v-app id="app" style=" isPresenting ? background: black : background: white">
    <v-navigation-drawer
      v-if="!isPresenting"
      color="black"
      id="navDrawer"
      dark
      height="100%"
      width="45%"
      v-model="drawer"
      temporary
      app
    >
      <v-divider></v-divider>

      <v-list dense dark>

        <v-list-item
          dark
          v-for="item in menuItems"
          :key="item.name"
          link
          router
          v-bind:to="item.link"
        >
          <v-list-item-icon>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title id="drawerTitle">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar v-if="!isPresenting" prominent dark color="black" max-height="128px" class="mx-sm-2 mx-md-12 px-md-12 ">
      <v-container fill-height fill-width>
        <v-row>
          <v-col v-if="$vuetify.breakpoint.smAndDown">
              <v-app-bar-nav-icon style="position: absolute" @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-col>
          <v-col>
            <h3 id="title" class="my-auto uppercase">
              Sam Wilkinson
            </h3>
          </v-col>
        </v-row>
      </v-container>

      <v-spacer></v-spacer>

      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          color="#696969"
          text
          v-for="item in menuItems"
          :key="item.name"
          router
          v-bind:to="item.link"
          >
            {{item.name}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import '@mdi/font/css/materialdesignicons.css'

export default {
  data: () => ({
    drawer: null,
    menuItems: [
      {name: "Home", link: "/", icon: 'mdi-home'},
      {name: "About", link: '/about', icon: 'mdi-information-outline'},
      {name: "Projects", link: "/projects", icon: 'mdi-folder'},
      {name: "Experience", link: "/experience", icon: 'mdi-worker'},
      {name: "Contact", link: "/contact", icon: 'mdi-contact-mail'},
    ]
  }),
  computed: {
    isPresenting() {
      return this.$route.name === 'presentation'
    }
  }
};
</script>

<style>
@import "./scss/styles.scss";
  .v-btn {
    -webkit-transition: color 1s; /* For Safari 3.0 to 6.0 */
    transition: color 1s; /* For modern browsers */
    font-family: PoppinsLight;
  }

  .v-btn:hover {
    color: #ff0000;
  }

  .v-btn:before {
    display: none;
  }

  .v-ripple__animation {
    display: none; 
  }

  .v-btn--active .v-btn__content { 
    color: white
  }

  .uppercase {
    text-transform: uppercase;
  }

  .v-app-bar-nav-icon {
    color: white;
  }

  #title {
    font-family: PoppinsReg;
    font-size: 16pt
  }

  #navDrawer {
    color: black
  }

  #drawerTitle {
    font-family: PoppinsReg
  }

</style>