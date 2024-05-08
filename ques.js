// Javascript practice questions

// Ques1 Print the given output for the given input - 
// Input = [
//   { key: "Sample1", data: "Data1" },
//   { key: "Sample2", data: "Data2" },
//   { key: "Sample1", data: "Data1" },
//   { key: "Sample3", data: "Data3" },
//   { key: "Sample1", data: "Data1" },
// ]
// Output - {
//   Sample1: [
//     { key: 'Sample1', data: 'Data1' },
//     { key: 'Sample1', data: 'Data1' },
//     { key: 'Sample1', data: 'Data1' },
//     { key: 'Sample1', data: 'Data1' }
//   ],
//   Sample2: [ { key: 'Sample2', data: 'Data2' } ],
//   Sample3: [ { key: 'Sample3', data: 'Data3' } ]
// }

const fruits = [
  { key: "Sample1", data: "Data1" },
  { key: "Sample2", data: "Data2" },
  { key: "Sample1", data: "Data1" },
  { key: "Sample3", data: "Data3" },
  { key: "Sample1", data: "Data1" },
];

let myobj ={};
fruits.forEach(element => {
  if(myobj[element.key]){
    myobj[element.key].push(element);
  }else{
    myobj[element.key]=[element];
  }
});

console.log(myobj);

// Ques2 print series - 
// *
// **
// ***
// ****
// *****
// *****
// ****
// ***
// **
// *

const starSeries = (n)=>{
  for (let i = 1; i <= n; i++) {
    let str='';
    for (let j = 1; j <= i; j++) {
      str+='*';
    }
    console.log(str);
  }
  for (let i = n; i >=1 ; i--) {
    let str='';
    for (let j = i; j >= 1; j--) {
      str+='*';
    }
    console.log(str);
  }
}
starSeries(5);