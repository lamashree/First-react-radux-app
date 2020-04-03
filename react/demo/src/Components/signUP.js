import React from 'react';
import * as userAction from '../actions/userAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, Link } from 'react-router-dom';

class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            navigate: false

        }
    }
    handlechange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value

        })
    }


    submit = (event) => {
        event.preventDefault()
        let sampleData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password


        }
        this.props.actions.addUserData(sampleData)
        this.setState({
            navigate: true
        })
    }
    render() {
        if (this.state.navigate) {
            return <Redirect to='/userlist' />
        }
        return (
            <form onSubmit={this.submit}>

                <div className="form-group">
                    <label htmlFor="Firsttname">Firts Name</label>
                    <input type="Firstname" className="form-control" id="N" aria-describedby="emailHelp" placeholder="FristName" name="firstName" value={this.state.firstName} onChange={this.handlechange} />
                    <small id="emailHelp" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label htmlFor="LastName">Last Name</label>
                    <input type="LastName" className="form-control" id="L" aria-describedby="emailHelp" placeholder="LastName" name="lastName" value={this.state.lastName} onChange={this.handlechange} />
                    <small id="L" className="form-text text-muted"></small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handlechange} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.password} onChange={this.handlechange} />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="submit" />
                </div>

                <div className="form-group">
                    <Link to ="/userlist" className="btn btn-danger"> Cancel </Link> 
                </div>

            </form>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(userAction,
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
