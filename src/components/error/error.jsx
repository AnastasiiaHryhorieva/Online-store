import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-title font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mt-4 max-w-xl text-gray-400">
        <i>{error.statusText || error.message}</i>
      </p>
    </section>
  );
};

export { Error };
