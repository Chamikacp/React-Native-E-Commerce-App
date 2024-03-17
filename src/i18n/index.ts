import LocalizedStrings from "react-native-localization";

// en
import homeEn from "./en/home.en";
import genericEn from "./en/generic.en";
import productsEn from "./en/products.en";
import cartEn from "./en/cart.en";

// Default is en
const languageStrings = {
  ...homeEn,
  ...genericEn,
  ...productsEn,
  ...cartEn,
};

const strings = new LocalizedStrings({
  en: languageStrings,
});

export default strings;
