function map (arr1, action){
    let ans=[]
    for (let i=0; i < arr1.length; i++){
        ans.push(action(arr1[i]))
    }
    return ans
}

function reduce(arr1, action, sp=0){
    let sol= (!!sp) ? sp : arr[0]
    let i= (!!stratingPiont) ? 0 : 1
    for (; i < arr.length; i++){
        sol = action(sol, arr[i])
    }
    return sol
}