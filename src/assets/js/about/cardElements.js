const cardElements = [
  {
    imageUrl: `
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-world-bolt p-1 bg-white rounded-pill text-center" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M20.985 12.52a9 9 0 1 0 -7.52 8.36" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h10.9" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3c2.313 3.706 3.07 7.856 2.27 12" />
        <path d="M19 16l-2 3h4l-2 3" />
      </svg>
    `,
    cardTitle: 'Languages',
    badgesCard: ['Java', 'JavaScrip', 'Ruby', 'R', 'Go', 'GraphQL'],
  },
  {
    imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-topology-full-hierarchy p-1 bg-white rounded-pill text-center" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M20 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M8 18a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M8 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M20 6a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <path d="M6 8v8" />
    <path d="M18 16v-8" />
    <path d="M8 6h8" />
    <path d="M16 18h-8" />
    <path d="M7.5 7.5l3 3" />
    <path d="M13.5 13.5l3 3" />
    <path d="M16.5 7.5l-3 3" />
    <path d="M10.5 13.5l-3 3" />
  </svg>`,
    cardTitle: 'Frameworks',
    badgesCard: ['Rails','React', 'RSpec', 'Bootstrap', 'Selenium', 'Jest'],
  },
  {
    imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-server-2 p-1 bg-white rounded-pill text-center" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M7 8l0 .01" />
      <path d="M7 16l0 .01" />
      <path d="M11 8h6" />
      <path d="M11 16h6" />
    </svg>`,
    cardTitle: 'Hosting/SaaS',
    badgesCard: ['Render', 'Netlify', 'GitHub-Pages'],
  },
  {
    imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-database p-1 bg-white rounded-pill text-center" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0" />
        <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
        <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
      </svg>`,
    cardTitle: 'Database',
    badgesCard: ['PostgreSQL', 'MariaDB', 'MySQL', 'SQLite'],
  },
  {
    imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-layout p-1 bg-white rounded-pill text-center" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
        <path d="M4 13m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
        <path d="M14 4m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      </svg>`,
    cardTitle: 'Design',
    badgesCard: ['Adobe Ilustrator', 'Photoshop', 'Proto.io', 'Lucidchart', 'Figma', 'Canva', 'Filmora'],
  },
  {
    imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil-plus p-1 bg-white rounded-pill text-center" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 20l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4h4z" />
        <path d="M13.5 6.5l4 4" />
        <path d="M16 18h4m-2 -2v4" />
      </svg>`,
    cardTitle: 'Others',
    badgesCard: ['DBeaver', 'Cisco Packet Tracer', 'ESlint', 'Babel', 'Wamp', 'Thunder client'],
  },
  {
    imageUrl: `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-starp-1 p-1 bg-white rounded-pill text-center" width="55" height="55" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
      </svg>`,
    cardTitle: 'Skills',
    badgesCard: ['Pair Programming', 'Terminal', 'Virtual Assistance', 'Repair services', 'Computer Maintance', 'Communication', 'Multicultural Environment', 'Codepen', 'Codekit', 'GiHub'],
  },

];

export default cardElements;