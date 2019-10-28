document.getElementById('animals').style.display = "none";
document.getElementById('profile').style.display = "none";

function mostrar($content){

    if ($content == "animals") {
      document.getElementById('animals').style.display='block';
      document.getElementById('profile').style.display = "none";
    }
    
    if ($content == "profile") {
      document.getElementById('profile').style.display='block';
      document.getElementById('animals').style.display = "none";
    }
}

function lightbox($action) {
  document.getElementById('light').style.display = "block";
  document.getElementById('fade').style.display = "block";
  
}


var url = "https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production/animals";

var api = new XMLHttpRequest();
api.open('GET',url);
api.send();

api.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    
    let animals = JSON.parse(this.responseText);
    console.log(animals);
    $list = document.getElementById('list');
    $list.innerHTML = '';
    $data = document.getElementById('data');
    
    for (let animal of animals) {
   
      list.innerHTML += '<button onclick="lightbox()" type="button" class="list-group-item list-group-item-action">'+'<span class="badge badge-info">Name: </span>&nbsp;'+ animal.animal_name + '&nbsp;<span class="badge badge-info">Kind:</span>&nbsp;'+animal.animal_kind + '&nbsp;<span class="badge badge-info">Age:</span>&nbsp;' + animal.animal_age + '&nbsp;<span class="badge badge-info">Entry date:</span>&nbsp;'+ animal.entry_date +'</button>';
      data.innerHTML = '<img src="'+animal.animal_picture+'" class="photo">';
    }
    
  }
}


var form_profile = document.getElementById('form_profile');
form_profile.addEventListener('submit',function (e) {
  e.preventDefault();
  var data = new FormData(form_profile);
  fetch('https://eyavqewaud.execute-api.ap-northeast-1.amazonaws.com/production',{
    method: 'POST',
    body: data
  })
  
})