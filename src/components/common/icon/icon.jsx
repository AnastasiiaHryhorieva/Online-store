import ArrowRight from "@/../public/img/icons/arrow-right.svg?react";
import Heart from "@/../public/img/icons/heart.svg?react";
import Search from "@/../public/img/icons/search.svg?react";
import ShoppingBag from "@/../public/img/icons/shopping-bag.svg?react";
import User from "@/../public/img/icons/user.svg?react";
import Facebook from "@/../public/img/icons/facebook.svg?react";
import Instagram from "@/../public/img/icons/instagram.svg?react";
import Twitter from "@/../public/img/icons/twitter.svg?react";
import Bell from "@/../public/img/icons/bell.svg?react";

const icons = {
  arrowRight: ArrowRight,
  heart: Heart,
  search: Search,
  shoppingBag: ShoppingBag,
  user: User,
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  bell: Bell,
};

const Icon = ({ className, name, size = 24 }) => {
  const SVG = icons[name];

  return <SVG className={className} width={size} height={size} />;
};

export { Icon };
