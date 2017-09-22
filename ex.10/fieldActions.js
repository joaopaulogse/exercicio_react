export function changeValue(e){
    console.log('ChangeValue')
    return {
        type: 'VALUE_CHANDED',
        payload: e.target.value
    }
}