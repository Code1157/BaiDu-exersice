
var selOption = document.getElementById("region-select");

var selOption2 = document.getElementById("os-select");
var tabOs = document.getElementById("table-os");
var tabData2 = tabOs.querySelector("table");
var tabVal2 = [];

selOption2.onclick = function () {
  clearEle2(tabData2);
  tabHead();
};

//清除父元素的所有子元素
function clearEle2(parent) {
  console.log(parent);
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}
//value获取对应地区数据
function tab2(product) {
  var value = tab1(getVal(selOption));//动态获取第一个表数据
  var value2 = getVal(product);//第二选项卡option的值
  value.forEach((val) => {
    if (value2 == val.product) {
      return val;
    }
  });
}