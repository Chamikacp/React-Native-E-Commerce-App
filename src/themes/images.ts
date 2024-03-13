/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { ImageSourcePropType } from "react-native";

const Images = {
  icons: {
    chevron:
      require("../assets/images/icons/chevron/Arrow.png") as ImageSourcePropType,
    user: require("../assets/images/icons/user/user.png") as ImageSourcePropType,
    check:
      require("../assets/images/icons/check/check.png") as ImageSourcePropType,
    mute: require("../assets/images/icons/mute/mute.png") as ImageSourcePropType,
    unmute:
      require("../assets/images/icons/unmute/unmute.png") as ImageSourcePropType,
    report:
      require("../assets/images/icons/report/report.png") as ImageSourcePropType,
    analyzing:
      require("../assets/images/icons/analyzing/analyzing.png") as ImageSourcePropType,
    chevronRight:
      require("../assets/images/icons/chevronRight/chevronRight.png") as ImageSourcePropType,
    rightArrow:
      require("../assets/images/icons/arrow/right/right.png") as ImageSourcePropType,
    expiry:
      require("../assets/images/icons/expiry/expiry.png") as ImageSourcePropType,
  },
  tabs: {},
};

export { Images };
