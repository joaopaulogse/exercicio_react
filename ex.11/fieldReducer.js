const INITIAL_STATE = { value:'Opa' }

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'VALUE_CHANDED':
            return {value: action.payload}
        default:
            return state
    }
}