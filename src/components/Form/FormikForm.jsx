import Button from 'components/uiComponents/Button.styled'
import { Formik } from 'formik'
import { ContainerForm, StyledField } from './Formik.styled'

const FormikForm = ({ addUser, closeForm }) => {
  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={values => {
        addUser({ ...values })
        closeForm()
      }}
    >
      {() => (
        <ContainerForm>
          <StyledField placeholder="Name" name="name" type="text" />
          <StyledField placeholder="Email" name="email" type="email" />
          <Button $bgColor="grey" type="submit">
            Create user
          </Button>
        </ContainerForm>
      )}
    </Formik>
  )
}

export default FormikForm
