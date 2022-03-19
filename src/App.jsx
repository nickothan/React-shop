//* import components
import Layout from "./containers/Layout";
import Header from "./components/Header";

//* import router
import Router from "./routes";


const App = () => {
  return (
    <>

    <Layout>
      <Header/>
      <Router/>
    </Layout>
    </>
  );
}

export default App;
