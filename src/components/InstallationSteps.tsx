import InstallVsCode from "@/components/InstallVsCode";
// import { CircleArrowRight } from "lucide-react";
// import TestConnection from "@/components/TestConnection";
import TryToImport from "@/components/TryToImport";
import ConnectionSuccessful from "@/components/ConnectionSuccessful";
// import installationJson from "@/constants/installation.json";
import GenerateSpecialKeyForm from "./GenerateSpecialKeyForm";
import { useStepsSteps } from "@/store/stepsStore";

const InstallationSteps = () => {
	const step = useStepsSteps();

	const RenderStep = () => {
		switch (step) {
			case 0:
				return <GenerateSpecialKeyForm />;
			case 1:
				return <InstallVsCode />;
			case 2:
				return <TryToImport />;
			case 3:
				return <ConnectionSuccessful />;
			default:
				return <GenerateSpecialKeyForm />;
		}
	};
	return (
		<>
			{RenderStep()}
			<div className="flex flex-row justify-center items-center gap-4 w-fit h-fit  mt-auto ">
				{/* <button
					onClick={prevStep}
					className="flex justify-center items-center gap-1.5 bg-(--tertiary-bg) text-(--primary-text) text-sm text-center rounded-full max-px-2 px-6 py-2.5 hover:scale-105 hover:duration-150 hover:bg-(--highlight-color) hover:transition-all cursor-pointer"
				>
					<CircleArrowRight
						size={14}
						color="var(--tertiary-text)"
						strokeWidth={2}
						className="rotate-180"
					/>{" "}
					Prev
				</button>
				<button
					onClick={nextStep}
					className="flex justify-center items-center gap-1.5 mt-auto bg-(--tertiary-bg) text-(--primary-text) text-sm text-center rounded-full max-px-2 px-6 py-2.5 hover:scale-105 hover:duration-150 hover:bg-(--highlight-color) hover:transition-all cursor-pointer"
				>
					{installationJson[step].button}
					<CircleArrowRight
						size={14}
						color="var(--tertiary-text)"
						strokeWidth={2}
					/>{" "}
				</button>  */}
			</div>
		</>
	);
};

export default InstallationSteps;
