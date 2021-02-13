import { ApiContext } from "../context/ApiContext";
import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
const Product = () => {
	const [quantity, setQuantity] = useState(0);
	const [cost, setCost] = useState(0);
	const { product, getProduct, category } = useContext(ApiContext);
	const { id } = useParams();
	useEffect(() => {
		if (!product && !category) getProduct(id);
	}, []);
	const handleChange = (type, val) => {
		switch (type) {
			case "text":
				val >= 0 && !isNaN(val) ? setQuantity(val) : setQuantity(0);
				break;
			case "inr":
				setQuantity(quantity + 1);
				break;
			case "dcrs":
				setQuantity(quantity - 1);
				break;
			default:
				break;
		}
	};
	return product ? (
		<div className='Product page'>
			<div className='meta'>
				<img
					id='product-image'
					src={
						product.images[0]?.src ||
						"https://freepngimg.com/thumb/grocery/53777-8-grain-png-download-free.png"
					}
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
						<span>
							{product.regular_price === product.price ? (
								<>
									<b>Discounted Price : ₹</b> {product.price}
									/kg
								</>
							) : null}{" "}
						</span>
						<h4>Add to cart</h4>
						<br />
						<span id='quantity'>
							Quantity:{" "}
							<input
								type='number'
								id='qty'
								onChange={(e) => {
									handleChange("text", e.target.value);
								}}
								min='0'
								range='[0-9]'
								value={quantity}
							/>
						</span>
						<br />
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
		<div className='Product page'>Loading Product ... </div>
	);
};
export default Product;
