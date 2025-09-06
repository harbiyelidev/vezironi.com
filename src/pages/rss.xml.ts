import { SITE } from '@/consts'
import rss from '@astrojs/rss'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
   try {
      return rss({
         title: SITE.title,
         description: SITE.description,
         site: context.site ?? SITE.href,
         items: [],
      })
   } catch (error) {
      console.error('Error generating RSS feed:', error)
      return new Response('Error generating RSS feed', { status: 500 })
   }
}