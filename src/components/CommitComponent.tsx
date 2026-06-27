import React from "react";
import { GitPullRequestCreateArrow } from "lucide-react";
import { useHoverActions } from "@/store/hovered.store";
interface CommitComponentProps {
	fileExtension: "html" | "css" | "js" | null;
	type: string | null;
	code: string;
	userRole: "admin" | "participant" | null;
}

const CommitComponent = ({
	fileExtension,
	type,
	code,
	userRole,
}: CommitComponentProps) => {
	const handleDragStart = (e: React.DragEvent) => {
		e.dataTransfer.setData("text/plain", code);
		e.dataTransfer.effectAllowed = "copy";
		// const sanitizedCode = code.replace(/\$0/g, "").trim();

		// e.dataTransfer.setData("text/plain", sanitizedCode);
		// e.dataTransfer.effectAllowed = "copy";
	};

	const { toggleIsCommitHover } = useHoverActions();
	return (
		<div
			draggable
			onDragStart={handleDragStart}
			onMouseEnter={toggleIsCommitHover}
			onMouseLeave={toggleIsCommitHover}
			className={` w-full min-h max-h-32 rounded-sm bg-(--primary-bg) border border-(--primary-border) gap-9 p-2 flex flex-col justify-between items-center cursor-grab active:cursor-grabbing hover:-rotate-1  hover:scale-95 hover:translate-x-2 hover:translate-y-1 hover:bg-(--tertiary-bg) hover:duration-200 hover:transition-all hover:origin-top-left active:bg-(--primary-bg) 	 hover:ease-in-out  `}
		>
			<div className="w-full flex flex-row  justify-between items-center text-sm text-(--secondary-text)">
				<p className="flex flex-row justify-start items-center gap-2">
					<GitPullRequestCreateArrow size={14} strokeWidth={2} />
					{fileExtension} {" : "} <span className="underline">{type}</span>
				</p>
				<p className="text-xs text-(--secondary-text)">
					{userRole === "admin" ? "you" : userRole}
				</p>
			</div>
			<div className="w-full flex flex-row justify-between items-center text-sm text-(--secondary-text)">
				<p className={`truncate w-full h-5 `}>{code}</p>
			</div>
		</div>
	);
};

export default CommitComponent;
