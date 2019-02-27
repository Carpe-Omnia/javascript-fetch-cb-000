const token = 'a768bfd7cbd7b8f78dd1e346ad4285f3121c4b5a';
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));
  