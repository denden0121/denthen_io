import Navigation from "@/components/Navigation";
import RequestSecsion from "@/sections/RequestSecsion";
import CodeIDE from "@/sections/CodeIDE";
import CommitSection from "@/sections/CommitSection";
// import PreviewWebsiteSection from "./sections/PreviewWebsiteSection";
import InstallationSection from "./sections/InstallationSection";
import { useStepsIsInstallationOpen } from "./store/stepsStore";
import { useHoverCommit } from "@/store/hovered.store";

import { useState } from "react";

const Layout = () => {
	const isCommitHover = useHoverCommit();
	const isInstallationOpen = useStepsIsInstallationOpen();
	const [isPreview, setIsPreview] = useState(true);

	const togglePreview = () => {
		setIsPreview(!isPreview);
	};

	return (
		<div
			className={`h-screen w-screen xl:bg-zinc-950 text-white grid p-0 gap-0
							xl:grid-rows-[1fr_1fr_1fr_1fr_64px]
						${isPreview ? `xl:grid-cols-[1.5fr_0.5fr_1fr]` : `xl:grid-cols-[1.5fr_0.5fr_64px]`}
						`}
		>
			{isInstallationOpen === true ? (
				// <div className="w-full h-ful scale-100 absolute z-50 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ">
				<div className="absolute z-50 w-full h-full translate-y-0 scale-100 opacity-100 transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
					<InstallationSection />
				</div>
			) : (
				// <div className="w-full h-ful scale-90 opacity-0  -z-10 absolute transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ">
				<div className="absolute -z-10 w-full h-full  translate-y-20 scale-100 opacity-0 transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
					<InstallationSection />
				</div>
			)}
			<div
				className={`xl:col-start-1 xl:col-end-2 xl:row-start-1 xl:row-end-2 flex flex-row justify-start items-start gap-2 min-h-0 min-w-0  transition-all ease-in duration-75 ${isCommitHover ? "opacity-100 " : "opacity-100 "}`}
			>
				<RequestSecsion />
			</div>
			{/* IDE */}
			<div className="flex flex-col rounded xl:col-start-1 xl:col-end-2 xl:row-start-2 xl:row-end-5 w-full min-h-0 min-w-0">
				<CodeIDE isPreview={isPreview} />
			</div>
			{/* COMMIT */}
			<div className=" xl:col-start-2 xl:col-end-3 xl:row-start-1 xl:row-end-5 min-h-0 min-w-0 ">
				<CommitSection />
			</div>
			{/* PREVIEW */}
			<div className="rounded col-start-3 col-end-4 row-start-1 row-end-5 flex flex-col overflow-hidden min-w-0">
				<div className="flex justify-between items-center whitespace-nowrap mb-2">
					<button
						onClick={togglePreview}
						className="bg-zinc-800/40 hover:bg-zinc-700/60 px-2 py-0.5 rounded text-xs transition-colors"
					>
						{isPreview ? `◀ Hide` : `▶ Show`}
					</button>
				</div>
				<div
					className={`flex-1 border border-dashed border-zinc-600/20 rounded flex items-center justify-center transition-opacity duration-300 ${isPreview ? "opacity-100" : "opacity-0"}`}
				></div>
			</div>
			{/* NAVIGATION */}
			<div className=" rounded col-start-1 col-end-4 row-start-5 row-end-6 flex flex-row justify-center items-center">
				<Navigation />
			</div>
		</div>
	);
};

export default Layout;
