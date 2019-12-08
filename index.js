function map (arr, action){
    let sol=[]
    for (let i=0; i < arr.length; i++){
        sol.push(action(arr[i]))
    }
    return sol
}

function reduce(arr, action, stratingPiont=0){
    let sol= (!!stratingPiont) ? stratingPiont : arr[0]
    let i= (!!stratingPiont) ? 0 : 1
    for (; i < arr.length; i++){
        sol = action(sol, arr[i])
    }
    return sol
}