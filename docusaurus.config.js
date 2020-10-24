module.exports = {
  title: 'NCNU Open Source 讀書會',
  // tagline: 'The tagline of my site',
  url: 'https://ncnu-opensource.github.io/',
  baseUrl: '/study-circle/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'NCNU-OpenSource', // Usually your GitHub org/user name.
  projectName: 'study-circle', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'NCNU Open Source 讀書會',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/NCNU-OpenSource/study-circle',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/groups/NCNU.OpenSource/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/NCNU-OpenSource/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/MOLi_rocks',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NCNU OpenSource BY-SA 4.0. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
