import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import QuantityBtn from "./QuantityBtn";

export default function ProductList() {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => {
                setProductList(data);
                console.log(productList)
            })
        console.log(productList);

    }, [])

    return (
        <>
            <Title mainTitle="Fruits"></Title>
            <div>
                {
                    productList.map(product => (
                        <div key={product.id}>
                            <div>{product.name}</div>
                            <div>{product.price}</div>
                            <Link to={'./product/' + product.id}>
                                <div>{product.image}</div>
                            </Link>
                            <div>{product.description}</div>
                            <QuantityBtn productInfo={product}></QuantityBtn>
                        </div>
                    ))
                }
            </div>
        </>
    )
}