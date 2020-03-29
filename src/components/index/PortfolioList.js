import dedd from '../../images/dedd/dedd.png'
import ottawaTech from '../../images/ottawatech/ott.png'
import reactImage from '../../images/icons/react.png'
import styledImage from '../../images/icons/styled.jpeg'
import giphy from '../../images/icons/giphy.png'
import firebase from '../../images/icons/firebase.png'

const PortfolioList = [
  {
    title: 'Ottawa Tech',
    subTitle: 'A repository of hundreds of Ottawa Tech Companies',
    url: 'https://www.ottawatech.io',
    image: `${ottawaTech}`,
    tech: [
      { name: 'React', url: 'https://reactjs.org/', image: `${reactImage}` },
      {
        name: 'Styled Components',
        url: 'https://www.styled-components.com',
        image: `${styledImage}`,
      },
      { name: 'Firebase', url: 'https://firebase.com/', image: `${firebase}` },
    ],
  },
  {
    title: 'Dedd Creative Gifs',
    subTitle: 'Do you need some inspiration?',
    url: 'http://www.dedd.co',
    image: `${dedd}`,
    tech: [
      { name: 'React', url: 'https://reactjs.org/', image: `${reactImage}` },
      {
        name: 'Styled Components',
        url: 'https://www.styled-components.com',
        image: `${styledImage}`,
      },
      { name: 'Giphy', url: 'https://giphy.com/', image: `${giphy}` },
    ],
  },
]

export default PortfolioList
