import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { borrowKey, markKeyAsReturned } from "../store/slices/keysSlice";
import { X } from "./x";
import { TeacherInput } from "./teacherInput";

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
			<h3 className="text-3xl font-semibold">{key.name}</h3>
			{key.takenBy ? (
				<div className="flex justify-between items-center">
					<span className="text-sm">{key.takenBy}</span>
					<button
						className="py-2 px-3 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white text-sm font-semibold rounded"
						onClick={returnKey}
					>
						Oznacz jako oddany
					</button>
				</div>
			) : (
				<div className="flex gap-24">
					<span>Wypożyczenie:</span>
					<TeacherInput
						onTeacherSelected={(teacher) =>
							dispatch(
								borrowKey({
									name: key.name,
									teacherName: teacher.name,
								})
							)
						}
					/>
				</div>
			)}
			<a href="/" className="absolute top-5 right-5">
				<X width="12" height="12" color="#000" />
			</a>
		</div>
	);
};
