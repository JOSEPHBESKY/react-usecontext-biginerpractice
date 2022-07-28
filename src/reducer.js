export const initialstate={
    name:'react',
    isAuthenticate:false,
    cartidem:[]
};
export const stateReducer=(state,action)=>{
    console.log('stateReducer',state);
    return {...state,name:'js'};
}