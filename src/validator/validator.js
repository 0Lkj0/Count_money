function isInt(value){
    if(parseInt(value)==value){
        return true
    }
    return false
}
function isStr(value){
    console.log(value)
    if(value.match(/^[ ]*$/)){
        return false
    }
    if(value){ // "",null,undefined,NaN
        return true
    }
    return false
}
module.exports = {
    indexActionisPost(data){
        if(isInt(data.year) && isInt(data.month) && isInt(data.day) && !isNaN(data.money) && isStr(data.event)){
            return true
        }
        return false
    }
}