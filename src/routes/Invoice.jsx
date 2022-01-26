import { useParams, useNavigate } from 'react-router-dom';
import { getInvoice } from '../data';
import { deleteInvoice } from '../data';
export default function Invoice() {
	let navigate = useNavigate();
	let params = useParams();
	let invoice = getInvoice(parseInt(params.invoiceId));
	return (
		<div>
			<h4>{invoice.name}</h4>
			<p>Number: {invoice.number}</p>
			<p>Due date: {invoice.due}</p>
			<button
				className='ui button'
				onClick={() => {
					deleteInvoice(invoice.number);
					navigate('/invoices');
				}}>
				Delete
			</button>
		</div>
	);
}
