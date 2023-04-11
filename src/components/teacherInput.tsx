import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { TeacherModel } from "../models/teacher";
import { X } from "./x";

export const TeacherInput = (props: {
	onTeacherSelected: (teacher: TeacherModel) => void;
}) => {
	const teachers = useAppSelector((state) => state.teachers.teachers);

	const [query, setQuery] = useState("");
	const [focus, setFocus] = useState(false);

	return (
		<div className="flex flex-col gap-4 w-64">
			<div className="flex gap-4">
				<input
					type="text"
					className="w-full border-black border px-2 py-1"
					placeholder="Nauczyciel"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					onFocus={() => setFocus(true)}
				/>
				{focus ? (
					<button
						onClick={() => {
							setQuery("");
							setFocus(false);
						}}
					>
						<X color="#000" width="16" height="16" />
					</button>
				) : (
					<></>
				)}
			</div>
			<div className="relative">
				<div
					className={`${
						focus ? "flex" : "hidden"
					} flex-col absolute top-0 left-0 right-0 max-h-48 overflow-y-auto`}
				>
					{teachers
						.filter((teacher) =>
							teacher.name
								.toLowerCase()
								.includes(query.toLowerCase())
						)
						.map((teacher) => (
							<button
								className="w-full h-12 hover:bg-gray-300 clicked:bg-gray-500"
								key={teacher.id}
								onClick={() => {
									console.log(teacher);
									props.onTeacherSelected(teacher);
									setQuery(teacher.name);
								}}
							>
								{teacher.name}
							</button>
						))}
				</div>
			</div>
		</div>
	);
};
