interface ProfileProps {
  image?: string
  name: string
  description: string
}

interface Link {
  id: number
  name: string
  link: string
}

interface Categoires {
  id: number
  title: string
  links: Link[]
}

export interface Links {
  categories: Categoires[]
}

export const dataProfile: ProfileProps = {
  image: '',
  name: 'Gustavo Theotonio',
  description: 'Web Development',
}

export const dataLinks: Links = {
  categories: [
    {
      id: 1,
      title: 'Social',
      links: [
        {
          id: 1,
          name: 'Linkedin',
          link: 'https://www.linkedin.com/in/gustavo-silva-theotonio/',
        },
        {
          id: 2,
          name: 'GitHub',
          link: 'https://github.com/gustavoTheot',
        },
        {
          id: 3,
          name: 'Instagram',
          link: 'https://www.instagram.com/gustavothes/',
        },
        {
          id: 4,
          name: 'YouTube',
          link: 'https://www.youtube.com/channel/UCcmc0yfcJR8LqYI-G2Ibg3w',
        },
      ],
    },
    {
      id: 2,
      title: 'Setup',
      links: [
        {
          id: 1,
          name: 'Dell G3',
          link: '',
        },
        {
          id: 2,
          name: 'Monitor LG Ultrawide',
          link: '',
        },
      ],
    },
  ],
}
