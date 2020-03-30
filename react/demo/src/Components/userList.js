import React from 'react';
import * as userAction from '../actions/userAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import lodash from 'lodash';
import { Link } from 'react-router-dom'
class UserList extends React.Component {

    // constructor() {
    //     super();
    // }
    // handlechange = (event) => {
    //     console.log("handle change is working", event.target.value)
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value

    //     })
    // }
    componentWillMount = () => {
        this.loadUserLists();
    }

    loadUserLists = () => {
        this.props.actions.loadUserData();
    }

    // submit = (event) => {
    //     console.log("input messages", this.state)

    //     event.preventDefault()
    // }
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.userlist.map(data => {
                                return <tr>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                {/* <Link to="/">
                    <button type="button" class='btn btn-primary'>
                        Back to SignUp
                    </button>
                </Link> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("console this state", state)
    return {
        userlist: !lodash.isUndefined(state.userLists.userLists) ? state.userLists : state.userLists

    }
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(userAction,
            dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
