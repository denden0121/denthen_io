import { ExternalLink, CornerDownRight } from "lucide-react";

interface ListProps {
	name: string;
	sender: string;
	status: string;
}

const ListComponent = ({ name, sender, status }: ListProps) => {
	return (
		<>
			{/* <div className="min-w-full h-14 border border-(--primary-border) bg-(--primary-bg)  p-2 flex flex-col justify-between items-center cursor-pointer hover:-rotate-1 hover:scale-105 hover:bg-(--tertiary-bg) hover:duration-150 hover:transition-all hover:origin-top-left active:bg-(--primary-bg)  hover:z-20"> */}
			<div className="min-w-full h-14 border border-(--primary-border) bg-(--primary-bg) rounded-sm p-2 flex flex-col justify-between items-center cursor-pointer  hover:bg-(--tertiary-bg) hover:duration-150 hover:transition-all active:bg-(--primary-bg)  hover:z-20">
				<div className="w-full flex flex-row  justify-between items-center text-sm text-(--primary-text)">
					<p>{name}</p>
					<ExternalLink size={14} />
				</div>
				<div className="w-full flex flex-row  justify-between items-center text-sm text-(--secondary-text)">
					<p className="flex flex-row  justify-between items-center gap-1.5">
						<CornerDownRight size={12} /> sender: {sender}
					</p>
					<p>{status}...</p>
				</div>
			</div>
		</>
	);
};

export default ListComponent;
