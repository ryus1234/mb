(function(){
  var rBtn = document.getElementById('headerRightButton');
  rBtn.addEventListener('click', function(e){
    console.log(e.target.innerText);
  });
  var lBtn = document.getElementById('headerLeftButton');
  lBtn.addEventListener('click', function(e){
    console.log(e.target.innerText);
  });
}).call(this);
