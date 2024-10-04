/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {},
    backgroundImage:{
      'DarkBackgroundWallpaper':`url('https://wallpapers.com/images/high/1920x1080-hd-dark-storm-clouds-m4u5n5zmy1mc5wvg.webp')`|| 'none',
      'LightBackgroundWallpaper':`url('https://images.pexels.com/photos/259698/pexels-photo-259698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`|| 'none'
    },
    fontFamily:{
      playWrite:["Playwrite DE Grund", 'cursive']
    }
  },
  plugins: [],
}

