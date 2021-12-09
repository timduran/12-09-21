console.log('ping')

axios.get('/dog')
  .then(res => {
    const dog = res.data

    document.getElementById('dog').innerHTML = `
      <h1>${dog.name}</h1>
      <h2>${dog.age}</h2>
      <h3>${dog.breed}</h3>
    `
  })
  .catch(err => console.error(err))
