function func(){
  console.log("\n\n波罗斯，海王，甲虫王，怪人王是我干掉的。杰诺斯是我徒弟。饿狼就是屑。S级英雄是屑中屑，还没King厉害（指打游戏）——琦玉");
}
(function getTime(){
  var d = new Date();
  var getH = d.getHours();
  //var sH = Number(getH);
  //console.log(sH);
  if(getH > 6 || getH < 12)
    window.alert("早上好！");
  else if(getH > 12 || getH < 15)
    window.alert("中午好！");
  else if(getH > 15 || getH < 19)
    window.alert("下午好！");
  else 
    window.alert("晚上好！");
}())