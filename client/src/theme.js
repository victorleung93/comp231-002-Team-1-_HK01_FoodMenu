import {createTheme} from '@mui/material/styles';

export const shades = {
    primary:{
        100: "#cccccc",
        200: "#999999",
        300: "#666666",
        400: "#333333",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000"
    },
    secondary:{
        100: "#f7ccd2",
        200: "#ef99a4",
        300: "#e66677",
        400: "#de3349",
        500: "#d6001c",
        600: "#ab0016",
        700: "#800011",
        800: "#56000b",
        900: "#2b0006"
    },
    neutral:{
        100: "#ffffcc",
        200: "#ffff99",
        300: "#ffff66",
        400: "#ffff33",
        500: "#ffff00",
        600: "#cccc00",
        700: "#999900",
        800: "#666600",
        900: "#333300"
    }
}

export const theme = createTheme({
    palette:{
        parimary:{
            main:shades.primary[500]
        },
        secondary:{
            main: shades.secondary[500]
        },
        neutral:{
            dark: shades.neutral[700],
            main: shades.neutral[500],
            light: shades.neutral[100]
        }
    },
    typography:{
        fontFamily: ["Fauna One", "sans-serif"].join(","),
        fontSize: 11,
        h1:{
            fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 48,
        },
        h2:{
            fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 36,
        },
        h3:{
            fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 24, color:shades.primary[700]
        },
        h4:{
            fontFamily: ["Cinzel", "sans-serif"].join(","),
        fontSize: 14,
        },
    }
})