const getSizeLabel = (size) => {
  switch (size) {
    case "xs": {
      return "xs";
    }
    case "small": {
      return "s";
    }
    case "medium": {
      return "m";
    }
    case "large": {
      return "l";
    }
    case "xl": {
      return "xl";
    }
  }
};

export { getSizeLabel };
