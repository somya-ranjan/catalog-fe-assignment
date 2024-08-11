const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4b40ee",
          light: "#3B82F6",
          dark: "#1E40AF",
        },
      },
    },
  },
  plugins: [],
});
