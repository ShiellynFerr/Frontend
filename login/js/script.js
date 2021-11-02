const init = () =>{
   const inputEmail = document.querySelector ('input[type="email"]');
   const inputSenha = document.querySelector ('input[type="password"]');
   const submitButton = document.querySelector ('.login_submit');

if (submitButton) {
    submitButton.addEventListener('click' ,(event) => {
      event.preventDefault();  

      fetch('https://reqres.in/api/login', {
          method:'POST',
          headers:{
              'Content-Type': 'application/json'

          },
          body:JSON.stringify ({
              email:inputEmail.value,
              password:inputSenha.value,
          }).then(( response) =>{
              return response.json ()

          }).then ((data) =>{
              console.log (data)
          })
      })
    })
  
}

}
   window.onload = init;