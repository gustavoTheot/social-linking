import styled from 'styled-components'

export const SocialContainer = styled.main`
  margin-bottom: 6rem;
`

export const ListLinks = styled.ul``

export const Category = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  margin-top: 3.5rem;

  h3 {
    color: ${(props) => props.theme.white};
  }
`

export const Description = styled.div`
  border: 2px solid black;
  border-radius: 8px;
  box-shadow: 10px 15px 10px rgba(0, 0, 0, 0.6);
  background-color: ${(props) => props.theme['purple-light']};
  a {
    width: 41rem;
    padding: 1.5rem;
    text-decoration: none;

    color: ${(props) => props.theme.white};
    font-weight: bold;

    display: flex;
    justify-content: center;
  }
`
