function fun(){
  var i,j;
  for(i=1;i<10;i++){
    for(j=1;j<=i;j++){
      console.log(j + "*" + i + "=" + (j*i));
    }
    console.log("\n");
  }
}
function fun2(){
  var i,j;
  var str1 = "";
  var str2 = "";
  var p9 = document.getElementById("ppp");
  for(i=1;i<10;i++){
      for(j=1;j<=i;j++){
        str2 = String(j + "*" + i + "=" + (j*i) + "&nbsp;&nbsp;&nbsp;");
        str1 = str1.concat(str2);
      }
    str1 = str1.concat("<br>");
  }
  p9.innerHTML = str1;
}