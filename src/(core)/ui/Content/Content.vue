<template>
	<div class="content"><slot></slot></div>
</template>

<style scoped>
	.content {
		@media (width >= 1200px) {
			letter-spacing: -0.015em;
		}
	}

	.content :deep() {
		h3,
		p {
			max-inline-size: var(--paragraph-width);
		}

		:is(p, .with-sidenote):not(:first-child) {
			margin-block-start: var(--gap-2);

			h3 + & {
				margin-block-start: var(--gap);
			}

			small + & {
				margin-block-start: var(--gap);
			}
		}

		h3:not(:first-child) {
			margin-block-start: var(--gap-2);
		}

		> ul,
		> ol {
			max-inline-size: var(--paragraph-width);

			&:not(:first-child) {
				margin-block-start: var(--gap);
			}

			li {
				padding-inline-start: calc(var(--gap) * 2);

				&::before {
					position: absolute;
					margin-inline-start: calc(var(--gap) * (-2));
				}

				&:not(:last-child) {
					margin-block-end: calc(var(--gap) / 2);
				}
			}
		}

		> ol {
			counter-reset: list;

			li::before {
				content: counter(list);
				counter-increment: list;
				font-variant-numeric: tabular-nums;
			}
		}

		> ul li::before {
			content: '·';
		}
	}
</style>
