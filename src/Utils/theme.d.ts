import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      lightBlue: string;
      darkBlue: string;
      lightGreen: string;
    };
  }

  interface ThemeOptions {
    custom?: {
      lightBlue?: string;
      darkBlue?: string;
      lightGreen?: string;
    };
  }
}
