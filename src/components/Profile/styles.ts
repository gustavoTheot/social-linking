import styled from 'styled-components'

export const ProfileContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  margin-top: 4rem;

  color: ${(props) => props.theme.white};

  img {
    width: 10rem;
    border-radius: 99%;
  }
`
