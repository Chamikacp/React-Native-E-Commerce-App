/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ImageSourcePropType } from "react-native";

const Images = {
  icons: {
    chevron:
      require("../assets/images/icons/chevron/Arrow.png") as ImageSourcePropType,
    home: require("../assets/images/icons/home/Home.png") as ImageSourcePropType,
    cart: require("../assets/images/icons/cart/Cart.png") as ImageSourcePropType,
    account:
      require("../assets/images/icons/account/Account.png") as ImageSourcePropType,
  },
  tabs: {},
};

export { Images };
