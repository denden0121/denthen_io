import React from "react";

interface CommitComponentProps {
	fileExtension: "html" | "css" | "js";
	type: string;
	code: string;
	userRole: "admin" | "participant";
}

const CommitComponent = ({
	fileExtension,
	type,
	code,
	userRole,
}: CommitComponentProps) => {
	const handleDragStart = (e: React.DragEvent) => {
		// e.dataTransfer.setData("text/plain", code);
		// e.dataTransfer.effectAllowed = "copy";
		const sanitizedCode = code.replace(/\$0/g, "").trim();

		e.dataTransfer.setData("text/plain", sanitizedCode);
		e.dataTransfer.effectAllowed = "copy";
	};

	return (
		<div
			draggable
			onDragStart={handleDragStart}
			className={` w-full min-h-20 max-h-32 rounded-sm bg-(--primary-bg) border border-(--primary-border)  p-2 flex flex-col justify-between items-center cursor-grab active:cursor-grabbing hover:-rotate-1  hover:scale-95 hover:translate-x-3 hover:translate-y-1 hover:bg-(--tertiary-bg) hover:duration-150 hover:transition-all hover:origin-top-left active:bg-(--primary-bg)  `}
		>
			<div className="w-full flex flex-row  justify-between items-center text-sm text-(--primary-text)">
				<p>
					{fileExtension} {userRole}
				</p>
				<p className="text-xs text-(--secondary-text)">{type}</p>
			</div>
			<div className="w-full flex flex-row justify-between items-center text-sm text-(--secondary-text)">
				<p className="truncate w-full h-5">{code}</p>
			</div>
		</div>
	);
};

export default CommitComponent;
