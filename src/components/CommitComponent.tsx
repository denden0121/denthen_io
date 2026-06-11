import React from "react";

interface CommitComponentProps {
	language: string;
	time: string;
	code: string;
}

const CommitComponent = ({ language, time, code }: CommitComponentProps) => {
	const handleDragStart = (e: React.DragEvent) => {
		e.dataTransfer.setData("text/plain", code);
		e.dataTransfer.effectAllowed = "copy";
	};

	return (
		<div
			draggable
			onDragStart={handleDragStart}
			className={` w-full min-h-20 max-h-32 rounded-sm bg-(--primary-bg) border border-(--primary-border)  p-2 flex flex-col justify-between items-center cursor-grab active:cursor-grabbing hover:-rotate-1  hover:scale-95 hover:translate-x-3 hover:translate-y-1 hover:bg-(--tertiary-bg) hover:duration-150 hover:transition-all hover:origin-top-left active:bg-(--primary-bg)  `}
		>
			<div className="w-full flex flex-row  justify-between items-center text-sm text-(--primary-text)">
				<p>import: participant: {language}</p>
				<p className="text-xs text-(--secondary-text)">{time} ago</p>
			</div>
			<div className="w-full flex flex-row  justify-between items-center text-sm text-(--secondary-text)">
				<p>{code}</p>
			</div>
		</div>
	);
};

export default CommitComponent;
