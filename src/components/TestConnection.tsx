import installationJson from "@/constants/installation.json";
import { GlobeLock, CircleArrowRight } from "lucide-react";
import { useState } from "react";

const TestConnection = () => {
	const [isConnected, setIsConnected] = useState(false);
	return (
		<>
			<p className="text-sm text-(--primary-text) font-bold">
				{installationJson[2].title}
			</p>
			<p className="text-sm text-(--secondary-text) font-normal">
				{installationJson[2].description}
			</p>
			<div className="text-sm text-(--secondary-text) font-light">
				<ul className="list-disc pl-5">
					<li>{installationJson[2].explanation[0]}</li>
					<li>{installationJson[2].explanation[1]}</li>
					<li>{installationJson[2].explanation[2]}</li>
					<li>{installationJson[2].explanation[3]}</li>
				</ul>
			</div>
			<div className="w-full  flex flex-col justify-start items-start gap-1.5 text-base text-(--secondary-text) font-normal">
				<button
					className={`${isConnected ? "border-green-950 border" : "border border-(--primary-border)"}  flex flex-row justify-center items-center gap-1.5  text-(--primary-text) text-sm text-center rounded-sm max-px-2 px-4 min-px-8 py-2  mt-8 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer`}
				>
					<p
						className={`${isConnected ? "text-green-500" : "text-(--secondary-text) "}`}
					>
						<GlobeLock size={24} strokeWidth={1} />
					</p>
				</button>
				<button
					className={` ${isConnected ? " text-(--primary-text) cursor-pointer hover:scale-105 hover:bg-(--highlight-color) bg-(--tertiary-bg)" : "text-(--disabled-text) cursor-not-allowed bg-(--primary-bg) border border-(--primary-border)"} flex justify-center items-center gap-1.5 mt-auto  text-sm text-center rounded-sm max-px-2 px-6 py-2.5  hover:duration-150  hover:transition-all `}
				>
					{isConnected ? "Next" : "Please finish the step first"}
					<CircleArrowRight size={14} strokeWidth={2} />{" "}
				</button>
			</div>
		</>
	);
};

export default TestConnection;
