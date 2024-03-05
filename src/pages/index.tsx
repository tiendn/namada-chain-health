import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useBlock } from "@/hook/useBlock";

export default function Home() {
	// Placeholder values - replace these with actual data fetching or state management logic
	const { lastScan, isHalted, data, isLoading } = useBlock();
	const { time, height } = data || {};

	return (
		<>
			<Head>
				<title>HealthCheck - Notional Crew</title>
				<meta name="description" content="HealthCheck page for Notional Crew" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
				<link rel="canonical" href="https://namada.net/" />
				<meta name="twitter:site" content="@namada" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta
					name="twitter:title"
					content="Namada - Asset-Agnostic Multichain Privacy Blockchain"
				/>
				<meta
					name="twitter:description"
					content="The Interchain Asset-Agnostic Privacy Blockchain. Experience Multichain Privacy and Shielded Actions with Namada’s Proof-of-Stake L1 Blockchain."
				/>
				<meta name="twitter:image" content="https://namada.net/assets/opengraph.jpg" />
				<meta name="twitter:creator" content="@namada" />
				<meta
					name="description"
					content="The Interchain Asset-Agnostic Privacy Blockchain. Experience Multichain Privacy and Shielded Actions with Namada’s Proof-of-Stake L1 Blockchain."
				/>
				<meta name="keywords" />
				<meta
					property="og:title"
					content="Namada - Asset-Agnostic Multichain Privacy Blockchain"
				/>
				<meta
					property="og:description"
					content="The Interchain Asset-Agnostic Privacy Blockchain. Experience Multichain Privacy and Shielded Actions with Namada’s Proof-of-Stake L1 Blockchain."
				/>
				<meta property="og:image" content="https://namada.net/assets/opengraph.jpg" />
				<meta property="og:type" content="article" />
				<meta property="og:url" content="https://namada.net/" />
				<meta name="theme-color" content="#FFFF00" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			</Head>
			<main className={styles.main}>
				<h1>HealthCheck Information</h1>
				<br />
				<Image
					width={600}
					height={500}
					src={isHalted ? "/halted.webp" : "/live.webp"}
					alt="HealthCheck Status"
				/>
				<div className={styles.grid}>
					<div className={styles.card}>
						<h3>Current Block</h3>
						<p>{isLoading ? "Loading" : height}</p>
					</div>
					<div className={styles.card}>
						<h3>Current Time</h3>
						<p>{isLoading ? "Loading" : lastScan}</p>
					</div>
					<div className={styles.card}>
						<h3>Last Blocktime</h3>
						<p suppressHydrationWarning>{new Date(time).toLocaleString()}</p>
					</div>
					<div className={styles.card}>
						<h3>Chain Status</h3>
						<p style={{ textTransform: "uppercase" }}>
							{isLoading ? "Unknown" : isHalted ? "Halted" : "Live"}
						</p>
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				<p>© Notional Crew</p>
			</footer>
		</>
	);
}
