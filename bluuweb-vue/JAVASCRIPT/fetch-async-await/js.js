console.log('iniciando....');

fetch('json.json')
    .then(res=>res.json())
    .then(j=>console.log(j));

    console.log('-----------------------------------')

    async function getUserAsync(name) 
    {
      let response = await fetch(`https://api.github.com/users/${name}`);
      let data = await response.json()
      return data;
    }
    
    getUserAsync('sergio-balanda')
      .then(data => console.log(data)); 
      console.log('-----------------------------------')


      const load = async _ =>{
          const myResponse = await fetch('json.json');
          const payload = await myResponse.json();
          console.log("si le saco el segundo await va a quedar como pendiente ",payload);
          
      }
      load();
