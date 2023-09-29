import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#003C96',
            dark: '#001E64',
            light: '#B4C8FF'
        },
        background: {
            default: '#FFFFFF',
            paper: '#E9EAEA'
        },
        secondary: {
            main: '#FFB900'
        },
        text: {
            primary: '#2C2A29',
            secondary: '#808185',
            disabled: '#AAABAD'
        },
        error: {
            main: '#EE505A'
        },
        warning: {
            main: '#FF9500'
        },
        success: {
            main: '#00BE64'
        }
    }
});

export default theme;