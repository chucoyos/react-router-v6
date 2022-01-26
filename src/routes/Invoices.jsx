import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data';
export default function Invoices() {
	let invoices = getInvoices();
	let [searchParams, setSearchParams] = useSearchParams();
	return (
		<div>
			<h1>Invoices</h1>
			<div className='ui icon input'>
				<input
					value={searchParams.get('filter') || ''}
					onChange={(e) => {
						let filter = e.target.value;
						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
					type='text'
					placeholder='Search invoice...'
				/>
				<i aria-hidden='true' className='search icon'></i>
			</div>

			<div className='ui grid'>
				<div className='four wide column'>
					<div className='ui fluid vertical tabular menu'>
						{invoices
							.filter((invoice) => {
								let filter = searchParams.get('filter');
								if (!filter) return true;
								let name = invoice.name.toLowerCase();
								return name.startsWith(filter.toLowerCase());
							})
							.map((invoice) => (
								<div key={invoice.number}>
									<NavLink
										to={`/invoices/${invoice.number}`}
										className='item'
										style={({ isActive }) => {
											return {
												color: isActive ? 'blue' : '',
												borderColor: isActive ? 'blue' : ''
											};
										}}>
										{invoice.name}
									</NavLink>
								</div>
							))}
					</div>
				</div>
				<div className='four wide column'>
					<div className='ui segment'>
						<Outlet />
					</div>
				</div>
			</div>
		</div>
	);
}
