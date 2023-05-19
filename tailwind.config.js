/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "Light-red-bg": "#fff6f5",
        "Orangey-yellow-bg": "#fffbf2",
        "Green-teal-bg": "#f2fbfa",
        "Cobalt-blue-bg": "#f3f3fd",   

        "Light-red": "#ff5757",
        "Orangey-yellow": "#ffb01f",
        "Green-teal": "	#00bd91",
        "Cobalt-blue": "#1125d4",
        "Dark-grey": "#969197",

        "Light-slate-blue": "#7857ff",
        "Light-royal-blue": "#2e2be9",

        "Violet-blue" : "#4e21ca",
        "Persian-blue": "#2421ca",

        "Pale-blue": "#cfc4ff",
        "Light-lavender": "#c8c7ff",
        "Dark-gray-blue": "#303b5a",

        violet: "rgb(var(--color-violet) / 1)",
        persian: "rgb(var(--color-persian) / 0)",
      },
      fontFamily: {
        Hanken: "'Hanken Grotesk', sans-serif",
      }
    },
  },
  plugins: [],
}

