export const X = (props: {color: string, width: string, height: string}) => {
	const { color, width, height } = props;

	return <svg
		xmlns="http://www.w3.org/2000/svg"
		width={ width }
		height={ height }
		viewBox="0 0 22.121 22.121"
	>
		<g
			id="Component_8_1"
			data-name="Component 8 – 1"
			transform="translate(1.061 1.061)"
		>
			<line
				id="Line_9"
				data-name="Line 9"
				x1="20"
				y2="20"
				fill="none"
				stroke={ color }
				stroke-width="3"
			/>
			<line
				id="Line_10"
				data-name="Line 10"
				x2="20"
				y2="20"
				fill="none"
				stroke={ color }
				stroke-width="3"
			/>
		</g>
	</svg>;
}