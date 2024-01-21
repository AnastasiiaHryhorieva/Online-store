import ArrowRight from "src/assets/images/icons/arrow-right.svg?react";
import Heart from "src/assets/images/icons/heart.svg?react";
import Search from "src/assets/images/icons/search.svg?react";
import ShoppingBag from "src/assets/images/icons/shopping-bag.svg?react";
import User from "src/assets/images/icons/user.svg?react";
import Facebook from "src/assets/images/icons/facebook.svg?react";
import Instagram from "src/assets/images/icons/instagram.svg?react";
import Twitter from "src/assets/images/icons/twitter.svg?react";

const icons = {
  arrowRight: ArrowRight,
  heart: Heart,
  search: Search,
  shoppingBag: ShoppingBag,
  user: User,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
};

const Icon = ({ className, name, size = 24 }) => {
  const SVG = icons[name];

  return <SVG className={className} width={size} height={size} />;
};

export { Icon };
