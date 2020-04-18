var dragging = false;
var myBox = document.querySelector('.draggableBox');
var snooybox = document.querySelector('.snooybox');
var canBeDragged = true;

function getPositionAtCenter(element) {
   	const {top, left, width, height} = element.getBoundingClientRect();
   	return {
		x: left + width / 2,
		y: top + height / 2
	};
}

function move(e)
{
	// console.log(dragging);
	if (dragging == true)
	{
		// console.log(myBox.offsetWidth/2);
		myBox.style = "margin-left: "+(e.clientX-(myBox.offsetWidth/2))+"px; margin-top: "+(e.clientY-(myBox.offsetHeight/2))+"px;";
	}
}

function endMove(e)
{
	dragging = false;
	if (e.target == myBox)
	{
		var rect1 = e.target.getBoundingClientRect();
		var rect2 = snooybox.getBoundingClientRect();

		if (rect1.left >= rect2.left && rect1.left <= rect2.left+200)
		{
			if (rect1.top >= rect2.top && rect1.top <= rect2.top+100)
			{
				canBeDragged = false;
				var h1 = document.querySelector('#myh1');
				h1.style = "display: inline;";
				h1.innerHTML = "Woo! You did it!";
			}
		}

		else
		{
			console.log("not close enough");
		}
		
	}
}

myBox.addEventListener('mousemove', move);

myBox.addEventListener('mouseup', endMove);
myBox.addEventListener('mouseout', endMove);

myBox.addEventListener('mousedown', function(e) {
		if (canBeDragged == true)
		{
			dragging = true;
		}		
	});