import { create } from "zustand";

interface HoverSate {
	isCommitHover: boolean,
}

interface HoverAction {
	toggleIsCommitHover: () => void
}

interface HoverStore extends HoverSate {
	actions: HoverAction,
}


const useHoverStore = create<HoverStore>((set) => ({
	// initialized
	isCommitHover: false,


	// actions
	actions: {
		toggleIsCommitHover: () => set((state) => ({ isCommitHover: !state.isCommitHover }))
	}
}));

export const useHoverActions = () => useHoverStore((state) => state.actions);
export const useHoverCommit = () => useHoverStore((state) => state.isCommitHover);


