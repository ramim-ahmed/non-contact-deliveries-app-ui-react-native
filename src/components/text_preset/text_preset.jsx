import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";


const BASE = {
    fontFamily: typography.body ,
    color: colors.grey,
    fontSize: 17
}

const BASE_BOLD = {
    fontFamily: typography.bold,
    color: colors.black
}

const BOLD = {
    colors: colors.black,
    fontFamily: typography.secondaryBold
}
const SEMIBOLD = {
     color: colors.white,
     fontFamily: typography.semiBold
}

const MEDIUM = {
    colors: colors.green,
    fontFamily: typography.medium
}

export const presets = {
    default: BASE,
    bold: BASE_BOLD,
    h1: {
        ...BASE_BOLD,
        fontSize: 34,
    },

    h2: {
        ...BOLD,
        fontSize: 22,
    },

    h3: {
      ...SEMIBOLD,
      fontSize: 15,
    },
    h4: {
        ...MEDIUM,
        fontSize: 17
    }
    
}