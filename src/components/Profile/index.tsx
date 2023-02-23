import { dataProfile } from '../../utils/data'
import { ProfileContainer } from './styles'

export function Profile() {
  const profile = dataProfile
  return (
    <ProfileContainer>
      <img
        src="https://avatars.githubusercontent.com/u/44641003?s=400&u=96c806d71e1f1122f312ce2f7656a809eae8225c&v=4"
        alt=""
      />

      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
    </ProfileContainer>
  )
}
