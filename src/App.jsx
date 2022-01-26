import { NavLink, Outlet } from 'react-router-dom';

export default function App() {
	return (
		<div className='ui container'>
			<nav className='ui secondary pointing menu'>
				<NavLink to='/' className='item'>
					Home
				</NavLink>
				<NavLink to='/invoices' className='item'>
					Invoices
				</NavLink>
			</nav>

			<Outlet />
		</div>
	);
}
