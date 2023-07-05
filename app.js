// const number = 8801546486748;

// let pattern = /^(\+8801|8801|01)[0-9]{9}$/;
// console.log(pattern.test(number));

// let pattern2 = /^(http:\/\/|https:\/\/)[a-z0-9-\.]{1,}\.[a-z]{2,15}$/;
// const url = "https://info.facebook";
// console.log(pattern2.test(url));

// const pattern = /^[^a-z]{1,}$/;
// let uppercaseLetter = "SSSSJHOIUB45";
// console.log(pattern.test(uppercaseLetter));

// const pattern = /[a-zA-z]{3,15}[ ][0-9]{1,2},[ ][0-9]{4}/;
// const date = "Jun 13,2023";
// console.log(pattern.test(date));

// Create a Strong Password
// const pattern =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ ])(?=.*[~!@#$%^&*()_\+<>?])(?=.*[ ])[a-zA-Z0-9~!@#$%^&*()_\+<>?]{6,}$/;

// const password = "ABa a59$%";

// console.log(pattern.test(password));

const pattern1 =
  /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[~!@#$%^&*()-\+])(?=.*[ ])[a-zA-Z0-9~!@#$%^&*()_\+]{6,}$/;

const newpassword = "Admin@ 123";

console.log(pattern1.test(newpassword));
