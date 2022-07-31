export const getData = () => fetch("http://d.zaix.ru/uIYI.txt")
  .then(response => response.json())