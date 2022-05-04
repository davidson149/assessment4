let goat={
    sport:'football',
    firstName:'tom',
    lastName:'brady',
    rings:'six rings'
  }
  let goatUpdated ={
    rings:'seven rings'
  }
  const newGoatButton=document.getElementById('updatedGoat')
  newGoatButton.addEventListener('click',()=>{

      axios.put("http://localhost:4000/api/goat",goatUpdated)
      .then(function(response){
          alert(response.data)
        })
    })
  const goatButton= document.getElementById('goat')
  goatButton.addEventListener("click",()=>{
    axios.post("http://localhost:4000/api/goat/",{
        firstName : 'Tom',
        lastName : 'Brady',
        sport : 'Football',
        rings: 'six rings'
      })
      .then(function(response){
        alert(response.data);
      });
  })
  document.getElementById("complimentButton").onclick = function () {
    axios.get("http://localhost:4000/api/compliment/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById("fortuneButton").onclick = function () {
    axios.get("http://localhost:4000/api/fortune/")
        .then(function (response) {
          const data = response.data;
          alert(data);
        });
  };
  document.getElementById('delete').onclick= function(){
    axios.delete("http://localhost:4000/api/goat")
    .then(function(response){
      alert(response.data)
    })
  }