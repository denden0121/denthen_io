import { Users, Download, GlobeLock, CircleCheck } from "lucide-react";
import { useStepsSteps } from "@/store/stepsStore";

const Progressbar = () => {
	const currentStep = useStepsSteps();
	return (
		<div className="w-full h-32 flex flex-row justify-between items-center gap-2 px-4">
			<div
				className={` h-10 w-10 rounded-full ${currentStep >= 0 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  ${currentStep === 0 ? "ping-shadow-on-complete " : ""} flex justify-center items-center`}
			>
				<Users color="var(--tertiary-text)" strokeWidth={1} />
			</div>
			<div
				className={`w-1/4 h-px  ${currentStep >= 1 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  rounded-full duration-700`}
			></div>

			<div
				className={`h-10 w-10 rounded-full ${currentStep >= 1 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  ${currentStep === 1 ? "ping-shadow-on-complete " : ""} flex justify-center items-center  duration-700 delay-50`}
			>
				<Download color="var(--tertiary-text)" strokeWidth={1} />
			</div>
			<div
				className={`w-1/4 h-px  ${currentStep >= 2 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  rounded-full duration-700`}
			></div>

			<div
				className={`h-10 w-10 rounded-full ${currentStep >= 2 ? " bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  ${currentStep === 2 ? "ping-shadow-on-complete " : ""} flex justify-center items-center  duration-700 delay-50`}
			>
				<GlobeLock color="var(--tertiary-text)" strokeWidth={1} />
			</div>
			<div
				className={`w-1/4 h-px  ${currentStep >= 3 ? "bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  rounded-full  duration-700`}
			></div>

			<div
				className={`h-10 w-10 rounded-full ${currentStep >= 3 ? " bg-(--highlight-color)" : "bg-(--tertiary-bg)"}  ${currentStep === 3 ? "ping-shadow-on-complete " : ""} flex justify-center items-center  duration-700 delay-50`}
			>
				<CircleCheck color="var(--tertiary-text)" strokeWidth={1} />
			</div>
		</div>
	);
};

export default Progressbar;
