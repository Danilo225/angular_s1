class AddUser extends React.Component<{
    AddUser: typeof user.add
  }, {username: string}> {
    render() {
      const {username, addUser} = this.props
      return (
        <form>
          <input value={username} />
          <button onClick={() => this.addUser({username})}>Submit</button>
        </form>
      )
    }
  }