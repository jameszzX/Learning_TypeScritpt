console.log('hello ts')

function getData(){

}

var str:string = "hello"


// 定义数组1 
// var arr:number[] = [11,23,23];

// 定义数组2
// var arr:Array<number> = [11,23,11];

// 元组
// let arr:[number,string] = [123,'123'];

// 枚举
// enum Flag {success = 1,error = 2};
// let s:Flag = Flag.success;
// console.log(s);

// enum Color {blue=4,red,'orange'};
// let c:Color = Color.orange;
// console.log(c);

// enum Err {
//     'undefined' = -1,
//     'null' = -2,
//     'success' = 1
// };

// let e:Err = Err.success;

// console.log(e);

// 任意类型
// var num:any = 123;
// num = 'str';
// console.log(num); 

// let oBox:any = document.getElementById('box');
// oBox.style.color = 'red';

// undefined 类型
// var num:undefined;
// console.log(num);

// null 类型
// var num:null;

// num = null;
// console.log(num);

// void 类型
// function run():string {
//     return 'abc';
// }
// console.log(run());

// never 类型
// var a:never;

// a=(()=>{
//     throw new Error('错误');
// })()

// function run():string{
//     return 'run';
// }


// function getInfo(name:string,age:number):string{
//     return `${name} --- ${age}`;
// }

// alert(getInfo('james',20));

// function getInfo(name:string,age?:number):string{
//     if(age){
//         return `${name} --- ${age}`;
//     } else {
//         return `${name} --- 年龄保密`;
//     }
// }

// alert(getInfo('james'));
// alert(getInfo('james',123));
