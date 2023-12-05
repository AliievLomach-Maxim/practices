import styled from 'styled-components'

export const SectionStyled = styled('section')(({ $base }) => ({
  maxWidth: '800px',
  padding: '20px',
  margin: '0 auto',
  backgroundColor: $base ? 'teal' : 'thistle',
  ul: {
    listStyleType: 'none',
    padding: 0,
  },
}))
