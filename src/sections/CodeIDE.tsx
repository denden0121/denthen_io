import Editor, { loader } from "@monaco-editor/react";
import ActionButton from "@/components/ActionButton";
import { FileCodeCorner, Palette, FileBracesCorner } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import ReminderComponent from "@/components/ReminderComponent";
import RequestForm from "@/components/RequestForm";

import { io, Socket } from "socket.io-client";

// 1. Accept isPreview as a prop from your main Layout component
const CodeIDE = ({ isPreview }: { isPreview?: boolean }) => {
	const [fileActive, setFileActive] = useState(`Html`);
	const [code, setCode] = useState(``);
	const [monacoCode, setMonacoCode] = useState(``);
	const [monacoSaveCode, setSaveMonacoCode] = useState(``);
	const [isLogged, setIsLogged] = useState(true);
	const editorRef = useRef<any>(null);

	const [htmlCode, setHtmlCode] = useState(``);
	const [cssCode, setCssCode] = useState(``);
	const [javascriptCode, setJavascriptCode] = useState(``);

	// Monaco IDE
	const handleMonacoChange = (value) => {
		setMonacoCode(value);
	};
	//Save Monaco
	const saveMonaco = () => {
		setSaveMonacoCode(monacoCode);
		if (fileActive === "Html") {
			setHtmlCode(monacoCode);
		}
		if (fileActive === "Css") {
			setCssCode(monacoCode);
		}
		if (fileActive === "Javascript") {
			setJavascriptCode(monacoCode);
		}
	};

	//Set file active
	const changeFileActive = (e: React.MouseEvent<HTMLButtonElement>) => {
		setFileActive(e.currentTarget.textContent);
		changeMonacoOpenFile();
	};

	const changeMonacoOpenFile = () => {
		if (fileActive === "Html") {
			setSaveMonacoCode(htmlCode);
			console.log(`html`);
		}
		if (fileActive === "Css") {
			setSaveMonacoCode(cssCode);
			console.log(`css`);
		}
		if (fileActive === "Javascript") {
			setSaveMonacoCode(javascriptCode);
			console.log(`js`);
		}
	};

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

	// 2. Force layout recalculation when layout finishes animating (500ms duration)
	useEffect(() => {
		if (editorRef.current) {
			const timer = setTimeout(() => {
				editorRef.current.layout();
			}, 500); // Matches your duration-500 class
			return () => clearTimeout(timer);
		}
	}, [isPreview]);

	loader.init().then((monaco) => {
		monaco.editor.defineTheme("newTheme", {
			base: "vs-dark",
			inherit: true,
			rules: [],
			colors: {
				"editor.background": "#111111",
				"editor.selectionBackground": "#255AB2",
				"editor.lineHighlightBorder": "#00000000",
			},
		});
	});

	function handleEditorDidMount(editor, monaco) {
		editorRef.current = editor;

		const domNode = editor.getDomNode();

		if (domNode) {
			domNode.addEventListener(
				"drop",
				(e) => {
					e.preventDefault();

					const droppedCode = e.dataTransfer.getData("text/plain");
					if (!droppedCode) return;

					const target = editor.getTargetAtClientPoint(e.clientX, e.clientY);

					if (target && target.position) {
						const position = target.position;

						const range = new monaco.Range(
							position.lineNumber,
							position.column,
							position.lineNumber,
							position.column,
						);

						editor.executeEdits("drag-drop-provider", [
							{
								range: range,
								text: droppedCode,
								forceMoveMarkers: true,
							},
						]);

						editor.focus();
					}
				},
				true,
			);
		}
	}

	return (
		<div className="max-h-full max-w-full h-full w-full min-h-0 flex flex-col justify-start items-start gap-2 min-w-0">
			<p className="text-sm text-(--secondary-text) px-2">Code IDE</p>

			{/* 3. Added overflow-hidden to prevent layout busting during grid transition */}
			<div className="w-full h-full min-w-0 min-h-0 overflow-hidden border border-(--primary-border) bg-(--primary-border) grid grid-rows-[38px_1fr] gap-[1px]">
				<div className="flex flex-row justify-start items-center gap-2 p-2 bg-(--secondary-bg) ">
					<ActionButton
						icon={FileCodeCorner}
						text="Html"
						onClick={changeFileActive}
						isActive={fileActive === "Html"}
					/>
					<ActionButton
						icon={Palette}
						text="Css"
						onClick={changeFileActive}
						isActive={fileActive === "Css"}
					/>
					<ActionButton
						icon={FileBracesCorner}
						text="Javascript"
						onClick={changeFileActive}
						isActive={fileActive === "Javascript"}
					/>
					<ActionButton
						icon={FileBracesCorner}
						text="Save File"
						onClick={saveMonaco}
					/>
				</div>

				{isLogged ? (
					/* 4. Wrapped Editor in a clean layout cell that limits growth boundaries */
					<div className="w-full h-full min-h-0 min-w-0 overflow-hidden">
						<Editor
							height="100%"
							width="100%"
							theme="newTheme"
							language="html"
							value={monacoCode}
							onMount={handleEditorDidMount}
							onChange={handleMonacoChange}
							options={{
								readOnly: false,
								automaticLayout: true,
								minimap: { enabled: false },
							}}
						/>
					</div>
				) : (
					<ReminderComponent />
				)}
			</div>
		</div>
	);
};

export default CodeIDE;
