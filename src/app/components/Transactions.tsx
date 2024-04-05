import { getTransactions } from '@/utils/handleDatabase'

function calcResult(oldPrice: number, newPrice: number) {
	return ((newPrice - oldPrice) / oldPrice) * 100;
}

export default async function Transactions(props: any) {
	const data = await getTransactions();

	return (
		<div className='w-full flex flex-col items-center'>
			<h1 className='tracking-wider text-xl text-slate-700'><b>Transactions:</b></h1>
			<ul className='flex gap-2 justify-center flex-col border-2 border-emerald-400 px-3 py-2 rounded text-slate-700'>
				{data.map((transaction: any) => (
					<li key={transaction.id} className='flex gap-5'>
						<span><b>#{transaction.id}</b></span>
						<span><b>{transaction.symbol}</b></span>
						<span><b>amount: </b>{transaction.count}</span>
						<span>
							<b>price: </b>{Number(transaction.price).toLocaleString("fi-FI", {
								style: "currency",
								currency: "USD",
							})}
						</span>
						<span>
							<b>profit: </b>{calcResult(
								transaction.price,
								props.api.filter(
									(crypto: any) => crypto.symbol === transaction.symbol,
								)[0].priceUsd,
							).toFixed(2)}
							%
						</span>
					</li>
				))}
			</ul>
		</div>
	);
}
