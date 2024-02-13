import { useLocation } from "react-router-dom";

import { SignIn } from "./sign-in/sign-in";
import { SignUp } from "./sign-up/sign-up";

const Auth = () => {
  const { pathname } = useLocation();

  const getScreen = (screen) => {
    switch (screen) {
      case "/sign-in": {
        return <SignIn />;
      }
      case "/sign-up": {
        return <SignUp />;
      }
    }

    return null;
  };

  return (
    <section className="pb-20 pt-10">
      <div className="container flex">{getScreen(pathname)}</div>
    </section>
  );
};

export { Auth };
