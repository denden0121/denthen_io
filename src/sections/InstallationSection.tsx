import ReactPlayer from "react-player";
import LogoImg from "@/assets/image/denthen.IO.logo.svg";
import Progressbar from "@/components/Progressbar";
import InstallationSteps from "@/components/InstallationSteps";
import { CircleX } from "lucide-react";
import { useStepsActions } from "@/store/stepsStore";

const InstallationSection = () => {
	const { toggleInstallation } = useStepsActions();
	return (
		<>
			{/* <div className="px-2 h-screen w-screen bg-[#252627cc] transparent flex flex-row justify-center items-center "> */}
			{/* <div className="px-2 relative h-screen w-screen bg-[#2526271a] backdrop-blur-md  shadow-lg p-6 flex flex-row justify-center items-center "> */}
			<div className="px-2 relative h-screen w-screen bg-[#000000a1] backdrop-blur-xs  shadow-lg p-6 flex flex-row justify-center items-center ">
				<div className="w-2/3 h-max relative bg-(--primary-bg)  border border-(--primary-border) flex flex-col justify-center items-center gap-10 px-16 py-8">
					<span
						onClick={toggleInstallation}
						className="absolute top-3 right-3 cursor-pointer hover:scale-125 hover:text-red-800 duration-75 text-(--tertiary-text)"
					>
						<CircleX size={24} strokeWidth={1} />
					</span>
					<img className="h-10" src={LogoImg} alt="logo" />
					<p className="font-medium text-sm text-(--secondary-text)">
						Let’s setup so we you can start coding with friends
					</p>
					<Progressbar />
					<div className="w-full h-100 flex flex-row justify-between items-center ">
						<div className="w-1/3 h-full flex flex-col justify-start items-start gap-4 p-4">
							<InstallationSteps />
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
