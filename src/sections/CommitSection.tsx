import ActionButton from "@/components/ActionButton";
import { Logs, Settings, CircleCheckBig } from "lucide-react";
import CommitComponent from "@/components/CommitComponent";

const CommitSection = () => {
	return (
		<>
			<section className="h-full w-full min-h-0 flex flex-col justify-start items-start gap-2">
				<p className="text-sm text-(--secondary-text) px-2 pt-1">Commits</p>

				<div className="w-full h-full min-h-0 border border-(--primary-border) bg-(--primary-border) rounded-sm grid grid-rows-[38px_1fr] gap-[1px] ">
					<div className="flex flex-row justify-start items-center gap-2 p-2 bg-(--secondary-bg)">
						<ActionButton icon={Logs} text="All" />
						<ActionButton icon={Settings} text="Settings" />
						<ActionButton icon={CircleCheckBig} text="Bulk actions" />
					</div>

					<div className="h-full w-full flex flex-col justify-start items-center gap-2 p-2 bg-(--secondary-bg) overflow-y-auto">
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
						<CommitComponent
							language="js"
							code={`const btn = document.querySelector(".active");`}
							time="5mins"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default CommitSection;
