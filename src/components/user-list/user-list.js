import React, { useState, useEffect, Fragment } from "react";
import './user-list.scss';
import UserListItem from "../user-list-item";
import { connect } from "react-redux";
import { withApiService } from "../hoc";
import Spinner from "../spinner";
import {peopleLoaded} from "../../actions"


const UserList = ({ users, usersLoaded, apiService}) => {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (isLoaded ===false){
            apiService.getPeople().then((data) => {
                usersLoaded(data);
                setIsLoaded(!isLoaded);
            });
        }
    },[isLoaded, apiService, usersLoaded]);

    if (isLoaded===false){
        return <Spinner />
    }

    return (
        <Fragment>
            <ul className="list-group">
                {
                    users.map((user) => {
                        return(
                            <li key = {user.id} className="user-list list-group-item"><UserListItem user = { user }/></li>
                        )
                    })
                }
            </ul>
            <button type="button" className="btn btn-secondary addmore"
                    onClick={ ()=>{
                        apiService.getPeople().then((data) => {
                            usersLoaded(data);
                        });
                    }}
            > Add More People
            </button>
        </Fragment>
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
            dispatch(peopleLoaded(newUsers))
        }
    };
};

export default withApiService()(
    connect(mapStateToProps, mapDispatchToProps)(UserList)
);
