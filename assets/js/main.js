// console.log("hi fbw-12");
// console.log("this is external");
// alert("DESTROY SKRIBBL.IO");
// alert("DESTROY SKRIBBL.IO NOW!");
// alert("DESTROY SKRIBBL.IO IMMEDIATELY");
// document.write("who was it?");
// document.title = "Hello, Stefan!";

// DECLARATION OF VARIABLE age
// var age;

// INIT my var
// var age = 35;
// Console log age
// console.log(age);

// DECL and INIT name
// var name = "Stefan";
// console.log(name);

// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }
// const max = 1023;
// var a = 1;
// for (let i = 0; i <= max; i++) {
//   console.log(`${i}: ${a}`);
//   i < max ? (a *= 2) : (a *= 1);
// }

// var z = "ha";
// var y = z;
// let c = 1;
// while (c > 0) {
//   console.log(y);
//   y = y + z;
//   if (c == 35) {
//     break;
//   }
// }

let d = [
  "C++",
  "Fortran",
  "Pascal",
  "Cobol",
  "VBA",
  "Python",
  "Perl",
  "Ruby",
  "Bash",
  "JS",
  "Tcsh",
  "Lisp"
];
const j = d.length;
let l;
let m;
for (let i = 0; i < j; i++) {
  console.log(`${i}: ${d[i]}`);
  // l = typeof i;
  // console.log(`variable has type ${l}`);
  m = typeof d[i];
  console.log(`element has type ${m}`);
}
