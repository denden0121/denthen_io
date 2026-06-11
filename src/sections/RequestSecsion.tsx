import ActionButton from "@/components/ActionButton";
import {
	Logs,
	GitMerge,
	Loader,
	GitPullRequestClosed,
	MessageCircleQuestionMark,
} from "lucide-react";
import ListComponent from "@/components/ListComponent";

const RequestSecsion = () => {
	return (
		<div className="flex flex-col justify-start items-start gap-2 w-full h-full min-w-0 duration-150">
			<p className="text-sm text-(--secondary-text) px-2 pt-1">Request</p>
			<div className="w-full h-full bg-(--primary-border) border border-(--primary-border) grid grid-rows-[38px_1fr] gap-[1px] ">
				<div className="bg-(--secondary-bg) flex flex-row justify-start items-center gap-2 p-2">
					<ActionButton icon={Logs} text="All" />
					<ActionButton icon={GitMerge} text="Merged" />
					<ActionButton icon={Loader} text="Pending" />
					<ActionButton icon={GitPullRequestClosed} text="Rejected" />
					<ActionButton icon={MessageCircleQuestionMark} text="Requests" />
				</div>
				<div className="bg-(--secondary-bg) p-1">
					<div className="relative flex flex-row justify-between max-h-32 items-start gap-2 overflow-x-hidden overflow-y-scroll">
						<div className="w-2/3 max-h-30 flex flex-col justify-start items-start gap-1   ">
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
							<ListComponent
								name="navigation bug"
								sender="jecho"
								status="pending"
							/>
						</div>
						<div className="w-[50%] min-h-full sticky top-0 right-0">
							<div className="w-full h-full bg-(--primary-bg)   border border-(--primary-border) flex flex-col justify-start items-start gap-1 px-3 py-4">
								<p className="text-sm text-(--primary-text) font-bold">
									Stuck on a tough problem?
								</p>
								<p className="text-sm text-(--secondary-text) font-normal ">
									Team up! Invite a friend to a live coding session.
								</p>

								<button className="bg-(--highlight-color) text-(--primary-text) text-xs text-center rounded-sm px-6 py-2 mt-2 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer">
									Send request
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RequestSecsion;
