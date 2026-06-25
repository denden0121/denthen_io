import ActionButton from "@/components/ActionButton";
import { Logs, Settings, CircleCheckBig } from "lucide-react";
import CommitComponent from "@/components/CommitComponent";
import axios from "axios";
import { useEffect, useState } from "react";

type ICommitModel = {
	id: string;
	room_id: string;
	user_id: string;
	user_role: "admin" | "participant";
	code: string;
	file_extension: "html" | "css" | "js";
	type: "document" | "snippet";
	created_at: string;
};

const CommitSection = () => {
	const [commits, setCommits] = useState<ICommitModel[]>([]);
	useEffect(() => {
		const getCommit = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3000/api/rooms/commit",
				);
				if (response.data) {
					setCommits(response.data);
					console.log(response.data);
				}
			} catch (error) {
				console.error("Failed to fetch commits:", error);
			}
		};
		// getCommit();
	}, []);

	return (
		<>
			<section className="h-full w-full min-h-0 flex flex-col justify-start items-start gap-2">
				<p className="text-sm text-(--secondary-text) px-2 pt-1">Commits</p>

				<div className="w-full h-full min-h-0 border border-(--primary-border) bg-(--primary-border) rounded-sm grid grid-rows-[38px_1fr] gap-[1px]">
					<div className="flex flex-row justify-start items-center gap-2 p-2 bg-(--secondary-bg)">
						<ActionButton icon={Logs} text="All" />
						<ActionButton icon={Settings} text="Settings" />
						<ActionButton icon={CircleCheckBig} text="Bulk actions" />
					</div>
					<div className="h-full w-full flex flex-col justify-start items-center gap-2 p-2 bg-(--secondary-bg) overflow-y-auto">
						{commits.map((commit) => (
							<CommitComponent
								key={commit.id}
								fileExtension={commit.file_extension}
								userRole={commit.user_role}
								code={commit.code}
								type={commit.type}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default CommitSection;
