import { SectionStyled } from './Section.styled'

const Section = ({ title, children }) => {
  return (
    <SectionStyled $base={title}>
      {title && <h1>{title}</h1>}
      {children}
    </SectionStyled>
  )
}

export default Section
