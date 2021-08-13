import { Route, Switch } from 'react-router-dom';
import './App.css';

import Allpro from "./component/All-Product"
import ProductDetail from "./component/ProductDetail"
import Navbar1 from "./component/Navbar1"
import Cart1 from './component/cart';
function App() {

   
  
  return (
    <div className="App">
     
      <Navbar1/>
      <Switch>
    

       
          <Route exact path="/cart"><Cart1/></Route>
        <Route exact path="/home">Home</Route>
        <Route exact path="/allproduct/"><Allpro /></Route>
        <Route exact path="/allproduct/:id">
          
          <ProductDetail/>
        </Route>
        
        <Route>Page Not Found</Route>
      </Switch>
     
    </div>
  );
 
}

export default App;
