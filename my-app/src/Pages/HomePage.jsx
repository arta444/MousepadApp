import "./Home.css";
import productsList from '../productsList';
import { Product } from '../Components/Product';
import "./Home.css"


export default function Home() {

return (
  <div className="shop">
    <div className="shopTitle">
     <h1>Cart Page</h1>
     </div>
     
     <div className="products">
       {productsList.map((product, index)=>
       (<Product key={index} data={product}/>
       ))} 
     </div>
   </div>
 )
};
