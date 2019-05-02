import { createMuiTheme } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: red,
        background: {
            default: blue[500],
            paper: '#fff',
            background2: '#ededed'
        }
    },
    typography: {
        useNextVariants: true
    }
})

export default theme