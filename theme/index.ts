import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  fonts: {
    heading: 'Zen Kurenaido, sans-serif',
    body: 'Zen Kurenaido, sans-serif',
    // a: 'Zen Kurenaido, sans-serif',
    // button: 'Zen Kurenaido, sans-serif',
  },
  styles: {
    global:(props)=> ({
      body: {
        bg: mode()(props),
        color: mode()(props),
      },
    }),
  },
});

export default theme;
