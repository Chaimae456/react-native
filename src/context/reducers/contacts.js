const contacts = (state , {type , payload}) =>{
    switch (type) {
        case 'GET_CONTACT':
            return state;
        default:
            return state ;
    }
};
export default contacts;