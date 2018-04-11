import Vue from "vue/dist/vue.js";
var app = new Vue({
  data: {
    greeting: "Welcome to your Vue.js app!",
    docsURL: "http://vuejs.org/guide/",
    discordURL: "https://chat.vuejs.org",
    forumURL: "http://forum.vuejs.org/"
  },
  methods: {
    humanizeURL: function(url) {
      return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    }
  }
}).$mount("#app");
