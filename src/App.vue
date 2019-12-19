<template>
  <v-app id="app" style="background: black">
    <v-toolbar prominent dark color="black" max-height="128px" class="mx-12 px-12">
        <v-container fill-height>
          <h3 id="title" class="my-auto uppercase">
            Sam Wilkinson
          </h3>
        </v-container>

        <v-spacer></v-spacer>

        <v-toolbar-items>
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

export default {
  data: () => ({
    toggle_exclusive: undefined,
    menuItems: [
      {name: "Home", link: "/"},
      {name: "About", link: '/about'},
      {name: "Projects", link: "/projects"},
      {name: "Contact", link: "/contact"},
    ]
  }),
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

  #title {
    font-family: PoppinsReg;
    font-size: 16pt
  }

</style>