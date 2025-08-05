module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#F7F5F2",
        paper: "#1D374E",
        'custom-icon': '#1B3D6D',
      },
      fontFamily: {
        'consolas-bold': ['Consolas', 'SF Mono', 'SFMono-Regular', 'ui-monospace', 'Menlo', 'Liberation Mono', 'monospace', 'LiberationMono', 'Dinish'],
      },
    },
  },

  plugins: [require("tailwind-children")],
};
