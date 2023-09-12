import GlobalProvider from "./context";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Body from "./components/Body";


function App(){




    return(
      <div className="App">

        <GlobalProvider>
          <Layout>
              <Navbar/>
              <Body/>
          </Layout>
        </GlobalProvider>
      
      </div>
    )


}

export default App;
