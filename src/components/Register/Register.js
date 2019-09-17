import React from 'react';

class Register extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onSubmitSignIn = () => {
        fetch('https://immense-harbor-47949.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user)
                    this.props.onRouteChangeLogOut();
                }
            })
    }

    render() {
        return(
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw5 shadow-5 center">
                    <div action="sign-up_submit" method="get" acceptCharset="utf-8">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 pt4">Register</legend>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="Nickname">Nickname</label>
                            <input onChange={this.onNameChange} className="pa2 input-reset ba bg-transparent" type="text" name="Nickname"  id="Nickname" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="email-address">Email address</label>
                            <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mt3">
                            <label className="db fw4 lh-copy f6" htmlFor="password">Password</label>
                            <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="mt3 pb4"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" onClick={this.onSubmitSignIn} type="submit" value="Sign Up" /></div>
                    </div>
            </article>
        )
    }
}

export default Register;
