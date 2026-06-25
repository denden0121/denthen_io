import ReactPlayer from "react-player";
import LogoImg from "@/assets/image/denthen.IO.logo.svg";
import installationJson from "@/constants/installation.json";
import { useState } from "react";
import Progressbar from "@/components/Progressbar";
import GenerateSpecialKeyForm from "@/components/GenerateSpecialKeyForm";
import InstallVsCode from "@/components/InstallVsCode";
import { CircleArrowRight } from "lucide-react";
import TestConnection from "@/components/TestConnection";
import TryToImport from "@/components/TryToImport";
import ConnectionSuccessful from "@/components/ConnectionSuccessful";

export interface IStep {
	currentStep: number;
}

const InstallationSection = () => {
	const [step, isStep] = useState(0);

	const setStep = () => {
		if (step < 4) {
			isStep(step + 1);
			console.log(step);
		} else {
			isStep(0);
			console.log(step);
		}
	};
	const RenderStep = () => {
		switch (step) {
			case 0:
				return <GenerateSpecialKeyForm />;
			case 1:
				return <InstallVsCode />;
			case 2:
				return <TestConnection />;
			case 3:
				return <TryToImport />;
			case 4:
				return <ConnectionSuccessful />;
			default:
				return <GenerateSpecialKeyForm />;
		}
	};

	return (
		<>
			{/* <div className="px-2 h-screen w-screen bg-[#252627cc] transparent flex flex-row justify-center items-center "> */}
			<div className="px-2 relative h-screen w-screen bg-[#2526271a] backdrop-blur-md  shadow-lg p-6 flex flex-row justify-center items-center ">
				<div className="w-2/3 h-max bg-(--primary-bg)  border border-(--primary-border) flex flex-col justify-center items-center gap-3.5 px-16 py-12">
					<img className="h-10" src={LogoImg} alt="logo" />
					<p className="font-bold text-base text-(--secondary-text)">
						Welcome to denthen.IO
					</p>
					<p className="font-medium text-sm text-(--secondary-text)">
						Let’s setup so we you can start coding with friends
					</p>
					<Progressbar currentStep={step} />
					<div className="w-full h-100 flex flex-row justify-between items-center ">
						<div className="w-1/3 h-full flex flex-col justify-start items-start gap-4 p-4">
							{RenderStep()}
							<button
								onClick={setStep}
								className="flex justify-center items-center gap-1.5 mt-auto bg-(--tertiary-bg) text-(--primary-text) text-sm text-center rounded-full max-px-2 px-6 py-2.5 hover:scale-105 hover:duration-150 hover:bg-(--highlight-color) hover:transition-all cursor-pointer"
							>
								{installationJson[step].button}
								<CircleArrowRight
									size={14}
									color="var(--tertiary-text)"
									strokeWidth={2}
								/>{" "}
							</button>
						</div>
						<div className="w-1/2 h-full  flex flex-col justify-start items-end gap-4 p-4 ">
							{/* <video
							src="https://www.youtube.com/watch?v=9kDQKL9WU-s&list=RD9kDQKL9WU-s&start_radio=1"
							controls
							className="w-full h-full object-cover"
						/> */}

							<ReactPlayer
								// src="https://www.youtube.com/watch?v=9kDQKL9WU-s&list=RD9kDQKL9WU-s&start_radio=1&pp=oAcB"
								className="w-full h-full object-cover"
								width="100%"
								height="100%"
								style={{ objectFit: "cover" }}
								controls={true}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default InstallationSection;
