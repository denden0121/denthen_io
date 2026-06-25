import installationJson from "@/constants/installation.json";
import { GlobeLock } from "lucide-react";

const TestConnection = () => {
	return (
		<>
			<p className="text-base text-(--primary-text) font-bold">
				{installationJson[2].title}
			</p>
			<p className="text-sm text-(--secondary-text) font-normal">
				{installationJson[2].description}
			</p>
			<p className="text-sm text-(--secondary-text) font-light">
				<ul className="list-disc pl-5">
					<li>{installationJson[2].explanation[0]}</li>
					<li>{installationJson[2].explanation[1]}</li>
					<li>{installationJson[2].explanation[2]}</li>
					<li>{installationJson[2].explanation[3]}</li>
				</ul>
			</p>
			<div className="w-full  flex flex-col justify-start items-start gap-1.5 text-base text-(--secondary-text) font-normal">
				<button className="flex flex-row justify-center items-center gap-1.5 border-2 border-(--tertiary-bg) text-(--primary-text) text-sm text-center rounded-sm max-px-2 px-4 min-px-8 py-2  mt-8 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer">
					<GlobeLock size={32} color="var(--secondary-text)" strokeWidth={1} />
					{/* <GlobeLock size={32} color="green" strokeWidth={1} /> */}
				</button>
			</div>
		</>
	);
};

export default TestConnection;
