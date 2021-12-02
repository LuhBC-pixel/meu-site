const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://meu-site-drab.vercel.app/',
  title: 'LBC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Luisa Boina Coltro',
  role: 'Systems Documenter / Documentadora de Sistemas',
  description:
    'I work as a Systems Documenter at Microdata, I\'m finishing my second degree, the course is Systems Analysis and Development. I\'ve been programming for 1 year /// Eu trabalho como Documentadora de Sistemas na Microdata, estou terminando a minha segunda graduação, o curso é Análise e Desenvolvimento de Sistemas. Eu programo faz 1 ano',
  resume: 'https://github.com/LuhBC-pixel',
  social: {
    linkedin: 'https://www.linkedin.com/in/luisa-boina-02294014b/',
    github: 'https://github.com/LuhBC-pixel',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Github Search',
    description:
      'É um site que permita que pesquisa usuários do Github, mostra os dados do usuário pesquisado e todos os repositórios dele.',
    stack: ['Tailwind CSS', 'React-router', 'React', 'Github API', 'Vercel'],
    sourceCode: 'https://github.com/LuhBC-pixel/GithubSearch',
    livePreview: 'https://github-search-wine-seven.vercel.app/',
  },
  {
    name: 'Contador Dias',
    description:
      'Conta quanto tempo falta para o fim do ano',
    stack: ['CSS', 'date-fns', 'React'],
    sourceCode: 'https://github.com/LuhBC-pixel/contador-dias',
    livePreview: 'https://contador-dias.vercel.app/',
  },
  {
    name: 'Aula de Free Code Camp',
    description:
      'Aula de Free Code Camp, como usar melhor o CSS. Testar o meu conhecimento com Javascript',
    stack: ['CSS', 'HTML', 'Javascript'],
    sourceCode: 'https://github.com/LuhBC-pixel/freeCodeCamp',
    livePreview: 'https://github.com/LuhBC-pixel/freeCodeCamp',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Material UI',
  'Tailwind CSS',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bc.luisa@yahoo.com.br',
}

export { header, about, projects, skills, contact }