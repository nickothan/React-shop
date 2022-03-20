//* import components
import Layout from "./containers/Layout";
import Header from "./components/Header";
//* import router
import Router from "./routes";
//* import context
import AppContext from "context/AppContext";
import useInitialState from 'hooks/UseInitialState'


const App = () => {
  const initialState = useInitialState()
  return (
    <>
    <AppContext.Provider value={initialState} >

    <Layout>
      <Header/>
      <Router/>
    </Layout>
    </AppContext.Provider>
    </>
  );
}

export default App;
