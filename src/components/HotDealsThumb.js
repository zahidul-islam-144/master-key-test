import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsThunk } from "../redux-toolkit/thunkServices";
import Card from "./Card";

const HotDealsThumb = () => {

    const dispatch = useDispatch();
    const data = useSelector((state)=> state?.products?.productData)
    // const [products, setProducts] = useState(null)
   
    useEffect(()=>{
      dispatch(getAllProductsThunk());
      
    },[])

  return (
    <section className="hotDeals_thumb">
      <div className="left_contents">
        <p>
          We picked some <span>cool things</span> for you!
        </p>
      </div>
      <div className="hotDeals_products">
        <p>hot deals for you</p>

        <div className="products_block">
            <Card data={data}/>

        </div>
      </div>
    </section>
  );
};

export default HotDealsThumb;
