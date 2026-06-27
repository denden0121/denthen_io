import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useRoomActions, useRoomState } from "@/store/room.store";

// Define the message structure
interface RoomData {
	roomCode: string;
}

interface LiveStreamData {
	roomCode: string;
	code: string;
	fileExtension: string;
}

interface RoomDataMessage {
	roomCode: string;
	message: string;
}

// Connect to the backend server
const socket: Socket = io("http://localhost:3000");

const ChatBox = () => {
	const { setDummyCode } = useRoomActions();
	const { dummyCode } = useRoomState();
	const combinedSource = `<!DOCTYPE html>
    <html>
      <head>
        <style>
		body
		p {
		 color: #D6D6D6;
		}
		</style>
      </head>
      <body>
       ${dummyCode}
      </body>
    </html>`;
	// socket.on("room:join", (roomName) => {
	// 	socket.join(roomName);
	// 	console.log(`User ${socket.id} joined room: ${roomName}`);
	// 	socket.to("roomName").emit("receive_message", "Hello room!");
	// 	socket.emit("receive_message", "Welcome to the room!");
	// });

	// socket.on("code:update", (data) => {
	// 	// Broadcast the code changes only to other users in that specific room
	// 	console.log(data);
	// 	socket.to(data.roomCode).emit("code:update", data.message);
	// });

	// const [message, setMessage] = useState<string>("");
	// const [messageReceived, setMessageReceived] = useState<string>("");
	const [room, setRoom] = useState("");
	const [roomMessage, setRoomMessage] = useState("");

	// const sendMessage = (): void => {
	// 	if (message.trim()) {
	// 		const data: MessageData = { text: message };
	// 		socket.emit("send_message", data);
	// 		setMessage("");
	// 	}
	// };

	const joinRoom = (): void => {
		if (room.trim()) {
			const data = room;
			socket.emit("room:join", data);
		}
	};

	const sendToRoom = (): void => {
		if (roomMessage.trim()) {
			const data: RoomDataMessage = {
				roomCode: room,
				message: roomMessage,
			};
			socket.emit("code:update", data);
			setRoomMessage("");
		}
	};

	useEffect(() => {
		// Listen for messages from the server
		socket.on("receive_message", (data: LiveStreamData) => {
			console.log(data);
		});

		// Clean up listeners on unmount to prevent memory leaks
		return () => {
			socket.off("receive_message");
		};
	}, []);

	useEffect(() => {
		// Listen for messages from the server
		socket.on("code:update", (data) => {
			// console.log(data);
			setDummyCode(data);
			// setCode(data);
		});

		// Clean up listeners on unmount to prevent memory leaks
		return () => {
			socket.off("code:update");
		};
	}, [setDummyCode]);

	console.log(dummyCode);
	return (
		<>
			<div style={{ padding: "20px", fontFamily: "sans-serif" }}>
				<input
					type="text"
					placeholder="Type a message..."
					value={room}
					onChange={(e) => setRoom(e.target.value)}
				/>
				<button onClick={joinRoom}>Join Room</button>

				{/* <div style={{ marginTop: "20px" }}>
				<h3>Latest Live Message:</h3>
				<p
				style={{ background: "#eee", padding: "10px", width: "fit-content" }}
				>
				{messageReceived || "No messages yet"}
				</p>
				</div> */}
			</div>
			<div style={{ padding: "20px", fontFamily: "sans-serif" }}>
				<input
					type="text"
					placeholder="Type a message..."
					value={roomMessage}
					onChange={(e) => setRoomMessage(e.target.value)}
				/>
				<button onClick={sendToRoom}>Send to room</button>

				<div className="w-full h-dvh border border-(--primary-border) bg-(--secondary-bg) text-white">
					<iframe
						srcDoc={combinedSource}
						title="Live Output"
						sandbox="allow-scripts allow-modals allow-forms"
						style={{
							flex: 1,
							backgroundColor: "#111111",
							width: "100%",
							height: "100%",
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default ChatBox;
