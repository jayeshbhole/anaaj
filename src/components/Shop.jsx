import { useEffect, useContext } from "react";

import Category from "./Category.jsx";
import { ApiContext } from "../context/ApiContext";

const Shop = () => {
	const { categories, category, getProducts, getCategories } = useContext(
		ApiContext
	);
	useEffect(() => {
		if (!categories.length) getCategories();
	}, []);
	const handleGetCategory = (id) => {
		getProducts(id);
	};
	return (
		<div className='Shop page'>
			<div className='categories'>
				{categories
					? categories.map((c) => {
							return (
								<div
									className={`categoryItem ${
										category === c.id ? "active" : ""
									}`}
									key={c.id}>
									<button
										onClick={() => handleGetCategory(c.id)}>
										{c.name}
										<img
											src={
												c.image
													? c.image
													: "https://freepngimg.com/thumb/grocery/53777-8-grain-png-download-free.png"
											}
											alt=''
										/>
									</button>
								</div>
							);
					  })
					: null}
			</div>
			<Category />
		</div>
	);
};
export default Shop;
