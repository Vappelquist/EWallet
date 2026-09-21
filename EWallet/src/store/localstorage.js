export function loadState(){
    try {
        const serialized = localStorage.getItem('ewallet-state');
        if (serialized === null) return undefined;
        return JSON.parse(serialized)
    }
    catch (err){
        console.error('Could not read localstorage:', err)
        return undefined
    }
}
export function saveState(state){
    try{
        const serialized = JSON.stringify(state);
        localStorage.setItem('ewallet-state', serialized);

    } catch (err) {
        console.error('Couldnt save to localStorage', err);
    }
}