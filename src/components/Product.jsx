import { ApiContext } from "../context/ApiContext";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
	const { product, getProduct } = useContext(ApiContext);
	const { id } = useParams();
	useEffect(() => {
		if (!product) getProduct(id);
	}, []);
	return product ? (
		<div className='Product page'>
			{product.name}
			<img id='product-image' src={product.images[0].src} alt='' />
		</div>
	) : (
		<div className='Product page'>Loading Product ... </div>
	);
};
export default Product;
