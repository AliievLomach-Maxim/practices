import styled from 'styled-components'

export const Title = styled.h2`
  color: red;
  transition: 0.8s;
  &:hover {
    text-shadow: 1px 1px 0.5em teal;
    cursor: pointer;
  }
`

export const Text = styled.p`
  color: teal;
`

export const NativeText = styled.span`
  color: ${({ isEndedBiz }) => (isEndedBiz ? 'red' : 'gray')};
  transition: 0.8s;
  ${Text}:hover & {
    text-shadow: 1px 1px 0.5em teal;
  }
`
export const Card = styled('li')({
  display: 'flex',
  img: {
    minWidth: '240px',
  },
})

export const InfoContainer = styled('div')({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
  padding: '24px',
  '& div:first-child': {
    marginRight: '12px',
  },
})
