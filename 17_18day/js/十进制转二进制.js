function dec2bin() {
  var dec = Number(document.getElementById('dec-number').value);
  var bbt = Number(document.getElementById('bin-bit').value);
  var res = document.getElementById('result');
  var d_bin = dec.toString(2);
  var buling = "";
    // 在这里实现你的转化方法，注意需要判断输入必须为一个非负整数
  try{
    if(Number(dec) < 0)
      throw "必须输入非负整数！";
    else{
      if(bbt >= d_bin.length){
        while((bbt - d_bin.length) > 0){
          buling += "0";
          bbt--;
        }
      res.innerHTML = buling + d_bin;
      }else {
        res.innerHTML = d_bin;
        console.log("ERROR:输入的位数小于二进制的位数");
      }
    }
  }catch(err){
    window.alert(err);
  }
}
// dec-number为5，bin-bit为5，则转化后数字为00101
// 如果bin-bit小于转化后的二进制本身位数，则使用原本的位数，如dec-number为5，bin-bit为2，依然输出101，但同时在console中报个错
