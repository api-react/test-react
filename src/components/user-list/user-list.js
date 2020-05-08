import React, { useState, useEffect } from "react";
import './user-list.scss';
import UserListItem from "../user-list-item";
import { connect } from "react-redux";
import { withApiService } from "../hoc";
import Spinner from "../spinner";


const UserList = ({ users, usersLoaded, apiService}) => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded ===false){
            apiService.getPeople().then((data) => {
                usersLoaded(data);
            });

            setIsLoaded(!isLoaded);
        }
    },[isLoaded, apiService, usersLoaded]);

    if (isLoaded===false){
        return <Spinner />
    }

    return (
        <ul className="list-group">
            {
                users.map((user) => {
                    return(
                        <li key = {user.id} className="user-list list-group-item"><UserListItem user = { user }/> </li>
                    )
                })
            }
        </ul>
    );
};

const mapStateToProps = ( state ) => {
    return{
        users: state.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        usersLoaded: (newUsers) =>{
            dispatch({
                type: 'USERS_LOADED',
                payload: newUsers
            })
        }
    };
};

export default withApiService()(
    connect(mapStateToProps, mapDispatchToProps)(UserList)
);
