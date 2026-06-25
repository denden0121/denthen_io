import installationJson from "@/constants/installation.json";
import { Copy } from "lucide-react";

const InstallVsCode = () => {
	return (
		<>
			<p className="text-base text-(--primary-text) font-bold">
				{installationJson[1].title}
			</p>
			<p className="text-sm text-(--secondary-text) font-normal">
				{installationJson[1].description}
			</p>
			<p className="text-sm text-(--secondary-text) font-light">
				<ul className="list-disc pl-5">
					<li>{installationJson[1].explanation[0]}</li>
					<li>{installationJson[1].explanation[1]}</li>
					<li>{installationJson[1].explanation[2]}</li>
					<li>{installationJson[1].explanation[3]}</li>
				</ul>
			</p>
			<div className="w-full  flex flex-col justify-start items-start gap-1.5 text-base text-(--secondary-text) font-normal">
				<button className="flex flex-row justify-center items-center gap-1.5 bg-(--tertiary-bg) text-(--primary-text) text-sm text-center rounded-sm max-px-2 px-4 min-px-8 py-2  mt-8 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer">
					Room Code
					<Copy size={14} color="var(--tertiary-text)" strokeWidth={2} />
				</button>
			</div>
		</>
	);
};

export default InstallVsCode;
