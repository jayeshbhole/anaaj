import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

const Category = (props) => {
	const { products, getProduct } = useContext(ApiContext);
	const history = useHistory();
	const handleClick = (id, slug) => {
		getProduct(id);
		history.push(`/product/${id}/${slug}`);
	};
	return (
		<div className='products'>
			{products.length
				? products.map((p) => {
						return (
							<div
								className='product'
								key={p.id}
								onClick={() => {
									handleClick(p.id, p.slug);
								}}>
								<img
									className='product-img'
									src={
										p.images[0]
											? p.images[0].src
											: "https://i1.wp.com/smartanaaj.com/wp-content/uploads/2021/01/product.png?fit=1539%2C2052&ssl=1"
									}
									alt=''
								/>
								{p.name}
								<span className='price'>₹ {p?.price}/kg</span>
							</div>
						);
				  })
				: "No Products to show"}
		</div>
	);
};
export default Category;
