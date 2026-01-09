const BASE_URL = 'https://www.sanity.io/docs/help/'

export function generateHelpUrl<const Slug extends string>(slug: Slug): `${typeof BASE_URL}${Slug}` {
  return `${BASE_URL}${slug}`
}

