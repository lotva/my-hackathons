import createClient from 'openapi-fetch'

import type { paths } from './openapi'

const baseUrl = import.meta.env.VITE_API_BASE_URL

export const client = createClient<paths>({ baseUrl })
