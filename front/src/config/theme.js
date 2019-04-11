
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#167BB3',
    },
    secondary: {
      main: '#25abf5',
    },
    textPrimary: {
      main: '#ffffff',
      contrast: '#f3f5f8',
    },
    common: {
      main: '#444242',
      hover: '#505050',
    },
  },
  spacing: {
    unit: 5,
  },
});

export default theme;
