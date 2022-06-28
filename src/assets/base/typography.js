import colors from "./colors";

const { text } = colors;

const baseProperties = {
  fontWeightBold: 700,
  fontWeightRegular: 600,
  fontFamily: "'Barlow Semi Condensed', sans-serif"
};

const typography = {
  h3: {
    fontWeight: baseProperties.fontWeightBold,
    fontFamily: baseProperties.fontFamily,
    color: "white"
  },
  h4: {
    fontWeight: baseProperties.fontWeightRegular,
    fontFamily: baseProperties.fontFamily
  }
};

export default typography;
