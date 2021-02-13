import { ApiContext } from "../context/ApiContext";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
	const { product, getProduct } = useContext(ApiContext);
	const { id } = useParams();
	useEffect(() => {
		if (!product) {
			console.log(id, product);
			getProduct(id);
		}
		console.log(product);
	}, []);
	return product ? (
		<div className='Product page'>
			{product.name}
			<img src={product.images[0].src} alt='' />
		</div>
	) : (
		<div className='Product'>Loading Product</div>
	);
};
export default Product;
