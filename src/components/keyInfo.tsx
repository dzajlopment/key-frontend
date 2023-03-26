import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { markKeyAsReturned } from "../store/slices/keysSlice";
import { X } from "./x";

export const KeyInfo = () => {
	const { keyName } = useParams<{ keyName: string }>();
	const dispatch = useAppDispatch();

	const key = useAppSelector((state) =>
		state.keys.keys.find((key) => key.name === keyName)
	);

	if (!key) {
		console.error(`Key not found: ${keyName}`);

		return <></>;
	}

	const returnKey = () => {
		dispatch(markKeyAsReturned(key.name));
	};

	return (
		<div className="flex flex-col gap-8 w-1/3 h-screen px-6 py-4 border-l-[1px] border-black">
			<h3 className="text-lg font-semibold">{key.name}</h3>
			{key.takenBy ? (
				<div className="flex justify-between items-center">
					<span className="text-xs">{key.takenBy}</span>
					<button
						className="py-1 px-2 bg-blue-300 hover:bg-blue-400 active:bg-blue-500 text-xs rounded"
						onClick={returnKey}
					>
						Oznacz jako oddany
					</button>
				</div>
			) : (
				<div>{/* TODO: Wypożyczanie klucza */}</div>
			)}
			<a href="/" className="absolute top-5 right-5">
				<X width="12" height="12" color="#000" />
			</a>
		</div>
	);
};
