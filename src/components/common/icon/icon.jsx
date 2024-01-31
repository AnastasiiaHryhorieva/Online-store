import ArrowRight from "@/assets/img/icons/arrow-right.svg?react";
import Heart from "@/assets/img/icons/heart.svg?react";
import Search from "@/assets/img/icons/search.svg?react";
import ShoppingBag from "@/assets/img/icons/shopping-bag.svg?react";
import User from "@/assets/img/icons/user.svg?react";
import Facebook from "@/assets/img/icons/facebook.svg?react";
import Instagram from "@/assets/img/icons/instagram.svg?react";
import Twitter from "@/assets/img/icons/twitter.svg?react";
import Bell from "@/assets/img/icons/bell.svg?react";
import Trash from "@/assets/img/icons/trash.svg?react";

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
  trash: Trash,
};

const Icon = ({ className, name, size = 24 }) => {
  const SVG = icons[name];

  return <SVG className={className} width={size} height={size} />;
};

export { Icon };
