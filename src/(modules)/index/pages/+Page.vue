<template>
	<h1>
		Каталог хакатонов России. Смотрите ближайшие даты, темы проектов и призы
		<span
			class="icon"
			aria-hidden
		>
			🏆</span
		>
	</h1>

	<FeaturedEvent
		class="featured-event"
		:event="hackathons?.at(0)!"
	/>

	<section aria-labelledby="why">
		<Content class="why">
			<Label id="why">Зачем участвовать в хакатонах</Label>

			<Accent>
				Компании вкладываются в специалистов, которые пилят крутые штуки.
			</Accent>

			<p>
				Разработчики, аналитики и дизайнеры участвуют в хакатонах, чтобы найти
				команду и положить в портфолио сильный проект. Такие проекты вырастают
				в стартапы, а их авторов хантят ИТ-компании. Мотивацию подстёгивает
				призовой фонд, мерч и консультации экспертов.
			</p>

			<p>Участвуйте в ближайших хакатонах:</p>
		</Content>
	</section>

	<section aria-labelledby="upcoming">
		<h2
			id="upcoming"
			class="visually-hidden"
		>
			Ближайшие хакатоны
		</h2>

		<HighlightedEvents :hackathons="hackathons" />
	</section>

	<section
		aria-labelledby="choose"
		class="choose"
	>
		<Content class="map-caption">
			<Label>Карта и теги</Label>

			<h2 id="choose">Подберите хакатон</h2>
		</Content>

		<Catalog />
	</section>
</template>

<script setup lang="ts">
	import { Accent } from '@/(core)/ui/Accent'
	import { Content } from '@/(core)/ui/Content'
	import { Label } from '@/(core)/ui/Label'
	import { Catalog } from '@/(modules)/catalog'
	import { useData } from 'vike-vue/useData'

	import type { Data } from './+data'

	import { FeaturedEvent, HighlightedEvents } from '../ui'

	const hackathons = useData<Data>().data
</script>

<style scoped>
	.icon {
		font-size: 0.75em;
	}

	.featured-event {
		margin-block-end: var(--gap-3);
	}

	.why {
		margin-block-end: var(--gap-2);
	}

	.choose {
		margin-block-end: var(--gap-2);
	}

	.map-caption {
		position: relative;
		z-index: 1;
		inline-size: fit-content;
	}
</style>
