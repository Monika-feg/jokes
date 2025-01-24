

const base_url = 'https://official-joke-api.appspot.com/random_joke';

let jokeButton = document.getElementById('jokeButton');

let jokeContainer = document.getElementById('jokeContainer');




    jokeButton.addEventListener('click', ()=>{
        fetch(base_url)
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          jokeContainer.innerHTML ='';

          //Visa skämt
          let joke = document.createElement('p');
          joke.innerText = data.setup;
          jokeContainer.appendChild(joke);

          //knapp för svar
          let anwerButton = document.createElement('button');
          anwerButton.textContent = 'Answer'
          jokeContainer.appendChild(anwerButton);


        
          //skapa och dölja svaret
          let answer = document.createElement('p');
          answer.innerText = data.punchline;
          answer.style.display = 'none';
          jokeContainer.appendChild(answer);

          
          
         anwerButton.addEventListener('click', ()=>{
            answer.style.display ='block';
            anwerButton.style.display = 'none';
        });
          

        })
        .catch(error => console.error('Error fetching joke:', error));

    })
  
   
