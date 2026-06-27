import installationJson from "@/constants/installation.json";
// import { CircleArrowRight } from "lucide-react";
import { useStepsActions } from "@/store/stepsStore";
import { useRoomActions } from "@/store/room.store";
import { CreateRoomSchema } from "@/schema/room.schema";
import { useState } from "react";
import { ZodError } from "zod";

const GenerateSpecialKeyForm = () => {
	// validate
	const [inputName, setInputName] = useState("");
	const [uiError, setUiError] = useState(
		"Username must be at least 4 characters long",
	);
	// store
	const { nextStep } = useStepsActions();
	const { setUsername, generateSpecialKey } = useRoomActions();
	// check username
	const userNameOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value;
		setInputName(newValue);
		if (newValue.length < 4) {
			setUiError("Username must be at least 4 characters long");
		} else {
			setUiError("Valid username");
		}
	};
	// set username and and generate special key
	const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const validated = CreateRoomSchema.parse({ username: inputName });
			setUsername(validated.username);
			nextStep();
			// await generateSpecialKey();
		} catch (err) {
			if (err instanceof ZodError) {
				setUiError("Invalid Username");
			}
		}
	};

	return (
		<>
			<div className="h-full w-full flex flex-col justify-start items-start gap-4 ">
				<div className="h-fit w-full flex flex-col justify-start items-start gap-4 ">
					<p className="text-sm text-(--primary-text) font-bold">
						{installationJson[0].title}
					</p>
					<p className="text-sm text-(--secondary-text) font-normal">
						{installationJson[0].description}
					</p>
					<div className="text-sm text-(--secondary-text) font-light">
						<ul className="list-disc pl-5">
							<li>{installationJson[0].explanation[0]}</li>
							<li>{installationJson[0].explanation[1]}</li>
						</ul>
					</div>
				</div>
				<form
					className="flex flex-col justify-start items-start gap-5 w-full "
					onSubmit={handleSubmit}
				>
					<div className="w-full flex flex-col justify-start items-start gap-1.5  text-sm text-(--secondary-text) font-normal">
						<p
							className={` animate-pulse ${uiError === "Valid username" ? "text-green-700" : ""} ${uiError === "Invalid Username" ? "text-red-700 shake-on-error" : ""}`}
						>
							{uiError}
						</p>
						<input
							type="text"
							name="request_title"
							value={inputName}
							onChange={userNameOnchange}
							placeholder="ex: denden"
							className="outline-none focus:border-(--primary-border)  w-full p-2 border border-(--tertiary-bg) rounded-sm bg-(--primary-bg) "
						/>
					</div>
				</form>
			</div>
		</>
	);
};

export default GenerateSpecialKeyForm;
