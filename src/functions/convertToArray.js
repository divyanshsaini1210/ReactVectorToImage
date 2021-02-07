const convertToArray=(data)=> {
    var Array =[]
    var strArray=data.split(',')
    if (strArray.length>0) {
        for (var i=0;i<strArray.length-1;i+=2){
            Array.push([strArray[i],strArray[i+1]])
        }
    }
    return Array;
}
export default convertToArray;