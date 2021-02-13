import { useState, createContext } from "react";
// OAuth 1.0
import axios from "axios";
import addOAuthInterceptor from "axios-oauth-1.0a";
const client = axios.create();
addOAuthInterceptor(client, {
	key: process.env.REACT_APP_CK,
	secret: process.env.REACT_APP_CS,
	algorithm: "HMAC-SHA1",
});

const ApiContext = createContext({
	categories: [],
	category: null,
	products: [],
	product: {},
	getCategories: () => {},
	getProducts: () => {},
	getProduct: () => {},
});

const ApiContextProvider = (props) => {
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState();
	const [products, setProducts] = useState([]);
	const [product, setProduct] = useState({});
	const getCategories = () => {
		console.log("here");
		client
			.get("https://smartanaaj.com/wp-json/wc/v3/products/categories")
			.then((res) => {
				console.log(res.data);
				setCategories(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const getProducts = (categoryId) => {
		setCategory(categoryId);
		client
			.get(
				`https://smartanaaj.com/wp-json/wc/v3/products?category=${categoryId}`
			)
			.then((res) => {
				console.log(res.data);
				setProducts(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const getProduct = (id) => {
		client
			.get(`https://smartanaaj.com/wp-json/wc/v3/products/${id}`)
			.then((res) => {
				console.log(res.data);
				setProduct(res.data);
			})
			.catch((error) => {
				console.log(error);
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
