import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
   title: 'vezironi',
   description: 'vezironi is a opinionated, unstyled blogging template—built with Astro, Tailwind, and shadcn/ui.',
   href: 'https://vezironi.com',
   author: 'vezironi',
   locale: 'en-US',
   featuredPostCount: 2,
   postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
   {
      href: '/blog',
      label: 'blog',
   },
   {
      href: '/about',
      label: 'about',
   },
]

export const SOCIAL_LINKS: SocialLink[] = [
   {
      href: 'https://github.com/vezironi',
      label: 'GitHub',
   },
   {
      href: 'https://twitter.com/vezironi',
      label: 'Twitter',
   },
   {
      href: 'mailto:vezironi@gmail.com',
      label: 'Email',
   },
   {
      href: '/rss.xml',
      label: 'RSS',
   },
]

export const ICON_MAP: IconMap = {
   Website: 'lucide:globe',
   GitHub: 'lucide:github',
   LinkedIn: 'lucide:linkedin',
   Twitter: 'lucide:twitter',
   Email: 'lucide:mail',
   RSS: 'lucide:rss',
}