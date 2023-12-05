import styled from 'styled-components'

const Button = styled('button')(({ $width, $bgColor }) => ({
  cursor: 'pointer',
  minWidth: '164px',
  width: $width,
  padding: '14px',
  backgroundColor: $bgColor || 'teal',
  borderRadius: '8px',
  display: 'block',
  marginTop: '10px',
  border: 'none',
  color: 'white',
  fontWeight: 'bold',
  transition: '0.8s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}))

export default Button
