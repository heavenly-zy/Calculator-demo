var arr = [];
var btn_txt = document.getElementsByClassName("btn");
var txt = document.getElementsByClassName("text")[0];
var show = document.getElementById('showExpression')

for (var i = 0; i < btn_txt.length; i++) {
    btn_txt[i].onclick = function () {
        if (txt.value == "" && this.value == ".") {
            txt.value = "0.";
            showExpression(txt.value)
        }else {
            if (!isNaN(this.value) || this.value == ".") { // 输入数字或者"."的情况
                if (txt.value.indexOf(".") !== -1) { // 有"."存在
                    if (this.value !== ".") { // 用户不能连续按下"."
                        if (txt.value.split('.').slice(1).toString().split('').length <= 1) { // 限制小数点后的字符长度为2以下
                            txt.value += this.value;
                            showExpression(this.value)
                        }else{
                            alert('最多输入两位小数！')
                        }
                    }
                }
                else { // 没"."存在直接拼接
                    txt.value += this.value;
                    showExpression(this.value)
                }
            }
            else { // 输入符号的情况
                if (this.value === "x") { // 输入为“x”的情况
                    changeX = this.value.replace('x', '*')
                    showExpression(changeX)
                    txt.value = ''
                } else if (this.value === "+") { // 输入符号为"+"的情况
                    showExpression(this.value)
                    txt.value = ''
                } else if (this.value == "◀") { // 输入为“DELETE”的情况
                    txt.value = txt.value.slice(0, txt.value.length - 1);
                    newArr = arr.slice(0, arr.length - 1);
                    arr = newArr
                    show.innerHTML = arr.toString().split(',').slice(0).join('')
                } else { // 输入为“确定”的情况
                    if (arr.length === 0) {
                        //什么也不做
                    } else {
                        txt.value = eval(arr.toString().split(',').slice(0).join(''))
                    }
                }
            }
        }
    }
}
function showExpression(value) {
    arr.push(value);
    console.log(arr)
    show.innerHTML = arr.toString().split(',').slice(0).join('');
}
