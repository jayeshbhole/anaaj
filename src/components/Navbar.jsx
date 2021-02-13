import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='nav'>
			<ul>
				<li>
					<NavLink to='/'>Smart Anaaj</NavLink>
				</li>
				<li>
					<NavLink to='/shop'>Shop</NavLink>
				</li>
				<li>
					<NavLink to='/about'>About</NavLink>
				</li>
				<li>
					<NavLink to='/account'>Account</NavLink>
				</li>
				<li>
					<NavLink to='/cart'>Cart</NavLink>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
