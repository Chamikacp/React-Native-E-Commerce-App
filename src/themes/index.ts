import i18n from "../i18n";
import { LightThemeColors, DarkThemeColors } from "./colors";
import { Images } from "./images";

class ThemeConstructor {
  private theme: string;

  // Both LightThemeColors and DarkThemeColors are of type ColorTypes
  Colors: typeof LightThemeColors;

  Images: typeof Images;

  constructor() {
    this.theme = "";
    this.Colors = LightThemeColors;
    this.Images = Images;
  }

  setTheme(theme: string) {
    if (!(theme === "light" || theme === "dark")) {
      throw new Error(i18n.themeError);
    }
    this.theme = theme;
    if (theme === "light") this.Colors = LightThemeColors;
    if (theme === "dark") this.Colors = DarkThemeColors;
  }

  getTheme() {
    return this.theme;
  }
}

const Theme = new ThemeConstructor();
export default Theme;
