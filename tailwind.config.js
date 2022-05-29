module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    FontFamily: {
      Vibes: ["Great Vibes"],
    },

    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")],
};
