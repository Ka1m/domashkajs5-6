let object= []
for (let i = 0; i < 20; i++) {
    let adde = prompt('введите чит (либо "add, " для добавления, либо "del, " для удаления, либо "stop, " для сотановки')
    let delInAdd= adde.split(', ')
if (delInAdd[0]=='add') {
    object.push(delInAdd[1])
}else if(delInAdd[0]== 'del' ){
    for(let x =0;x<object.length;x++){
        object[x]== delInAdd[1] ? object.splice(x,1): ''
    }
}else if(delInAdd[0]=='stop'){
    break
}
 console.log(object);
}
console.log(object);