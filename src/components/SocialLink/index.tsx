import { dataLinks } from '../../utils/data'
import { Category, Description, ListLinks, SocialContainer } from './styles'

export function SocialLink() {
  return (
    <SocialContainer>
      <ListLinks>
        {dataLinks.categories.map((data) => {
          return (
            <Category key={data.id}>
              <h3>{data.title}</h3>
              {data.links.map((dt) => {
                return (
                  <Description key={dt.id}>
                    <a href={dt.link}>{dt.name}</a>
                  </Description>
                )
              })}
            </Category>
          )
        })}
      </ListLinks>
    </SocialContainer>
  )
}
