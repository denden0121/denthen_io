import type { LucideIcon } from "lucide-react";

interface ActionButtonProps {
	icon?: LucideIcon;
	size?: number;
	color?: string;
	strokeWidth?: number;
	text: string;
	notifCount?: number;
	notifBg?: string;
	notifText?: string;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	isActive?: boolean;
}
const ActionButton = ({
	icon: IconComponent,
	size = 14,
	color = "var(--tertiary-text)",
	strokeWidth = 1,
	text,
	notifCount,
	notifBg,
	notifText,
	onClick,
	isActive,
}: ActionButtonProps) => {
	return (
		<div className="relative inline-block">
			<button
				className={`border-(--primary-border) shadow-sm text-xs text-(--primary-text) flex flex-row justify-center items-center gap-2 px-2.5 py-1 rounded-sm cursor-pointer hover:bg-(--tertiary-bg) hover:duration-150 hover:transition-all
					
					${isActive ? `bg-(--tertiary-bg)` : ``}
					
					`}
				onClick={onClick}
			>
				{IconComponent && (
					<IconComponent size={size} color={color} strokeWidth={strokeWidth} />
				)}
				<span>{text}</span>
			</button>

			<span
				className={`absolute -top-[15px] -right-[12px] border-radius-design ${notifBg} ${notifText} text-[8px] font-bold w-5 h-5 flex flex-row justify-center items-center ${notifText ? `shadow-[0_2px_5px_rgba(0,0,0,0.2)]` : ``}`}
			>
				{notifCount}
			</span>
		</div>
	);
};

export default ActionButton;

// use
//  <ActionButton
// icon={Logs}
// text="All"
// color="var(--primary-text)"
// size={14}
// strokeWidth={2}
// notifCount={4}
// notifBg="red"
// notifText= "white"
// />
