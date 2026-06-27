import LogoImg from "@/assets/image/denthen.IO.logo.svg";
import {
	MessageCircleQuestionMark,
	FileDown,
	Users,
	MonitorUp,
	Share2,
	Command,
} from "lucide-react";
import { useRoomState } from "@/store/room.store";

const Navigation = () => {
	const { roomCode } = useRoomState();
	return (
		<>
			<nav className="w-full h-full  bg-(--secondary-bg) border border-(--primary-border) flex flex-row justify-between items-center px-6 text-(--tertiary-text)">
				<div className="w-1/5 flex flex-row justify-sart items-center">
					<img className="h-6" src={LogoImg} alt="logo" />
				</div>

				<ul className="flex flex-row justify-center items-center gap-9 [&_p]:hover:scale-105 [&_p]:hover:transition-all [&_p]:hover:duration-150 [&_p]:cursor-pointer [&_p]:p-2 [&_p]:hover:hover:bg-(--tertiary-bg) [&_p]:rounded-sm  [&_p]:shadow-sm  text-(--tertiary-text) ease-linear">
					<li>
						<p>
							<MessageCircleQuestionMark strokeWidth={2} size={20} />
						</p>
					</li>
					<li>
						<p>
							<FileDown strokeWidth={2} size={20} />
						</p>
					</li>
					<li>
						<p>
							<Users strokeWidth={2} size={20} />
						</p>
					</li>
					<li>
						<p>
							<MonitorUp strokeWidth={2} size={20} />
						</p>
					</li>
					<li>
						<p>
							<Share2 strokeWidth={2} size={20} />
						</p>
					</li>
					<li>
						<p>
							<Command strokeWidth={2} size={20} />
						</p>
					</li>
				</ul>

				<div className="flex flex-row justify-end items-center w-1/5">
					<p
						className={`flex flex-row justify-center items-center gap-1.5 ${roomCode !== "not connected" ? "text-green-800" : "text-(--primary-text)"} cursor-pointer`}
					>
						<Users strokeWidth={2} size={16} /> room: {roomCode}
					</p>
				</div>
			</nav>
		</>
	);
};

export default Navigation;
