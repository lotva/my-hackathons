<template>
	<svg
		viewBox="0 0 100 100"
		xmlns="http://www.w3.org/2000/svg"
	>
		<defs>
			<mask id="cut">
				<rect
					width="100"
					height="100"
					fill="white"
					stroke="none"
				/>

				<circle
					r="40"
					cx="50"
					cy="50"
					fill="black"
					stroke="none"
				/>

				<polygon
					points="50,50 100,25 150,50 100,75"
					fill="black"
					stroke="none"
					transform-origin="center center"
				/>
			</mask>
		</defs>

		<circle
			r="50"
			cx="50"
			cy="50"
			mask="url(#cut)"
			stroke="none"
		/>
	</svg>
</template>
