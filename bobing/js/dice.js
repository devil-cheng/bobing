var dicefun = {
	init:function(){
		var container = document.getElementById('dicebox');
		$('.redpacket').remove();
		var arr = this.randomFun();
		for (var i = 0 ; i<6;i++) {
			container.appendChild(this.createDice(arr[i]+1,i));
		}
	},
	randomFun:function(){
		var arr = [];
		for (var i = 0 ; i<6;i++ ) {
			arr.push(Math.floor(Math.random()*6));
		}
		return arr;
	},
	createDice:function(num,i){
		var image = document.createElement('img');
   		  	image.setAttribute("class","redpacket");
   		  	image.id = "redpacket" + i;
    	  	image.src = 'img/' + num +'.jpg';
    	  	return image;
	},
}
