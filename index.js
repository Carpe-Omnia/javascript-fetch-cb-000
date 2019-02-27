const token = 'not putting this in a public place';
fetch('https://api.github.com/Carpe-Omnia/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
