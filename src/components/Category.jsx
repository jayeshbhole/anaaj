import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

// Individual category and its products
const Category = (props) => {
	const { products, getProduct, category, categories } = useContext(
		ApiContext
	);
};
const CategoryItem = (props) => {
	const { getProduct } = useContext(ApiContext);
	const { id, slug, price, name, images } = props.p;

	const history = useHistory();
	const handleClick = (id, slug) => {
		// Fetch required product
		getProduct(id);
		// Redirect too product page
		history.push(`/product/${id}/${slug}`);
	};

	return (
		<div key={id} className='product' onClick={() => handleClick(id, slug)}>
			<img
				className='product-img'
				src={
					images[0]
						? images[0].src
						: "https://i1.wp.com/smartanaaj.com/wp-content/uploads/2021/01/product.png?fit=1539%2C2052&ssl=1"
				}
				alt=''
			/>
			{name}
			<span className='price'>₹ {price}/kg</span>
		</div>
	);
};
export default Category;
