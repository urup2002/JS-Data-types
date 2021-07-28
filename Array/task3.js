// Каков результат? Почему?

let arr = ["a", "b"];
arr.push(function() {
  alert( this );
})
arr[2](); // вывод [a, b, f], т.к. функция arr получает в качестве this сам объект arr