import { NavLink } from "react-router-dom";

import { catalogSidebarItems } from "@/data/catalog-sidebar-items";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SidebarCatalog = ({ className }) => {
  return (
    <aside className={className}>
      <Accordion className="grid gap-4" type="multiple">
        {catalogSidebarItems.map((item, index) => (
          <AccordionItem key={index} value={"item-" + index}>
            <AccordionTrigger className="w-auto text-base font-normal uppercase">
              {item.category}
            </AccordionTrigger>
            <AccordionContent className="grid gap-2 pb-0 pt-2">
              {item.subcategories.map((subcategory, index) => (
                <NavLink
                  key={index}
                  className="truncate text-sm [&.active]:font-bold [&.active]:underline [&.active]:underline-offset-4"
                  to={"/catalog" + item.url + "/" + subcategory.url}
                >
                  {subcategory.title}
                </NavLink>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};

export { SidebarCatalog };
