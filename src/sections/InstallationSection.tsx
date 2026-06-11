import ReactPlayer from "react-player";
import { Users, Download, GlobeLock, FileUp, CircleCheck } from "lucide-react";
import LogoImg from "@/assets/image/denthen.IO.logo.svg";

const InstallationSection = () => {
	return (
		<>
			<div className="px-2 h-screen w-screen bg-(--primary-bg) flex flex-row justify-center items-center ">
				<div className="w-2/3 h-max bg-(--secondary-bg) rounded-md flex flex-col justify-center items-center gap-3.5 px-16 py-8">
					<img className="h-12" src={LogoImg} alt="logo" />
					<p className="font-bold text-xl text-(--primary-text)">
						Welcome to denthen.IO
					</p>
					<p className="font-medium text-base text-(--secondary-text)">
						Let’s setup so we you can start coding with friends
					</p>

					<div className="w-full h-32 flex flex-row justify-center items-center gap-2 ">
						<div className="h-12 w-12 rounded-full bg-(--highlight-color) flex flex-row justify-center items-center ">
							<Users color="var(--tertiary-text)" strokeWidth={1} />
						</div>
						<div className="w-48 h-2 bg-(--highlight-color) rounded-full"></div>
						<div className="h-12 w-12 rounded-full bg-(--highlight-color) flex flex-row justify-center items-center ">
							<Download color="var(--tertiary-text)" strokeWidth={1} />
						</div>
						<div className="w-48 h-2 bg-(--highlight-color) rounded-full"></div>
						<div className="h-12 w-12 rounded-full bg-(--highlight-color) flex flex-row justify-center items-center ">
							<GlobeLock color="var(--tertiary-text)" strokeWidth={1} />
						</div>
						<div className="w-48 h-2 bg-(--tertiary-bg) rounded-full"></div>
						<div className="h-12 w-12 rounded-full bg-(--tertiary-bg) flex flex-row justify-center items-center ">
							<FileUp color="var(--tertiary-text)" strokeWidth={1} />
						</div>
						<div className="w-48 h-2 bg-(--tertiary-bg) rounded-full"></div>
						<div className="h-12 w-12 rounded-full bg-(--tertiary-bg) flex flex-row justify-center items-center ">
							<CircleCheck color="var(--tertiary-text)" strokeWidth={1} />
						</div>
					</div>
					<div className="w-full h-100 flex flex-row justify-between items-center ">
						<div className="w-1/3 h-full  flex flex-col justify-end items-start gap-4 p-4">
							<p className="text-xl text-(--primary-text) font-bold">
								Install VS Code extension
							</p>
							<p className="text-lg text-(--secondary-text) font-normal">
								Get the official companion utility from the marketplace.
							</p>
							<p className="text-base text-(--secondary-text) font-medium">
								Your web app can’t magically read a developer's local hard drive
								due to browser sandbox security rules. The VS Code extension
								acts as the local agent that hooks into the file system events
								(like onDidSaveTextDocument) and bridges the code to the web.
							</p>
							<button className="bg-(--highlight-color) text-(--primary-text) text-base text-center rounded-sm px-6 py-2 mt-8 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer">
								Next
							</button>
						</div>
						<div className="w-1/2 h-full  flex flex-col justify-start items-end gap-4 p-4 ">
							{/* <video
							src="https://www.youtube.com/watch?v=9kDQKL9WU-s&list=RD9kDQKL9WU-s&start_radio=1"
							controls
							className="w-full h-full object-cover"
						/> */}

							<ReactPlayer
								src="https://www.youtube.com/watch?v=9kDQKL9WU-s&list=RD9kDQKL9WU-s&start_radio=1&pp=oAcB"
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
