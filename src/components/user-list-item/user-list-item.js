import React, {Fragment} from "react";
import './user-list-item.scss';

const UserListItem = ({ user }) => {
    const {id, name, avatar} = user;
    return (
        <Fragment>
            <div className="id-users">{id}</div>
            <img src={avatar.thumbnail}></img>
            <div className="name">{name.first}</div>
            <div className="name">{name.last}</div>
            <button type="button" className="btn btn-primary">Mark user</button>
        </Fragment>
    );
};

export default UserListItem;