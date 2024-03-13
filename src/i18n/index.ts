import LocalizedStrings from "react-native-localization";

// en
import homeEn from "./en/home.en";
import genericEn from "./en/generic.en";

// Default is en-UK
const languageStrings = {
  ...homeEn,
  ...genericEn,
};

const strings = new LocalizedStrings({
  en: languageStrings,
});

export default strings;
