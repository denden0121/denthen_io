import { Users, Download, GlobeLock, FileUp, CircleCheck } from "lucide-react";
import { type IStep } from "@/sections/InstallationSection";

const Progressbar = ({ currentStep }: IStep) => {
	return (
		<div className="w-full h-32 flex flex-row justify-center items-center gap-2 ">
			<div
				className={`h-10 w-10 rounded-full ${currentStep >= 0 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"} flex justify-center items-center`}
			>
				<Users color="var(--tertiary-text)" strokeWidth={1} />
			</div>
			<div
				className={`w-52 h-1  ${currentStep >= 1 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  rounded-full duration-700`}
			></div>

			<div
				className={`h-10 w-10 rounded-full ${currentStep >= 1 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"} flex justify-center items-center  duration-700 delay-50`}
			>
				<Download color="var(--tertiary-text)" strokeWidth={1} />
			</div>
			<div
				className={`w-52 h-1  ${currentStep >= 2 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  rounded-full duration-700`}
			></div>

			<div
				className={`h-10 w-10 rounded-full ${currentStep >= 2 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"} flex justify-center items-center  duration-700 delay-50`}
			>
				<GlobeLock color="var(--tertiary-text)" strokeWidth={1} />
			</div>
			<div
				className={`w-52 h-1  ${currentStep >= 3 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  rounded-full  duration-700`}
			></div>

			<div
				className={`h-10 w-10 rounded-full ${currentStep >= 3 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"} flex justify-center items-center  duration-700 delay-50`}
			>
				<FileUp color="var(--tertiary-text)" strokeWidth={1} />
			</div>
			<div
				className={`w-52 h-1  ${currentStep >= 4 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  rounded-full  duration-700`}
			></div>

			<div
				className={`h-10 w-10 rounded-full ${currentStep >= 4 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"} flex justify-center items-center  duration-700 delay-50`}
			>
				<CircleCheck color="var(--tertiary-text)" strokeWidth={1} />
			</div>
		</div>
	);
};

export default Progressbar;
