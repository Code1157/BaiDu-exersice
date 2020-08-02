


var selOption = document.getElementById("region-select");
var tabWrap = document.getElementById("table-wrapper");
var tabData = tabWrap.querySelector("table");
var value = []; //获取符合的数据
//value获取对应地区数据
function tab1(area) {
  var ife31data = sourceData;
  var count = 0; //value数组的数据个数
  ife31data.forEach((val, index) => {
    if (area == val.region) {
      value[count] = val;
      count++;
    }
  });
  return value;
}
//渲染新的表格
function strVal() {
  value = tab1(getVal(selOption));
  value.forEach((val) => {
    var trr = document.createElement("tr");
    tabData.appendChild(trr);
    var i = 0;
    while (i++ < 14) {
      var tdd = document.createElement("td");
      var tdVal;
      if (i == 1) {
        tdVal = document.createTextNode(val.product);
      } else if (i == 2) {
        tdVal = document.createTextNode(val.region);
      } else {
        tdVal = document.createTextNode(val.sale[i - 3]);
      }
      trr.appendChild(tdd);
      tdd.appendChild(tdVal);
    }
  });
}
//生成标题
function tabHead() {
  var trr = document.createElement("tr");
  tabData.appendChild(trr); //标题
  var i = 0;
  while (i++ < 14) {
    var thh = document.createElement("th");
    var thVal;
    if (i == 1) {
      thVal = document.createTextNode("商品");
    } else if (i == 2) {
      thVal = document.createTextNode("地区");
    } else {
      thVal = document.createTextNode(i - 2 + "月");
    }
    trr.appendChild(thh);
    thh.appendChild(thVal);
  }
}
//清除父元素的所有子元素
function clearEle(parent) {
  console.log(parent);
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.firstChild);
  }
}
//获取option元素的值
function getVal(elem) {
  var selIndex = elem.selectedIndex;
  var selSet = elem.options;
  var checked = selSet[selIndex].text;
  return checked;
}
//点击生成表格
selOption.onclick = function () {
  clearEle(tabData);
  tabHead();
  strVal();
};
