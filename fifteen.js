var firstArray = new Array (15);
firstArray[0] = "./firstarray/one.jpeg";
firstArray[1] = "./firstarray/two.jpeg";
firstArray[2] = "./firstarray/three.jpeg";
firstArray[3] = "./firstarray/four.jpeg";
firstArray[4] = "./firstarray/five.jpeg";
firstArray[5] = "./firstarray/six.jpeg";
firstArray[6] = "./firstarray/seven.jpeg";
firstArray[7] = "./firstarray/eight.jpeg";
firstArray[8] = "./firstarray/nine.jpeg";
firstArray[9] = "./firstarray/ten.jpeg";
firstArray[10] = "./firstarray/eleven.jpeg";
firstArray[11] = "./firstarray/twelve.jpeg";
firstArray[12] = "./firstarray/thirteen.jpeg";
firstArray[13] = "./firstarray/fourteen.jpeg";
firstArray[14] = "./firstarray/fifteen.jpeg";
firstArray[15]="";
var whichImage=0;
var secondArray = firstArray.slice(0,12);
var thirdArray = firstArray.slice(0,8);
var tot;
var imgs = document.getElementsByTagName('img'), i=0;
var tdata = document.getElementsByTagName('td');
var imagesFlipped = 0;
var memoryValues = [];
var form1 = document.getElementById('form1');
var elm = document.getElementById("animated");
        var stopped;
        var requestId = 0;
        var starttime;
var tries = 0;

function chooseImage(array)
{
	var output = '';
	whichImage = Math.floor(Math.random()*array.length);
	output = array[whichImage];
	array.splice(whichImage,1);
	return output;
}

function init(array, columns, number)
{
	 var table = document.createElement('table'), i, 
        tbody = table.appendChild(document.createElement('tbody')),
       tr, tot;
        for (i=0, tot=array.length-1; i<=tot; i++) 
		{
            if( i % columns === 0) tr = tbody.appendChild(document.createElement('tr'));
            tr.appendChild(document.createElement('td'))
              .appendChild(document.createElement('img'))
              .src = array[i];
			  
        }	
        document.body.appendChild(table);
}

function assignCellValues(array, columns, number)
{
	 var table = document.createElement('table'), i, 
        tbody = table.appendChild(document.createElement('tbody')),
       tr, tot;
        for (i=0, tot=array.length-1; i<=tot; i++) 
		{
            if( i % columns === 0) tr = tbody.appendChild(document.createElement('tr'));
            tr.appendChild(document.createElement('td'))
              .appendChild(document.createElement('img'))
              .src = chooseImage(array);
			  
        }	
        document.body.appendChild(table);
		tableClick(table, 32);
			
}
function tableClick(table, time)
{
	 if (table !== null) 
		 {
				if(time>=0)
				{
				for (i = 0; i < table.rows.length; i++) 
				{
					for (var j = 0; j < table.rows[i].cells.length; j++)
						table.rows[i].cells[j].onclick = function () 
					{				
					flipPic(this.getElementsByTagName("img")[0]); 
					tableClick(table, --time);
					return;
					};
				}
				}
			
        }
}
 function getval(cel) {
            alert(cel.innerHTML);
        }

function levelSelect()
{
	init(firstArray, 4, 16);
	var selection = document.getElementById("levelselect");
	var selValue = selection.options[selection.selectedIndex].value;
	var easy = document.getElementById("easy");
	var medium = document.getElementById("medium");
	var hard = document.getElementById("hard");
	
	
	if (selValue == "level1")
	{
		assignCellValues(thirdArray,4,8);
		/*if (easy.checked == true)
		{
			setTableTimer(1000);
		}
		else
		if (medium.checked == true)
		{
			setTableTimer(400);
		}
		else
		if (hard.checked == true)
		{
			setTableTimer(200);
		}*/
		setTableTimer2(120000);
		countdown(2);
		return false;
	}
	else if (selValue == "level2")
	{
		assignCellValues(secondArray,4,12);
		/*if (easy.checked == true)
		{
			setTableTimer(1000);
		}
		else
		if (medium.checked == true)
		{
			setTableTimer(400);
		}
		else
		if (hard.checked == true)
		{
			setTableTimer(200);
		}*/
		setTableTimer2(180000);
		countdown(3);
		return false;
	}
	else if (selValue == "level3")
	{
		assignCellValues(firstArray,4,16);
		/*if (easy.checked == true)
		{
			setTableTimer(1000);
		}
		else
		if (medium.checked == true)
		{
			setTableTimer(400);
		}
		else
		if (hard.checked == true)
		{
			setTableTimer(200);
		}*/
		setTableTimer2(240000);
		countdown(4);
		return false;
	}
	return true;
}

/*function setTableTimer(secs)
{
	var x = document.getElementsByTagName('img'), i=0;
	setInterval(function(){
		x[i].style.visibility="hidden";
		i++;
	}, secs);
}*/

function setTableTimer2(secs)
{
	var x = document.getElementsByTagName('table'), i=0;
	setInterval(function(){
		x[i].style.visibility="hidden";
		i++;
	}, secs);
}

function ChangeParent(sourceElement, targetElement) 
		{
            //var sourceElementParent = sourceElement.parentNode;
            //sourceElementParent.removeChild(sourceElement);
			
            //targetElement.appendChild(sourceElement);
			targetElement.setAttribute('src',sourceElement.getAttribute('src'));
			sourceElement.setAttribute('src','');
        }

function flipPic(d)
{
            var cell = d.parentNode;
            var row = cell.parentNode;
            var ri = row.rowIndex;
            var ci = cell.cellIndex;
            var emptycell = null;
			var tbl = row.parentNode;
			//alert(tbl.rows[ri].cells[ci].childNodes[0].getAttribute('src'));
			//alert(tbl.rows[ri].cells[ci].childNodes[0]);

            if (ci-1 >= 0) 
			{
                if (tbl.rows[ri].cells[ci-1].childNodes[0].getAttribute('src') == "") 
				{ 
					//alert(tbl.rows[ri].cells[ci-1].innerHTML);
					emptycell = tbl.rows[ri].cells[ci-1].childNodes[0]; 
					ChangeParent(d, emptycell);
				}
            }
            if (ci + 1 <4) 
			{
                if (tbl.rows[ri].cells[ci+1].childNodes[0].getAttribute('src') == "") 
				{ 
					//alert(tbl.rows[ri].cells[ci+1].innerHTML);
					emptycell = tbl.rows[ri].cells[ci+1].childNodes[0];
					ChangeParent(d, emptycell);
				}
            }
            if (ri-1 > 0) 
			{
                if (tbl.rows[ri-1].cells[ci].childNodes[0].getAttribute('src') == "") 
				{ 
					//alert(tbl.rows[ri - 1].cells[ci].innerHTML);
					emptycell = tbl.rows[ri-1].cells[ci].childNodes[0]; 
					ChangeParent(d, emptycell);
				}
            }
            if (ri+1<4) 
			{
                if (tbl.rows[ri+1].cells[ci].childNodes[0].getAttribute('src') == "") 
				{ 
					//alert(tbl.rows[ri + 1].cells[ci].innerHTML);
					emptycell = tbl.rows[ri+1].cells[ci].childNodes[0]; 
					ChangeParent(d, emptycell);
				}
            }
			//alert(emptycell);
               // ChangeParent(d, emptycell);
                moves++;
              //  document.getElementById("moves").innerHTML = moves;
            //  IsInOrder(d);
}

function IsInOrder(d) {
		 var cell = d.parentNode;
            var row = cell.parentNode;
    		var tbl = row.parentNode;
			var rows = document.getElementsByTagName("tr");
			var cells = document.getElementsByTagName("td");
            var inorder = true;
            for (var i = 0; i < cells.length - 1; i++) {
                var n = parseInt(trim(cells[i].innerHTML));
                var n1 = parseInt(trim(cells[i + 1].innerHTML));
                if (n + 1 != n1) {
                    inorder = false;
                    break;
                }
            }
            if (inorder && (tbl.rows[tbl.rows.length - 1].cells[cell - 1].innerHTML == " ")) {
                for (i = 0; i < cells.length; i++) {
                    cells[i].style.backgroundColor = "#FFFFCC";
                }
                alert("Perfect! It took you " + moves + " moves to solve it.");
            }
        }

	 function RemoveHighlight(did) {
            var d = document.getElementById(did);
            d.style.backgroundColor = "#CCFFFF";
            d.style.color = "#0099FF";
        }
		
            


function render(time) 
{
          if (!stopped) 
		  {
            elm.style.left = ((Date.now() - starttime) / 4 % 600) + "px";
            requestId = window.requestAnimationFrame(render);
            }
}

        function start() 
		{
            starttime = Date.now();
            requestId = window.requestAnimationFrame(render);
            stopped = false;
        }
        function stop() 
		{
            if (requestId) 
			{
                window.cancelAnimationFrame(requestId);
            }
            stopped = true;
        }
		
		function reFresh() 
		{
		location.reload(true);
		}
		
		
function countdown(minutes) 
{
    var seconds = 60;
    var mins = minutes;
    function tick() 
	{
        var counter = document.getElementById("timer");
        var current_minutes = mins-1;
        seconds--;
        counter.innerHTML =
		current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) 
		{
            setTimeout(tick, 1000);
        } else 
		{
 
            if(mins > 1)
			{setTimeout(function () 
			{ countdown(mins - 1); 
			}, 1000);
 
            }
        }
    }
    tick();
}










