import type { TFilters } from './types'

export const AUDIENCES: TAudience[] = [
	'Разработчики',
	'Дизайнеры',
	'Аналитики',
	'Менеджеры',
	'Безопасность',
	'Инженеры',
	'Архитекторы',
	'Маркетинг',
]

export const FORMATS: TFormat[] = ['Онлайн', 'Оффлайн', 'Гибрид']

export const PARTICIPANTS: TParticipant[] = [
	'Школьники',
	'Специалисты',
	'Студенты',
]

export const IS_ACTUAL_OPTIONS = [
	{
		label: 'Скоро',
		value: 'true',
	},
	{
		label: 'Уже прошёл',
		value: 'false',
	},
]

export type TAudience = NonNullable<TFilters['audience']>
export type TFormat = NonNullable<TFilters['format']>
export type TParticipant = NonNullable<TFilters['typeParticipant']>
