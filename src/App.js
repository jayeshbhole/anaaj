// Components
import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Category from "./components/Category.jsx";
import Product from "./components/Product.jsx";
import Shop from "./components/Shop.jsx";
import Navbar from "./components/Navbar.jsx";

// Contexts
import { ApiContextProvider } from "./context/ApiContext";
// import CartContext from "./context/CartContext";

// App
const App = () => {
	return (
		<React.Fragment>
			<ApiContextProvider>
				<BrowserRouter>
					<Navbar>Anaaj</Navbar>
					<>
						<Switch>
							<Route
								path='/category'
								component={() => <Category />}
							/>
							<Route
								path='/product/:id/:name'
								component={() => <Product />}
							/>
							<Route exact path='/shop' component={Shop} />
							<Route exact path='/' component={Home} />
							<Route path='/404' component={Err} />
							<Redirect to='/404' />
						</Switch>
					</>
				</BrowserRouter>
			</ApiContextProvider>
		</React.Fragment>
	);
};
const Home = () => {
	return (
		<div className='page'>
			<h1>Smart Anaaj</h1>
		</div>
	);
};
const Err = (props) => {
	return (
		<div className='page'>
			<h1>{props.id} Error</h1>
			<br /> Page not found
		</div>
	);
};

export default App;
