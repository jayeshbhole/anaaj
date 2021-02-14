import { ApiContext } from "../context/ApiContext";
import { useContext } from "react";
import { useHistory } from "react-router-dom";

// Individual category and its products
const Category = (props) => {
	// Consume context
	const { products, category, categories } = useContext(ApiContext);
	return (
		<div className='category'>
			<h4>
				Showing results for{" "}
				{categories.find((a) => a.id === category)?.name || "__"}
			</h4>
			<br />
			{
				// Render list of porducts if products.length !== 0 else prompt no available products
				products.length ? (
					<div className='products'>
						{products.map((p) => {
							return <CategoryItem p={p} key={p.slug} />;
						})}
					</div>
				) : (
					!!category && <div>No products available</div>
				)
			}
			{!category && "Please Select a Category"}
		</div>
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
			{/* display product image or default image */}
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
