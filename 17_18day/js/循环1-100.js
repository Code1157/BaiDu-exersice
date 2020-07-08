function fun(){
  var i;
  for(i=1;i<=100;i++){
    if(i%3 == 0)
      console.log("PA");
    else if(i.toString().search("3") != -1)
      console.log("PA <=" + i);
    else
      console.log(i);
  }
}