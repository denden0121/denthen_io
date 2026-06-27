import { create } from "zustand";

interface StepsSate {
	steps: number,
	isInstallationOpen: boolean
}

interface StepsAction {
	nextStep: () => void,
	prevStep: () => void,
	toggleInstallation: () => void
}

interface StepsStore extends StepsSate {
	actions: StepsAction,
}


const useStepsStore = create<StepsStore>((set) => ({
	// initialized
	steps: 0,
	isInstallationOpen: false,

	// actions
	actions: {
		nextStep: () =>  set((state) => {
											if (state.steps >= 4) return {}; 
											return { steps: state.steps + 1 };
										}),
		prevStep: () =>  set((state) => {
											if (state.steps <= 0) return {}; 
											return { steps: state.steps - 1 };
										}),
		toggleInstallation: () => set((state) => ({ isInstallationOpen: !state.isInstallationOpen }))
	}
}));

export const useStepsActions = () => useStepsStore((state) => state.actions);
export const useStepsSteps = () => useStepsStore((state) => state.steps)
export const useStepsIsInstallationOpen = () => useStepsStore((state) => state.isInstallationOpen)


