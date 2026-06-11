import ActionButton from "@/components/ActionButton";
import { Wrench, LoaderCircle } from "lucide-react";

const ResponseForm = () => {
	return (
		<div className="w-full h-full border border-(--primary-border) bg-(--primary-bg) rounded-sm flex flex-col justify-start items-center gap-2 py-8">
			<form
				action="#"
				className="w-4/5 flex flex-col justify-start items-start gap-4"
			>
				<p className="text-base text-(--primary-text) font-bold">Response</p>
				<div className="w-full  flex flex-col justify-start items-start gap-1.5 text-sm text-(--secondary-text) font-normal">
					<label htmlFor="request_title">Tile</label>
					<input
						type="text"
						name="request_title"
						placeholder="ex: Javascript dom elements isn’t working"
						className="w-full p-2 border border-(--primary-border)  rounded-sm"
					/>
				</div>
				<div className="w-full  flex flex-col justify-start items-start gap-1.5 text-sm text-(--secondary-text) font-normal">
					<label htmlFor="request_status">Status</label>
					<div className="w-full h-fit flex flex-row justify-start items-start gap-4">
						<ActionButton icon={Wrench} text="Fixed" />
						<ActionButton icon={LoaderCircle} text="In progress" />
					</div>
				</div>
				<div className="w-full  flex flex-col justify-start items-start gap-1.5 text-sm text-(--secondary-text) font-normal">
					<label htmlFor="request_comment">Comment</label>
					<input
						type="text"
						name="request_comment"
						placeholder="ex: wrong syntax used....."
						className="w-full p-2 border border-(--primary-border)  rounded-sm"
					/>
				</div>
				<div className="w-full flex flex-col justify-start items-start gap-1.5 text-sm text-(--secondary-text) font-normal">
					<label htmlFor="request_code">Code</label>
					<textarea
						name="request_code"
						id="request_code"
						placeholder="<h1>Does it work?</h1>"
						className="w-full h-80 p-2 border border-(--primary-border) rounded-sm text-sm"
					></textarea>
				</div>

				<div className="w-full h-fit flex flex-row justify-start items-start gap-4">
					<button className="bg-(--tertiary-bg) text-(--primary-text) text-sm text-center  rounded-sm px-6 py-2 mt-4 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer">
						Cancel
					</button>
					<button className="bg-(--highlight-color) text-(--primary-text) text-sm text-center  rounded-sm px-6 py-2 mt-4 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer">
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default ResponseForm;
