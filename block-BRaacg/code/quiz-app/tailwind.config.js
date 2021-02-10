module.exports = {
  purge: [{
    mode:'layers',
    content:['./views/**/**.ejs']
  }],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        cwc:{
          red:'#E84977',
          blue:'#49AADE',
          gray:'#222222'
        }
      }
    },

  },
  variants: {
    extend: {
      translate: ['motion-reduce'],
      textDecoration: ['focus-visible'],
    },
  },
  plugins: [
    require('tailwindcss-interaction-variants'),
  ],
}