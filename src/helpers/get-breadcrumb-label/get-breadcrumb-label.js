const getBreadcrumbLabel = (pathname) => {
  switch (pathname) {
    case "/": {
      return "Головна сторінка";
    }
    case "/account": {
      return "Особистий кабінет";
    }
    case "/account/personal-information": {
      return "Особисті дані";
    }
    case "/account/orders": {
      return "Мої замовлення";
    }
    case "/account/favorites": {
      return "Улюблені товари";
    }
    default:
      return "unknown";
  }
};

export { getBreadcrumbLabel };
