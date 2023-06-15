import "./Home.css";
import productsList from '../productsList';
import { Product } from '../Components/Product';


export default function Home(){
  return (
   <div>
      <h1>Product Page</h1>
      <div className="products">
        {productsList.map((product, index)=>
        (<Product key={index} data={product}/>
        ))} 
      </div>
    </div>
  )
};
