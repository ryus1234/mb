(function(){
  var rBtn = document.getElementById('headerRightButton');
  rBtn.addEventListener('click', function(e){
    console.log(e.target.innerText);
  });
  var lBtn = document.getElementById('headerLeftButton');
  lBtn.addEventListener('click', function(e){
    console.log(e.target.innerText);
  });
  $(document).on("scroll",function(e){
	   parallax();
	});

	function parallax(){
	   var scrolled = $(window).scrollTop();
	   $('.kv-parallax').css('top',(scrolled*0.1)+'px');
	}
}).call(this);
