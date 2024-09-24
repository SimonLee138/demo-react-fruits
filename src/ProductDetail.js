import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Title from './Title';
import QuantityBtn from './QuantityBtn';

export default function ProductDetail() {
    let params = useParams();
    let [productDetail, setProductDetail] = useState(null)

    useEffect(() => {
        fetch('https://hoyinleung.github.io/demoapi/react-basic-product.json')
            .then(response => response.json())
            .then(data => {
                let productInfo = data.find((element) => {
                    return element.id === parseInt(params.id)
                })
                setProductDetail(productInfo)
            })
    }, [params.id])
    return (
        <div>
            {
                productDetail &&
                <div>
                    <Title mainTitle={productDetail.name + " detail"}></Title>
                    <p>Name: {productDetail.name}</p>
                    <p>Price: {productDetail.price}</p>
                    <p>Description: {productDetail.description}</p>
                    <QuantityBtn productInfo={productDetail}></QuantityBtn>
                </div>
            }
            <Link to="/">Back to product list page</Link>
        </div>
    )
}
