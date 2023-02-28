const app = new Vue({
  el: "#app",
  data: {
    message: "Lorem10",
    view: true,
    message1: "",
    checked: true,
  },
});

const events = new Vue({
  el: "#events",
  data: {
    counter: 0,
    cleanUrl: "",
    url: "",
  },
  methods: {
    hello: function (arg, events) {
      alert(`Hello ${arg}!`);
    },

    cleanerUrl: function () {
      this.cleanUrl = this.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    },
  },
});

const css = new Vue({
  el: "#css",
  data: {
    title: "Work withe Style",
    msg: "Hello",
    isRounded: false,
    sizeToggle: false,
    disabled: false,
    fontColor: "#ccc",
    backgroundColor: "yellow",
  },
  computed: {
    style: function () {
      return {
        color: this.fontColor,
        background: this.backgroundColor,
      };
    },
  },
});
