import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const PreviewWebsiteSection = () => {
	const [code, setCode] = useState(``);
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
       ${code}
      </body>
    </html>`;

	// useEffect(() => {
	// 	const socket: Socket = io("http://localhost:3000");

	// 	socket.on("api data", (data) => {
	// 		console.log(data);
	// 		setCode(data);
	// 	});

	// 	return () => {
	// 		socket.disconnect();
	// 	};
	// }, []);

	return (
		<>
			<p className="text-sm text-(--secondary-text) px-2 pt-1">Live preview</p>
			<div className="w-full min-h-full border border-(--primary-border) bg-(--secondary-bg) text-white">
				<iframe
					srcDoc={combinedSource}
					title="Live Output"
					sandbox="allow-scripts"
					style={{
						flex: 1,
						backgroundColor: "#111111",
						width: "100%",
						height: "100%",
					}}
				/>
			</div>
		</>
	);
};

export default PreviewWebsiteSection;
