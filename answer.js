function describeValue(value) {
   let type = typeof value;
   let result;

   if(value){
    result = "truthy";
   }else{
    result = "falsy";
   }
   return `${type} | ${result}`;
}
