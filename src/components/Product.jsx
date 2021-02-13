import { ApiContext } from "../context/ApiContext";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

// Main Product component
const Product = () => {
	const [quantity, setQuantity] = useState(0);
	const { product, getProduct, category } = useContext(ApiContext);
	const { id } = useParams();

	// Get products from URL params if no product was selected from /categories
	useEffect(() => {
		if (!product && !category) getProduct(id);
	}, []);

	// handle Quantity input change
	// takes event target value -> changes quantity state
	const handleChange = (val) => {
		val >= 0 && !isNaN(val) ? setQuantity(val) : setQuantity(0);
	};
	const defaultImg =
		"https://freepngimg.com/thumb/grocery/53777-8-grain-png-download-free.png";

	return product ? (
		// return this if product is fetched

		<div className='Product page'>
			<div className='meta'>
				{/* Render Default image if not specified */}
				<img
					id='product-image'
					src={product.images[0]?.src || defaultImg}
					alt=''
				/>
				<div className='commerce'>
					<h2>{product.name}</h2>
					<br />
					<div className='content'>
						<h3 className='fields'>
							<b>Price: ₹ </b>
							{product.regular_price}/kg
						</h3>
						<br />

						<h3>
							{/* Render if price is discounted else render null */}
							{product.regular_price !== product.price ? (
								<>Discounted Price : ₹ {product.price} /kg</>
							) : null}{" "}
						</h3>
						<h4>Add to cart</h4>
						<br />

						{/* Number input */}
						<span id='quantity'>
							Quantity:{" "}
							<input
								type='number'
								id='qty'
								onChange={(e) => {
									handleChange(e.target.value);
								}}
								min='0'
								range='[0-9]'
								value={quantity}
							/>
						</span>
						<br />
						{/* Rendering cost in Disabled Text area */}
						<span id='cost'>
							Cost:
							<input
								disabled
								readOnly
								type='text'
								min='1'
								value={`₹ ${quantity * product.price}`}
							/>
						</span>
					</div>
				</div>
			</div>
		</div>
	) : (
		// return default loading
		<div className='Product page'>Loading Product ... </div>
	);
};
export default Product;
