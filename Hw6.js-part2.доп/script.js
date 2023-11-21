let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
];

let filteredUsers = users.filter(user => user.id > 1);

console.log(filteredUsers);
