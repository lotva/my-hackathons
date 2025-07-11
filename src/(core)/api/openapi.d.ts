/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
	'/location': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get Audience List */
		get: operations['get_audience_list_location_get']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/audience': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get Audience List */
		get: operations['get_audience_list_audience_get']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/hackathons': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get Hackathons */
		get: operations['get_hackathons_hackathons_get']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
	'/hackathons/{hackathon_id}': {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		/** Get Hackathon By Id */
		get: operations['get_hackathon_by_id_hackathons__hackathon_id__get']
		put?: never
		post?: never
		delete?: never
		options?: never
		head?: never
		patch?: never
		trace?: never
	}
}
export type webhooks = Record<string, never>
export interface components {
	schemas: {
		/** Contacts */
		Contacts: {
			/** Email */
			email: string
			/** Press Contact */
			press_contact: string
		}
		/** DateTimeWithRenderFlag */
		DateTimeWithRenderFlag: {
			/** Utc */
			utc: string
			/** Shouldrendertime */
			shouldRenderTime: boolean
		}
		/** HTTPValidationError */
		HTTPValidationError: {
			/** Detail */
			detail?: components['schemas']['ValidationError'][]
		}
		/** HackathonFull */
		HackathonFull: {
			/** Id */
			id: string
			/** Name */
			name: string
			dateStart: components['schemas']['DateTimeWithRenderFlag']
			dateEnd: components['schemas']['DateTimeWithRenderFlag']
			registration_deadline: components['schemas']['DateTimeWithRenderFlag']
			/** Address */
			address: string
			/** Format */
			format: string
			/** Latitude */
			latitude: number
			/** Longitude */
			longitude: number
			/** Topic */
			topic: string
			/** Summary */
			summary: string
			/** Description */
			description: string
			/** Audience */
			audience: string[]
			/** Requirements */
			requirements: string[]
			/** Typeparticipant */
			typeParticipant: string[]
			/** Participantcount */
			participantCount: number
			/** Team Size */
			team_size: string
			/** Tracks */
			tracks: components['schemas']['Track'][]
			/** Stack */
			stack: string
			/** Duration */
			duration: string
			timeline: components['schemas']['Timeline']
			/** Schedule */
			schedule: components['schemas']['ScheduleItem'][]
			/** Speakers */
			speakers: components['schemas']['Speaker'][]
			/** Rules */
			rules: string[]
			/** Prizes */
			prizes: components['schemas']['Prize'][]
			/** Location */
			location: string[]
			/** Additional Events */
			additional_events: string[]
			/** Organizers */
			organizers: components['schemas']['Organizer'][]
			/** Registration Link */
			registration_link: string
			/** Link */
			link: string
			contacts: components['schemas']['Contacts']
			/** Notes */
			notes: string[]
			/** Isactual */
			isActual: boolean
		}
		/** HackathonShort */
		HackathonShort: {
			/** Id */
			id: string
			/** Name */
			name: string
			dateStart: components['schemas']['DateTimeWithRenderFlag']
			dateEnd: components['schemas']['DateTimeWithRenderFlag']
			/** Location */
			location: string[]
			/** Topic */
			topic: string
			/** Format */
			format: string
			/** Stack */
			stack: string
			/** Link */
			link: string
			/** Isactual */
			isActual: boolean
		}
		/** Organizer */
		Organizer: {
			/** Name */
			name: string
			/** Role */
			role: string
			/** Image */
			image: string
		}
		/** Prize */
		Prize: {
			/** Title */
			title: string
			/** Amount */
			amount: string
			/** Description */
			description: string
			/** Sponsor */
			sponsor: string
		}
		/** ScheduleItem */
		ScheduleItem: {
			/** Day */
			day: string
			/** Time */
			time: string
			/** Title */
			title: string
			/** Speaker */
			speaker?: string | null
		}
		/** Speaker */
		Speaker: {
			/** Name */
			name: string
			/** Role */
			role: string
			/** Bio */
			bio: string
			/** Image */
			image: string
		}
		/** Timeline */
		Timeline: {
			/** Registration */
			registration: string
			/** Start */
			start: string
			/** Checkpoints */
			checkpoints: string
			/** Submission Deadline */
			submission_deadline: string
			/** Final Pitching */
			final_pitching: string
		}
		/** Track */
		Track: {
			/** Name */
			name: string
			/** Description */
			description: string
		}
		/** ValidationError */
		ValidationError: {
			/** Location */
			loc: (string | number)[]
			/** Message */
			msg: string
			/** Error Type */
			type: string
		}
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}
export type $defs = Record<string, never>
export interface operations {
	get_audience_list_location_get: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': {
						[key: string]: number
					}
				}
			}
		}
	}
	get_audience_list_audience_get: {
		parameters: {
			query?: never
			header?: never
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': string[]
				}
			}
		}
	}
	get_hackathons_hackathons_get: {
		parameters: {
			query?: {
				offset?: number
				limit?: number
				/** @description Поиск по названию */
				search?: string | null
				/** @description Начальная дата поиска (YYYY-MM-DD) */
				start_date?: string | null
				/** @description Конечная дата поиска (YYYY-MM-DD) */
				end_date?: string | null
				/** @description Поиск по локации */
				location?: string | null
				/** @description Поиск по целевой группе */
				typeParticipant?: 'Школьники' | 'Специалисты' | 'Студенты'
				/** @description Поиск по профессиольному профилю */
				audience?:
					| 'Инженеры'
					| 'Маркетинг'
					| 'Безопасность'
					| 'Менеджеры'
					| 'Дизайнеры'
					| 'Архитекторы'
					| 'Разработчики'
					| 'Аналитики'
				/** @description Фильтр по формату */
				format?: 'Оффлайн' | 'Гибрид' | 'Онлайн'
				/** @description Сортировка по дате начала */
				sort?: 'По возврастанию' | 'По убыванию'
				/** @description Фильтр по актуальности */
				isActual?: boolean | null
			}
			header?: never
			path?: never
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['HackathonShort'][]
				}
			}
			/** @description Validation Error */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['HTTPValidationError']
				}
			}
		}
	}
	get_hackathon_by_id_hackathons__hackathon_id__get: {
		parameters: {
			query?: never
			header?: never
			path: {
				hackathon_id: string
			}
			cookie?: never
		}
		requestBody?: never
		responses: {
			/** @description Successful Response */
			200: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['HackathonFull']
				}
			}
			/** @description Validation Error */
			422: {
				headers: {
					[name: string]: unknown
				}
				content: {
					'application/json': components['schemas']['HTTPValidationError']
				}
			}
		}
	}
}
