// ! Деструктуризация
// let a;
// let b;
// let c;
// let names = ["Ann", "Harry", "Albert"];
// let [a, b, c] = names;
// console.log(a, b, c);
// let a = names[0];
// let b = names[1];
// let c = names[2];

// let names = ["Ann", "Harry", "Albert"];
// let [, , elem3] = names;
// console.log(elem3);
// let [elem1, elem2] = names;
// console.log(elem1, elem2);
// [elem1, elem2] = [elem2, elem1];
// console.log(elem1, elem2);

// let newArr = [];
// newArr.push(elem1, elem2);
// console.log(newArr);
// let [elem2, elem1] = newArr;
// let name = "Alex";
// let user = {
//   name: "Helena",
//   age: 23,
//   skills: ["JavaScript", "React", "Jquery"],
// };
// let {
//   name: newName,
//   age,
//   skills: [skill1, skill2, skill3],
// } = user;
// console.log(name, newName, age, skill1, skill2, skill3);
// !SPREAD operator
// let arr = [1, 1, 1, 3];
// let arr2 = [...arr];
// ! REST operator
// let arr = [1, 1, 1, 3];
// let [num1, ...rest] = arr;
// console.log(num1, rest);

// пример для записи по дефолту
// let names = ["Alex", "John", "Kate"];
// let [name1 = "name1", name2 = "name2", name3 = "name3", name4 = "name4"] =
//   names;
// console.log(name1, name2, name3, name4);

// Поверхностное копирование
// let user = {
//   name: "Helena",
//   age: 23,
//   skills: ["JavaScript", "React", "Jquery"],
// };
// let user2 = { ...user1 };
// console.log(user1, user2);
// user1.name = "Santa";
// user1.skills.push("new skill");
// console.log(user1, user2);

// let user = {
//   name: "Helena",
//   age: 23,
//   skills: ["JavaScript", "React", "Jquery"],
// };
// let user2 = { ...user1 };
// let user3 = Object.assign(user1);
// user1.name = "Santa";
// console.log(user1, user3);

//Глубокое копирование
// теперь создается новая ячейка памяти для user4
// let user = {
//   name: "Helena",
//   age: 23,
//   skills: ["JavaScript", "React", "Jquery"],
// };
// let str = JSON.stringify(user1);    //переводим обьект в строку
// console.log(str, typeof str);
// let obj = JSON.parse(str);      //перводим из строки в обьект
// console.log(obj);
// let user4 = JSON.parse(JSON.stringify(user1));
// console.log(user4);
// user1.skills.push("new skills");
// user1.name = "Anna";
// console.log(user1, user4);

// let str = "Albert Einstein";
// let [a, l, b, e, r, t, ...rest] = str;
// console.log(a, l, b, e, r, t, rest);

// Задание 3
// Напишите функцию checkTask(fullName), принимающую в аргументы строку:
// Albert Einstein
// Используя деструктуризацию, функция должна создать объект в переменной obj, в котором есть свойство firstName с первым
//  словом строки, и свойство lastName со вторым словом строки.
// Выведите в консоль этот объект:
// { firstName: 'Albert', lastName: 'Einstein' }

// function checkTask(fullName){
//     let arg = fullName.split(" ")
//     let [firstName, lastName] = arg
//     let obj = {
//         firstName,
//         lastName
//     }
//     console.log(obj)
// }
// checkTask("Albert Einstein")

// Задание 4
// Создайте функцию checkTask(obj), принимающую в аргументы объект вида:
// {name: ‘Петр’, surname: ‘Петров’, age: ‘20 лет’}
// Функция должна записать соответствующие значения в переменные name, surname и age и вывести их в одном вызове консоли через
// запятую в таком виде:
// console.log(name, surname, age)

// function checkTask(obj) {
//   let { name, surname, age } = obj;
//   console.log(name, surname, age);
// }
// checkTask({ name: "Петр", surname: "Петров", age: "20 лет" });

// Задание 5
// Создайте функцию checkTask(obj), принимающую в аргументы объект вида:
// { hello: “World”, apple: “iPhone”, java: “script” }
// Функция должна поместить в переменные hello и apple первые два свойства.
// Последнее свойство объекта должно быть помещено в переменную java c помощью оператор spread оператора(...rest).
// Также, функция должна вывести последнее свойство в консоль.

// function checkTask(obj) {
//     let { hello, apple, ...java } = obj;
//     console.log(java);
//   }
//   checkTask({ hello: "World", apple: "iPhone", java: "script" });

// Задание 6
// Создайте функцию checkTask(a, b), принимающую в аргументы два числа.
// Функция должна поменять местами значения переменных и вывести в консоль.
// Например, в аргументы приходят a = 0, b = 1, после перестановки, вызывая через console.log(a, b), функция выведет:
// 1, 0

// способ 1
// function checkTask(a, b) {
//   let temt = a;
//   a = b;
//   b = temt;
//   console.log(a, b);
// }
// checkTask(0, 1);

// способ 2
// function checkTask(a, b) {
//   [a, b] = [b, a];
//   console.log(a, b);
// }

// Задание 7
// Создайте функцию checkTask(arr), принимающую в аргументы массив вида:
// ['первый', 'второй', 'третий']
// Запишите второй элемент этого массива в переменную elem2, третий - в переменную elem3.
// Если в массиве нет третьего элемента - запишите в переменную elem3 значение 'eee', а если нет второго - в переменную elem2
// запишите значение 'bbb' и выведите elem2 и elem3 в одном console.log'е через запятую:
// console.log(elem2, elem3)
// Первый элемент никуда записывать не надо.

// function checkTask(arr) {
//   let [, elem2 = "bbb", elem3 = "eee"] = arr;
//   console.log(elem2, elem3);
// }
// checkTask(["первый", "второй", "третий"]);

// Задание 8
// Создайте функцию checkTask(obj), принимающую в аргументы объект вида:
//  {name: 'Jack', age: '22', hobbies: ['football', 'swimming']}
// Запишите в переменные hobby1 и hobby2 слова football и swimming соответственно и выведите их в одном console.log'e через запятую.

// function checkTask(obj) {
//     let {hobbies: [hobby1, hobby2],}
// }
// checkTask({ name: "Jack", age: "22", hobbies: ["football", "swimming"] });       //недоделано

// Задание 9
// Создайте функцию checkTask(obj), принимающую в аргументы объект вида:
// {name: 'Петр', surname: 'Петров', age: '20 лет', }
// Запишите соответствующие значения в переменные name, surname и age через деструктуризацию, и выведите их в консоль.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало следующее значение по умолчанию:
// {name: 'Аноним', surname: 'Анонимович', age: '? лет'}
// Выведите результат в консоль в массиве.
// Например, для объекта:
// {name: 'Петр', surname: 'Петров' }
// Вывод будет:
// [ 'Петр', 'Петров', '? лет' ]

// function checkTask(obj) {
//   let { name = "Аноним", surname = "Анонимович", age = "? лет" } = obj;
//   console.log([name, surname, age]);
// }
// checkTask({ name: "Петр", surname: "Петров" });

// Задание 10
// Создайте функцию checkTask(info), принимающую в аргументы массив вида:
// ['Sam', 'Christenson', 22]
// Функция должна записать все элементы массива info в объект person:
// let person = { name: 'Sam', surname: 'Christenson',  age: 22 };
// и вывести в консоль данный объект.

// function checkTask(info) {
//   let [name, surname, age] = info;
//   let person = {
//     name,
//     surname,
//     age,
//   };
//   console.log(person);
// }
// checkTask(["Sam", "Christenson", 22]);

// Задание 11
// Создайте функцию checkTask(obj), принимающую в аргументы объект вида:
//  {name: 'John', age: '22', }
// Функция должна записать соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - то переменной присваивалось значение по умолчанию: для name это "Aibek",
//  а для свойства age это "99".
// Выведите в одном console.log'e name и age через запятую.

// function checkTask(obj) {
//   let { name = "Aibek", age = "99" } = obj;
//   console.log(name, age);
// }
// checkTask({});

// Задание 12
// Переделайте следующую функцию через деструктуризацию:
// function checkTask(person) {
//   let name = person.n;
//   let surname = person.s;
//   let age = person.a
//   console.log(name, surname, age);
// }
// Сделайте так, чтобы если какое-либо из значений отсутствует, то переменной присваивалось значение по умолчанию, т.е n = "Aibek",
// s = "Bekov", a = 99.
// Выведите в консоль n, s, a.

// function checkTask(person) {
//   let { name = "Aibek", surName = "Bekov", age = 99 } = person;
//   console.log(name, surName, age);
// }
// checkTask({});
