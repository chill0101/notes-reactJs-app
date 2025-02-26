import { createTheme } from "@mui/material";
import {red} from "@mui/material/colors";


export const mainTheme = createTheme({

    palette: {
        primary: {
            main: "#222831",

        },
        secondary: {
            main: "#543884",

        },
        error: {
            main: red.A400
        },
        background: {
            default: "#f5f5f5"
        }
    }

});


