var selYear = document.getElementById("year-select");
var selMonth = document.getElementById("month-select");
var selDay = document.getElementById("day-select");
var selHour = document.getElementById("hour-select");
var selMinite = document.getElementById("minite-select");
var selSecond = document.getElementById("second-select");
window.onload = function () {
  //添加年份
  var y = 0;
  while (y++ < 330) {
    let option = document.createElement("option");
    option.text = 1970 + y;
    try {
      selYear.add(option, selYear.options[null]);
    } catch (e) {
      selYear.add(option, null);
    }
  }
  //添加月份
  var k = 1;
  while (k++ < 12) {
    let option = document.createElement("option");
    option.text = k;
    try {
      selMonth.add(option, selMonth.options[null]);
    } catch (e) {
      selMonth.add(option, null);
    }
  }
  //添加天数
  // var dd = 1;
  // while (dd++ < 31) {
  //   let option = document.createElement("option");
  //   option.text = dd;
  //   try {
  //     selDay.add(option, selDay.options[null]);
  //   } catch (e) {
  //     selDay.add(option, null);
  //   }
  // }
  //添加时辰
  var h = 0;
  while (h++ < 23) {
    let option = document.createElement("option");
    option.text = h;
    try {
      selHour.add(option, selHour.options[null]);
    } catch (e) {
      selHour.add(option, null);
    }
  }
  //添加分钟
  var m = 0;
  while (m++ < 59) {
    let option = document.createElement("option");
    option.text = m;
    try {
      selMinite.add(option, selMinite.options[null]);
    } catch (e) {
      selMinite.add(option, null);
    }
  }
  //添加秒数
  var s = 0;
  while (s++ < 59) {
    let option = document.createElement("option");
    option.text = s;
    try {
      selSecond.add(option, selSecond.options[null]);
    } catch (e) {
      selSecond.add(option, null);
    }
  }
}