const ReminderComponent = () => {
	return (
		<div className="absolute top-0  left-0 min-w-full min-h-full flex flex-col justify-center items-center	 bg-zinc-950 z-20">
			<div className="w-1/2 h-full flex flex-col justify-center items-center gap-4 p-4 text-center">
				<p className="text-base text-(--primary-text) font-bold">Import Code</p>
				<p className="text-base text-(--secondary-text) font-normal">
					Create or join room and start coding with friends
				</p>

				<div className="flex flex-row justify-center items-center gap-4">
					<button className="bg-(--highlight-color) text-(--primary-text) text-base text-center rounded-sm px-6 py-2 mt-4 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer">
						Create room
					</button>
					<button className="bg-(--tertiary-bg) text-(--primary-text) text-base text-center rounded-sm px-6 py-2 mt-4 hover:scale-105 hover:duration-150 hover:transition-all cursor-pointer">
						Join room
					</button>
				</div>
			</div>
		</div>
	);
};

export default ReminderComponent;
