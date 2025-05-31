<template>
	<article
		:class="[
			'event-card',
			'clickable-area',
			{
				_clipped: isClipped,
				'_in-grid': isInGrid,
				_long: isTitleLong,
				inverted: isInGrid && isTitleLong && event.stack,
			},
		]"
	>
		<div class="colored-layer">
			<small class="caption">
				<ul class="list">
					<li
						v-if="event.topic"
						class="item"
					>
						{{ event.topic }}
					</li>

					<li class="item">{{ location }}</li>

					<li
						v-if="!isClipped"
						class="item"
					>
						<Time :date="event.dateStart" />
					</li>
				</ul>
			</small>

			<h2 :class="['title', 'damn-metrics-fix']">
				<a
					class="clickable-area-link link"
					:href="
						getRoute('/events/@id', {
							params: {
								id: event.id,
							},
						})
					"
				>
					{{ event.name }}</a
				>
			</h2>

			<div
				v-if="isClipped"
				class="factoid"
			>
				<Label>Стартует</Label>

				<Time
					class="time root-metrics-fix"
					:date="event.dateStart"
				/>
			</div>
		</div>
	</article>
</template>

<script setup lang="ts">
	import { components } from '@/(core)/api/openapi'
	import { getRoute } from '@/(core)/route-tree.gen'
	import { Label } from '@/(core)/ui/Label'
	import { Time } from '@/(core)/ui/Time'
	import { computed } from 'vue'

	import { checkIfTitleLong } from '../lib/checkIfTitleLong'

	interface IProps {
		event: components['schemas']['HackathonShort']
		isClipped?: boolean
		isInGrid?: boolean
	}

	const props = defineProps<IProps>()

	const location = computed(() => {
		if (props.event.format === 'Оффлайн' && props.event.location) {
			return props.event.location.join(', ')
		}

		return props.event.format
	})

	const isTitleLong = computed(() => checkIfTitleLong(props.event.name))
</script>

<style scoped>
	.event-card {
		min-block-size: 12em;
		color: var(--label-color, var(--text));
		background-color: var(--bg-2);

		.colored-layer {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			block-size: 100%;
			padding: var(--gap) clamp(calc(var(--gap) / 2), 1vi, var(--gap))
				var(--gap-2);

			background-image: var(--cover-url);
			background-position: center;
			background-size: cover;
		}

		.caption {
			margin-block-end: var(--gap-relative);
		}

		.list {
			display: inline;
		}

		.item {
			display: inline;

			&:not(:last-child)::after {
				content: '\00A0· ';
			}
		}

		.title {
			margin-block-start: var(--gap-2);

			font-family: Damn, sans-serif;
			font-size: 4.5em;
			line-height: 0.8;
			color: var(--title-color, var(--strong));
			text-wrap: balance;
			letter-spacing: -0.03em;
		}

		.link {
			color: inherit;
			text-decoration: inherit;

			.event-card:has(&:focus-visible) {
				outline: var(--accent) solid var(--outline-thickness);
			}
		}

		.factoid {
			display: grid;
			row-gap: calc(var(--gap));
			margin-block-start: auto;

			.time {
				font-size: 2em;
				line-height: 1;
				color: var(--strong);
				letter-spacing: -0.06em;

				&:deep(.caps) {
					margin-inline-end: -0.03em;
					letter-spacing: 0.03em;
				}

				.event-card:hover & {
					color: var(--accent);
				}
			}
		}

		&._clipped {
			.colored-layer {
				justify-content: flex-start;
				background-position: right center;
				background-clip: text;

				@media (width <= 600px) {
					background-position: top;
					background-size: 150%;
				}
			}

			.title {
				margin-block: 0 var(--gap-3);
				color: transparent;
			}
		}

		&._long {
			.title {
				font-size: 3em;
			}
		}

		&._in-grid {
			.title {
				font-size: 3.5em;
			}

			.link {
				&:hover,
				&:focus-visible {
					color: var(--accent);
				}
			}
		}
	}
</style>
