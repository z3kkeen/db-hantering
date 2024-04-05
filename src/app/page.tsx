import Transactions from "./components/Transactions";
import BuyButton from "./components/BuyButton";

async function getData() {
	const res = await fetch("https://api.coincap.io/v2/assets");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

type crypto = {
	id: string;
	symbol: string;
	name: string;
	priceUsd: string;
	changePercent24Hr: string;
};

export default async function Home() {
	const { data } = await getData();

	return (
		<main className="flex pt-4 flex-wrap items-center justify-center gap-2 bg-emerald-100">
			<Transactions api={data} />
      <h1 className="tracking-wider mt-8 text-slate-600 text-xl"><b>Crypto currencies:</b></h1>
			<div className="w-full">
				<ul className="flex flex-wrap gap-2 justify-center items-center">
					{data.map((crypto: crypto) => (
						<li key={crypto.id} className="text-slate-600 border-2 border-emerald-400 w-80 p-5 rounded flex flex-col items-center">
							<span><b>SYMBOL: </b>{crypto.symbol}</span>
							<span><b>NAME: </b>{crypto.name}</span>
							<span>
								<b>PRICE</b> {Number(crypto.priceUsd).toLocaleString("fi-FI", {
									style: "currency",
									currency: "USD",
								})}
							</span>
							<span><b>LAST 24H: </b>{Number(crypto.changePercent24Hr).toFixed(2)}%</span>
							<BuyButton symbol={crypto.symbol} price={crypto.priceUsd} />
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}