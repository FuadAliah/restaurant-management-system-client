import { createTheme } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      color: '#181818',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
      color: '#181818',
    },
  },
  palette: {
    primary: {
      main: '#181818',
    },
    secondary: {
      main: '#FFF500',
    },
    background: {
      default: '#FFFFFF',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '5px',
          boxShadow: '0 2px 5px 0px rgba(0 0 0 / 0.2);'
        },
      },
    },
    MuiDrawer: {
			styleOverrides: {
				root: {
					'& .MuiDrawer-paper': {
						backgroundColor: "#181818",
						color: "#FFFFFF",
						border: 'none'
					}
				}
			}
		},
    MuiToolbar: {
      styleOverrides: {
        root: {
        backgroundColor: "#FFFFFF",
        borderBottom: '1px solid #e2e8f0'
        }
      }
    },
  },
});

export default theme;
