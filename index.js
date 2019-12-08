function map (arr1, action){
    let ans=[]
    for (let i=0; i < arr1.length; i++){
        ans.push(action(arr1[i]))
    }
    return ans
}

function reduce(arr1, action, sp=0){
    let ans= (!!sp) ? sp : arr1[0]
    let i= (!!sp) ? 0 : 1
    for (; i < arr1.length; i++){
        ans = action(sol, arr1[i])
    }
    return sol
}