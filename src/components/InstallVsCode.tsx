import installationJson from "@/constants/installation.json";
// import { CircleArrowRight } from "lucide-react";
import { Copy } from "lucide-react";
import { useRoomState } from "@/store/room.store";
import { useState } from "react";
import { useStepsActions } from "@/store/stepsStore";

const InstallVsCode = () => {
	const { specialKey, isLogged } = useRoomState();
	const [copied, setCopied] = useState(false);
	const { nextStep } = useStepsActions();
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(specialKey);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
			// nextStep();
		} catch (err) {
			console.error("Failed to copy text: ", err);
		}
	};
	if (isLogged) {
		nextStep();
	}
	return (
		<>
			<div className="h-full w-full flex flex-col justify-start items-start gap-4">
				<div className="h-fit w-full flex flex-col justify-start items-start gap-4">
					<p className="text-sm text-(--primary-text) font-bold">
						{installationJson[1].title}
					</p>
					<p className="text-sm text-(--secondary-text) font-normal">
						{installationJson[1].description}
					</p>
					<div className="text-sm text-(--secondary-text) font-light">
						<ul className="list-disc pl-5">
							<li>{installationJson[1].explanation[0]}</li>
							<li>{installationJson[1].explanation[1]}</li>
							<li>{installationJson[1].explanation[2]}</li>
							<li>{installationJson[1].explanation[3]}</li>
							<li>{installationJson[1].explanation[4]}</li>
							<li>{installationJson[1].explanation[5]}</li>
						</ul>
					</div>
				</div>
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

export default InstallVsCode;
