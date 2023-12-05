import { Component } from 'react'
import { nanoid } from 'nanoid'
import Section from 'components/uiComponents/Section'
import UsersList from 'components/UserList'
import FormikForm from 'components/Form/FormikForm'
import Button from 'components/uiComponents/Button.styled'
import dataJson from './users.json'

class App extends Component {
  state = {
    users: dataJson,
    isShowForm: false,
  }

  deleteUsers = userId => {
    this.setState(prev => ({
      users: prev.users.filter(({ id }) => id !== userId),
    }))
  }

  changeJobStatus = userId => {
    this.setState(prev => ({
      users: prev.users.map(user =>
        user.id === userId ? { ...user, hasJob: !user.hasJob } : user
      ),
    }))
  }

  openForm = () => {
    this.setState({ isShowForm: true })
  }

  addUser = data => {
    const newUser = {
      id: nanoid(),
      hasJob: false,
      ...data,
    }
    this.setState(prev => ({ users: [...prev.users, newUser] }))
  }

  closeForm = () => {
    this.setState({ isShowForm: false })
  }

  render() {
    const { users, isShowForm } = this.state
    return (
      <Section title={'Users List'}>
        <UsersList
          users={users}
          deleteUsers={this.deleteUsers}
          changeJobStatus={this.changeJobStatus}
        />
        {isShowForm ? (
          <FormikForm closeForm={this.closeForm} addUser={this.addUser} />
        ) : (
          <Button $bgColor="thistle" onClick={this.openForm}>
            Open Form
          </Button>
        )}
      </Section>
    )
  }
}

export default App
