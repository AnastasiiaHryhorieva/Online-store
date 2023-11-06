import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useQuery } from "graphql-hooks";

const HOMEPAGE_QUERY = `query MyQuery {
  allProducts {
    title
  }
}`;

function App() {
  const { loading, error, data } = useQuery(HOMEPAGE_QUERY);
  console.log(data);
  return (
    <>
      <Header />
      <Main />
      <Footer />
      {loading ? JSON.stringify(loading) : JSON.stringify(data)}
    </>
  );
}

export default App;
