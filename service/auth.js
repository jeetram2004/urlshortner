



    const sessionIdToUserMap = new Map();

function setUser(id,result){
    sessionIdToUserMap.set(id,result)
}

function getUser(id){
    return sessionIdToUserMap.get(id);
}



module.exports = {
    setUser,
    getUser,
   
}




















