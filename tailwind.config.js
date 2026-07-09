/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fffffd",
        "dark-tree": "#111901",
        gray: "#9a8461",
        white1: "#fffffd",
        "light-gray": "#f5f5f5",
        white2: "#fffffd",
        white3: "#fffffd",
        gray1: "#9a8461",
        black: "#000",
        red: "#ff3d00",
        white4: "#fff",
        "dark-blue": "#0d1c34",
        "gray-2": "#dfdbcc",
        "dark-tree1": "#111901",
        white5: "#fff",
        "colors-white": "#fff",
      },
    },
    screens: {
      lg: {
        raw: "screen and (max-width: 1200px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
