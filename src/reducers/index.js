export default function subapp( state = {
    handkerchief: false
}, action ) {
    switch (action.type) {
        case 'FETCH_HANDKERCHIEF':
            return Object.assign({},state,{handkerchief: true});

        default:
            return state;
    }
}