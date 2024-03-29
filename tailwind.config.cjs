module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui"),
    //require('@tailwindcss/aspect-ratio'),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          primary: "#52b2d6",
          "primary-content": "#ffffff",
          neutral: "#072c3f",
          "neutral-content": "#dfeef6",
          "base-100": "#0b3b54",
          "base-content": "#dfeef6",
        },
      },
    ],
  },
	theme: {
		extend: {},
	},
};
