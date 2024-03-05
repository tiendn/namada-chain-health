import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useBlock() {
	const { data, error } = useSWR(
		"https://indexer.validatorvn.com/block?page=1&page_size=20",
		fetcher
	);

	let isHalted = false;
	let firstBlock;

	if (data) {
		console.log(data);
		firstBlock = data?.data?.[0]?.header;
		console.log("firstBlock", firstBlock);
		const blockTime = new Date(firstBlock.time);
		const currentTime = new Date();
		const differenceInMinutes = (currentTime.getTime() - blockTime.getTime()) / 60000;

		isHalted = differenceInMinutes > 1;
	}

	return {
		data: firstBlock,
		isLoading: !error && !data,
		isError: error,
		isHalted,
		lastScan: new Date().toLocaleString(),
	};
}
