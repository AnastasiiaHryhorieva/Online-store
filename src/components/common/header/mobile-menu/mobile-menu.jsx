import { NavLink } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { navigationItems } from "@/data/navigation-items";
import { Icon } from "@/components/common/icon/icon";

const MobileMenu = ({ className }) => {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={className}>
        <span className="sr-only">toggle menu</span>
        <Icon name="menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[200px] space-y-5 rounded-sm p-4 shadow-lg"
        sideOffset={12}
        align="start"
      >
        {navigationItems.map((item) => (
          <DropdownMenuItem key={item.id} className="p-0">
            <NavLink className="link-hover pb-[2px] uppercase" to={item.url}>
              {item.title}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { MobileMenu };
