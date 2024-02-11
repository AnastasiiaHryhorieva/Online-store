import { navigationItems } from "@/data/navigation-items";
import { catalogSidebarItems } from "@/data/catalog-sidebar-items";

const getBreadcrumbLabel = (pathname) => {
  // By default, we take the last segment of the URL
  let label = pathname.split("/").at(-1);

  switch (pathname) {
    case "/": {
      label = "Головна сторінка";
      break;
    }
    case "/catalog": {
      label = "Каталог";
      break;
    }
    case "/catalog/bestsellers": {
      label = "Бестселери";
      break;
    }
    case "/account": {
      label = "Особистий кабінет";
      break;
    }
    case "/account/personal-information": {
      label = "Особисті дані";
      break;
    }
    case "/account/orders": {
      label = "Мої замовлення";
      break;
    }
    case "/account/favorites": {
      label = "Улюблені товари";
      break;
    }
  }

  navigationItems.forEach((item) => {
    if (pathname === item.url) {
      label = item.title;
    }
  });

  catalogSidebarItems.forEach((item) => {
    item.subcategories.forEach((subcategory) => {
      const url = "/catalog" + item.url + "/" + subcategory.url;

      if (pathname === url) {
        label = subcategory.title;
      }
    });
  });

  return label;
};

export { getBreadcrumbLabel };
