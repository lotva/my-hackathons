import { ELocation } from 'hackathons.map'

export type TLocationName = keyof typeof nameToELocation

export const nameToELocation: Record<string, ELocation> = {
	Владивосток: ELocation.VLADIVOSTOK,
	Екатеринбург: ELocation.EKATERINBURG,
	Иркутск: ELocation.IRKUTSK,
	Казань: ELocation.KAZAN,
	Москва: ELocation.MOSCOW,
	Новосибирск: ELocation.NOVOSIBIRSK,
	Омск: ELocation.OMSK,
	Пермь: ELocation.PERM,
	'Санкт-Петербург': ELocation.SAINT_PETERSBURG,
	Саратов: ELocation.SARATOV,
	Смоленск: ELocation.SMOLENSK,
}

export const elocationToName = Object.fromEntries(
	Object.entries(nameToELocation).map(([city, eloc]) => [eloc, city]),
) as Record<ELocation, keyof typeof nameToELocation>
