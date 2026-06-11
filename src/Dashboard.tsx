import Navigation from "@/components/Navigation";
import RequestSecsion from "@/sections/RequestSecsion";
import CodeIDE from "@/sections/CodeIDE";
import CommitSection from "@/sections/CommitSection";
import PreviewWebsiteSection from "./sections/PreviewWebsiteSection";

const Dashboard = () => {
	return (
		<div className="h-screen w-screen grid grid-rows-[1fr_64px] grid-cols-[1.2fr_0.5fr_1.3fr] gap-2 p-2 bg-(--primary-bg) overflow-hidden">
			{/* LEFT COLUMN */}
			<div className="grid grid-rows-[0.3fr_1fr] gap-2 min-h-0">
				<RequestSecsion />
				<CodeIDE />
			</div>

			{/* MIDDLE COLUMN (Commit section wrapper) */}
			<div className="h-full w-full min-h-0 min-w-0 overflow-hidden">
				<CommitSection />
			</div>

			{/* RIGHT COLUMN */}
			<div className="flex flex-col justify-start items-start gap-2 min-h-0 h-full">
				<PreviewWebsiteSection />
			</div>

			{/* BOTTOM NAVIGATION */}
			<div className="col-span-3 h-full w-full flex flex-row justify-center items-center">
				<Navigation />
			</div>
		</div>
	);
};

export default Dashboard;
