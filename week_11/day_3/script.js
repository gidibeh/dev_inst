const getDataFromServer = () => {
  fetch('http://localhost:3000/')
  .then(res => res.json())
  .then(data => showData(data))
  .catch(err => console.log(err))
}
​
const showData = (data) => {
  const root = document.getElementById('root');
  const h1 = document.createElement('h1');
  h1.innerText = data.name;
  const h2 = document.createElement('h2');
  h2.innerText = data.username;
  root.appendChild(h1);
  root.appendChild(h2);
}
​
const fetchData = () => {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  const data = {
    user:u,
    pass:p
  }
  fetch('http://localhost:3000/login',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}