
const peopleLoaded = (newPeople) => {
    return{
        type: 'USERS_LOADED',
        payload: newPeople
    };
};

const idIncrement = () => {
    return{ type: 'ID_INCREMENT' };
};

export {
    peopleLoaded,
    idIncrement
};
