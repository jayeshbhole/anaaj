import { useState, createContext } from "react";

// OAuth 1.0 preparation
import axios from "axios";
import addOAuthInterceptor from "axios-oauth-1.0a";
// Axios client
const client = axios.create();
addOAuthInterceptor(client, {
	key: process.env.REACT_APP_CK,
	secret: process.env.REACT_APP_CS,
	algorithm: "HMAC-SHA1",
});

// Context for Data fetched API
const ApiContext = createContext({
	categories: [],
	category: null,
	products: [],
	product: null,
	error: null,
	getCategories: () => {},
	getProducts: () => {},
	getProduct: () => {},
});

// Context Provider
const ApiContextProvider = (props) => {
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState();
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState();

	// Default loading placeholder product information
	const loading = {
		id: "loading",
		name: "Loading",
		slug: "loading",
		price: "...",
		images: [
			{
				src: "/loading.png",
			},
		],
	};

	const getCategories = () => {
		client
			.get("https://smartanaaj.com/wp-json/wc/v3/products/categories")
			.then((res) => {
				setCategories(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const getProducts = (categoryId) => {
		setCategory(categoryId);
		setProducts([loading]);
		client
			.get(
				`https://smartanaaj.com/wp-json/wc/v3/products?category=${categoryId}`
			)
			.then((res) => setProducts(res.data))
			.catch((error) => {
				console.log(error);
			});
	};
	const getProduct = (id) => {
		setProduct();
		client
			.get(`https://smartanaaj.com/wp-json/wc/v3/products/${id}`)
			.then((res) => {
				setProduct(res.data);
			})
			.catch((error) => {
				// Set Error Data for the product page
				setProduct({
					name: "Product Not Found",
					images: [
						{
							src:
								"https://www.seekpng.com/png/detail/825-8254341_404-error-not-found.png",
						},
					],
				});
			});
	};
	return (
		<ApiContext.Provider
			value={{
				categories,
				category,
				products,
				product,
				getCategories,
				getProducts,
				getProduct,
			}}>
			{props.children}
		</ApiContext.Provider>
	);
};

export { ApiContext, ApiContextProvider };
