export default {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    text: '#000',
    background: '#ffffff',
    primary: '#0000000',
    secondary: '#000000',
    inherit: '#000000',
    modes: {
      dark: {
        text: '#ffffff',
        background: '#222',
        primary: '#000000',
        secondary: '#66ffcc',
        inherit: '#7fffd4',
      },
    },
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
  },
  styles: {
    root: {
      fontFamily: 'body',
      color: 'text',
      bg: 'background',
    },
    h1: {
      fontSize: [4, 5, 6],
      color: 'primary',
    },
    a: {
      color: '#fff',
      textDecoration: 'none',
      ':hover': {
        color: 'primary',
        textDecoration: 'underline',
      },
    },
    svg: {
      color: 'primary',
      ':hover': {
        color: 'primary',
      },
    },
  },
}
