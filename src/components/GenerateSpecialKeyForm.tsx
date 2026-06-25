import installationJson from "@/constants/installation.json";

const GenerateSpecialKeyForm = () => {
	return (
		<>
			<p className="text-base text-(--primary-text) font-bold">
				{installationJson[0].title}
			</p>
			<p className="text-sm text-(--secondary-text) font-normal">
				{installationJson[0].description}
			</p>
			<p className="text-sm text-(--secondary-text) font-light">
				<ul className="list-disc pl-5">
					<li>{installationJson[0].explanation[0]}</li>
					<li>{installationJson[0].explanation[1]}</li>
				</ul>
			</p>
			<div className="w-full flex flex-col justify-start items-start gap-1.5  text-sm text-(--secondary-text) font-normal mt-8">
				<input
					type="text"
					name="request_title"
					placeholder="ex: denden"
					className="w-full p-2 border-2 border-(--tertiary-bg) rounded-sm"
				/>
			</div>
		</>
	);
};

export default GenerateSpecialKeyForm;
