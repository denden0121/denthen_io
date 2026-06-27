import installationJson from "@/constants/installation.json";
import { Copy } from "lucide-react";
import { useState } from "react";

const ConnectionSuccessful = () => {
	const [copied, setCopied] = useState(false);
	const [specialKey, setSpecialKey] = useState("Room Code");

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(specialKey);
			setCopied(true);

			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};
	return (
		<>
			<p className="text-base text-(--primary-text) font-bold">
				{installationJson[4].title}
			</p>
			<p className="text-sm text-(--secondary-text) font-normal">
				{installationJson[4].description}
			</p>
			<div className="text-sm text-(--secondary-text) font-light">
				<ul className="list-disc pl-5">
					<li>{installationJson[4].explanation[0]}</li>
					<li>{installationJson[4].explanation[1]}</li>
				</ul>
			</div>
			<div className="w-full  flex flex-col justify-start items-start gap-1.5 text-base text-(--secondary-text) font-normal">
				<div className="w-full flex flex-col justify-start items-start gap-1.5 text-base text-(--secondary-text) font-normal">
					<button
						onClick={handleCopy}
						className="flex flex-row justify-center items-center gap-1.5 bg-(--tertiary-bg) text-(--primary-text) text-sm text-center rounded-sm max-px-2 px-4 min-px-8 py-2  mt-8 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer"
					>
						{specialKey && (copied ? "Copied!" : specialKey)}
						<Copy size={14} color="var(--tertiary-text)" strokeWidth={2} />
					</button>
				</div>
			</div>
		</>
	);
};

export default ConnectionSuccessful;
