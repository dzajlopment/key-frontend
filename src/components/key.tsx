export const Key = (props: { name: string, takenBy: string | null }) => {
	return <div className="flex flex-col items-center">
		<svg width="50" height="115">
			<path id="key"
				d="
					M 1,25
					A 21,21 0 0 1 49,25
					A 21,21 0 0 1 35,46
					l 0, 50
					l -10, 10
					l -10, -10
					l 0, -10
					l 5, -5
					l -5, -5
					l 5, -5
					l -5, -5
					l 5, -5
					l -5, -5
					L 15, 46
					A 21,21 0 0 1 1,25
					z
				"
				stroke="black" strokeWidth="2" fill={ props.takenBy === null ? "#608c58" : "#943d2f"} />

			<text x="25" y="28" textAnchor="middle" alignmentBaseline="middle" fontSize="17" fill="black">
				{props.name}
			</text>
		</svg>

		{ props.takenBy === null ? <></> : <span className="text-xs">{props.takenBy}</span> }
	</div>;
};