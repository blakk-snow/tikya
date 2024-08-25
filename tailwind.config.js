// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito-extralight': ['Nunito_200ExtraLight'],
        'nunito-light': ['Nunito_300Light'],
        'nunito-regular': ['Nunito_400Regular'],
        'nunito-medium': ['Nunito_500Medium'],
        'nunito-semibold': ['Nunito_600SemiBold'],
        'nunito-bold': ['Nunito_700Bold'],
        'nunito-extrabold': ['Nunito_800ExtraBold'],
        'nunito-black': ['Nunito_900Black'],
        'nunito-regular-italic': ['Nunito_400Regular_Italic'],
      }
    },
  },
  plugins: [],
};
