import { DefaultTheme } from "@react-navigation/native";
import colors from "../config/colors";

const myTheme = {
    //grab all the default themes except for color
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
}

export default myTheme