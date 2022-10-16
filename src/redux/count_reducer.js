const initState = 0 //初始化状态
export default function countReducer(prestate = initState, action){
    const {type,data} = action;

    switch (type) {
        case 'increment': 
        return   prestate + data

        case 'decrement': 
        return prestate - data
        
        default:
            return prestate
    }
}