// Site configuration: Starlight with the docs languages, sidebar, explicit heading ids, page links and diagrams.
import { unified } from '@astrojs/markdown-remark'
import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import mermaid from 'astro-mermaid'
import headingId from 'remark-heading-id'
import linksValidator from 'starlight-links-validator'
import mdLinks from './src/plugins/md-links.mjs'

const site = 'https://common-voice.github.io'
const base = '/common-voice-docs'
const repo = 'https://github.com/common-voice/common-voice-docs'

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  redirects: { '/': `${base}/en/` },
  markdown: {
    processor: unified({ remarkPlugins: [headingId], rehypePlugins: [[mdLinks, { base }]] }),
  },
  integrations: [
    mermaid({ autoTheme: true }),
    starlight({
      title: 'Mozilla Common Voice documentation',
      logo: { light: './src/assets/logo-light.svg', dark: './src/assets/logo-dark.svg', replacesTitle: true },
      favicon: '/favicon.svg',
      defaultLocale: 'en',
      locales: {
        en: { label: 'English', lang: 'en' },
      },
      social: [{ icon: 'github', label: 'GitHub', href: repo }],
      editLink: { baseUrl: `${repo}/edit/main/` },
      sidebar: [
        { label: 'Home', slug: '' },
        { label: 'About', items: ['about', 'about/partnerships'] },
        {
          label: 'Contribute',
          items: [
            'contribute',
            {
              label: 'Contribution guidelines',
              items: [
                'contribute/guidelines',
                'contribute/guidelines/voice',
                'contribute/guidelines/sentences',
                'contribute/guidelines/questions',
                'contribute/guidelines/spontaneous-speech',
                'contribute/guidelines/code-switching',
                'contribute/guidelines/conversations',
                'contribute/guidelines/reporting',
              ],
            },
            'contribute/sentences',
            'contribute/account',
          ],
        },
        {
          label: 'Languages',
          items: [
            'languages',
            'languages/variants-and-accents',
            'languages/dataset-request',
            'languages/localization',
            'translate',
          ],
        },
        { label: 'Community', items: ['community', 'community/language-communities'] },
        { label: 'Datasets', items: ['datasets', 'datasets/data-rights'] },
        'developers',
        'faq',
      ],
      customCss: ['./src/styles/fonts.css', './src/styles/theme.css'],
      plugins: [linksValidator({ errorOnFallbackPages: false })],
    }),
  ],
})
