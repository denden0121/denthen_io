import { create } from "zustand";
import { useShallow } from "zustand/react/shallow";
import { RoomService } from "@/api/room.service";

interface RoomSate {
	username: string,
	specialKey: string,
	role: string,
	roomCode: string
	isLoading: boolean,
	isLogged: boolean,
	dummyCode: string,
}

interface RoomAction {
	generateSpecialKey: () => Promise<void>,
	setUsername: (username: string) => void; 
	setDummyCode: (dummyCode: string) => void; 
}

interface RoomStore extends RoomSate {
	actions: RoomAction,
}

const useRoomStore = create<RoomStore>((set, get) => ({
	// state
	username: "",
	specialKey: "waiting",
	role: "",
	roomCode: "not connected",
	isLoading: false,
	isLogged: false,
	dummyCode: "",

	// actions
	actions: {
		setUsername: (username ) => { set({ username })},
		setDummyCode: (dummyCode ) => { set({ dummyCode })},
		generateSpecialKey: async () => {
			const currentUsername = get().username;
			try {
				set({ isLoading: true });
				const data = await RoomService.createRoom(currentUsername);
				if (data) {
					const role = data.specialKey.split("_")[0];
					set({ 
						specialKey: data.specialKey,
						roomCode: data.roomCode,
						role: role
					});
					set({ isLoading: false });
				}
			} catch (error) {
				console.error("Failed to create room:", error);
			}
		}
	}
}));

export const useRoomActions = () => useRoomStore((state) => state.actions);
export const useRoomState = () => useRoomStore(useShallow((state) => ({
  username: state.username,
  role: state.role,
  specialKey: state.specialKey,
  roomCode: state.roomCode,
  isLoading: state.isLoading,
  isLogged: state.isLogged,
  dummyCode: state.dummyCode
})));

