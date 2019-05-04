import { createMuiTheme } from "@material-ui/core";
import { blue, red, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
        background: {
            default: blue[500],
            paper: '#fff',
            background2: purple[600]
        }
    },
    typography: {
        useNextVariants: true
    }
})

export default theme