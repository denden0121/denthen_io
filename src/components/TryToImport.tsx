import installationJson from "@/constants/installation.json";

const TryToImport = () => {
	return (
		<>
			<p className="text-base text-(--primary-text) font-bold">
				{installationJson[3].title}
			</p>
			<p className="text-sm text-(--secondary-text) font-normal">
				{installationJson[3].description}
			</p>
			<p className="text-sm text-(--secondary-text) font-light">
				<ul className="list-disc pl-5">
					<li>{installationJson[3].explanation[0]}</li>
					<li>{installationJson[3].explanation[1]}</li>
					<li>{installationJson[3].explanation[2]}</li>
					<li>{installationJson[3].explanation[3]}</li>
				</ul>
			</p>
			<div className="w-full flex flex-col justify-start items-start gap-1.5  text-sm text-(--secondary-text) font-normal mt-8">
				<textarea
					placeholder="note: If connection is successful you can see exported codes here!"
					className="w-full p-2 border-2 border-(--tertiary-bg) rounded-sm"
				/>
			</div>
		</>
	);
};

export default TryToImport;
