let invoices = [
	{ number: 1, name: 'one', amount: '$2000', due: '12/12/2020' },
	{ number: 2, name: 'two', amount: '$3000', due: '12/12/2020' },
	{ number: 3, name: 'three', amount: '$4000', due: '12/12/2020' },
	{ number: 4, name: 'four', amount: '$5000', due: '12/12/2020' },
	{ number: 5, name: 'five', amount: '$6000', due: '12/12/2020' },
	{ number: 6, name: 'six', amount: '$7000', due: '12/12/2020' },
	{ number: 7, name: 'seven', amount: '$8000', due: '12/12/2020' },
	{ number: 8, name: 'eight', amount: '$9000', due: '12/12/2020' }
];

export function getInvoices() {
	return invoices;
}

export function getInvoice(number) {
	return invoices.find((invoice) => invoice.number === number);
}

export function deleteInvoice(number) {
	invoices = invoices.filter((invoice) => invoice.number !== number);
}
