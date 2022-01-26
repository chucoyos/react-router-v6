import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Invoices from './routes/Invoices';
import Invoice from './routes/Invoice';

render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />}>
				<Route path='/invoices' element={<Invoices />}>
					<Route index element={<div>Select an Invoice</div>} />
					<Route path=':invoiceId' element={<Invoice />} />
				</Route>
			</Route>
			<Route path='*' element={<div>Not Found</div>} />
		</Routes>
	</BrowserRouter>,
	document.getElementById('root')
);
