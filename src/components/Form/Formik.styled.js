import { Field, Form } from 'formik'
import styled from 'styled-components'

export const StyledField = styled(Field)({
  height: '32px',
  minWidth: '240px',
  borderRadius: '8px',
  border: 'none',
  padding: '8px 24px',
  fontSize: '14px',
})

export const ContainerForm = styled(Form)({
  display: 'flex',
  justifyContent: 'space-between',
  button: {
    marginTop: 0,
  },
})
