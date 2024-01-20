import { useRouteError } from "react-router-dom";

// TODO: add some background picture
const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-[30px] font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-400 mt-4">
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
};

export { Error };
