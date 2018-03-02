import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  bodyFontFamily: ['Georgia', 'serif'],
  headerFontFamily: ['Bitter', 'sans-serif'],
  headerWeight: 400,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400', '700'],
    },
    {
      name: 'Bitter',
      styles: ['400', '700']
    }
  ],
});

export default typography;
