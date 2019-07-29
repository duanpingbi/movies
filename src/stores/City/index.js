const state = {
    nm:'北京',
    id:1
};
const actoins ={

}
const mutations = {
    CITY_INFO(state,payLoad){
        state.nm = payLoad.nm;
        state.id = payLoad.id;
    }
}
export default {
    namespaced:true,
    state,
    actoins,
    mutations
}