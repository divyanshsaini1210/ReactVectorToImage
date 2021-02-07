
const CreateImage=(context,dataArray)=>{
    const END_OF_LINE = ["65535","65535"]
    const END_PX = "65535"
    var inLine=true
    context.beginPath();
      for (var arr=0;arr<dataArray.length;arr++){
          
        if (inLine!=true){
            context.moveTo(parseInt(dataArray[arr][0])+50,parseInt(dataArray[arr][1])+260);
            inLine=true
        }
        else if (dataArray[arr].length===END_OF_LINE.length &&
            dataArray[arr].every(function(value) {return value!=END_PX})){
                inLine=true
                context.lineTo(parseInt(dataArray[arr][0])+50,parseInt(dataArray[arr][1])+260);
          }else{
              inLine=false
              
          }
      }
      context.stroke();
}
export default CreateImage