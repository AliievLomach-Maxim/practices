import Button from 'components/uiComponents/Button.styled'
import Section from '../uiComponents/Section'
import { Card, InfoContainer, NativeText, Text, Title } from './User.styled'

const User = ({
  user: { id, name, avatarUrl, username, website, phone, email, hasJob },
  deleteUsers,
  changeJobStatus,
}) => {
  const isEndedBiz = email.endsWith('biz')

  return (
    <Section>
      <Card>
        <div>
          <img src={avatarUrl} alt={'Avatar'} />
          <Button $width="100%" onClick={() => deleteUsers(id)}>
            Delete
          </Button>
        </div>
        <InfoContainer>
          <div>
            <Title>
              {username} {name}
            </Title>
            <Text>
              Phone: <NativeText>{phone}</NativeText>
            </Text>
            <Text>
              Email: <NativeText isEndedBiz={isEndedBiz}>{email}</NativeText>
            </Text>
            <a href={website}> {website}</a>
          </div>
          <div>
            <Text>Has Job: {hasJob.toString()}</Text>
            <Button $width="100%" onClick={() => changeJobStatus(id)}>
              Change job Status
            </Button>
          </div>
        </InfoContainer>
      </Card>
    </Section>
  )
}

export default User
