var breathe_out_database=[
    {"data":document.getElementById('out15').name,
    "id":out15},
    {"data":document.getElementById('out10').name,
    "id":out10},
    {"data":document.getElementById('out7').name,
    "id":out7},
    {"data":document.getElementById('out9').name,
    "id":out9},
    {"data":document.getElementById('out11').name,
    "id":out11}
    ];
    console.log(breathe_out_database);
    localStorage.setItem('out',JSON.stringify(breathe_out_database));
    
    var database_out=[
    {"data":document.getElementById('out1').name,
    "id":out1},
     {"data":document.getElementById('out2').name,
    "id":out2},
     {"data":document.getElementById('out3').name,
     "id":out3},
     {"data":document.getElementById('out4').name,
    "id":out4},
     {"data":document.getElementById('out5').name,
    "id":out5},
     {"data":document.getElementById('out6').name,
    "id":out6},
     {"data":document.getElementById('out7').name,
    "id":out7},
     {"data":document.getElementById('out8').name,
    "id":out8},
     {"data":document.getElementById('out9').name,
    "id":out9},
     {"data":document.getElementById('out10').name,
    "id":out10},
     {"data":document.getElementById('out11').name,
    "id":out11},
     {"data":document.getElementById('out12').name,
    "id":out12},
     {"data":document.getElementById('out13').name,
     "id":out13},
     {"data":document.getElementById('out14').name,
    "id":out14},
     {"data":document.getElementById('out15').name,
    "id":out15},
     {"data":document.getElementById('out16').name,
    "id":out16}
    ];
    
    console.log(database_out);
    localStorage.setItem('out_database',JSON.stringify(database_out));
    var selected_answers_array = [];
	var no_of_correct_answers = 0;
	var total = breathe_out_database.length;
    function store(clicked_id)
    {
        var temp=document.getElementById(clicked_id).getAttribute("name");
        for(var i = 0 ; i < selected_answers_array.length ; i++)
        {
          if(selected_answers_array[i].localeCompare(temp) == 0) 
          {
             selected_answers_array.splice(i, 1);
             return;
          }
        }
        if(selected_answers_array.length == breathe_out_database.length)
     {
		alert('You have already selected' +breathe_out_database.length+ '.Click on done to continue');
        return;
     }
        selected_answers_array.push(temp);
        console.log(selected_answers_array); 
        localStorage.setItem('selected',selected_answers_array);
    }
    
    function done()
    {
	  if(selected_answers_array.length != breathe_out_database.length)
	  {
        return;
      }
	  for(var i = 0 ; i < selected_answers_array.length ; i++)
	  {
		for( var j = 0 ; j < breathe_out_database.length ; j++)  
		    {
		  if(selected_answers_array[i].localeCompare(breathe_out_database[j].data) == 0)
		  {
            no_of_correct_answers++;
            localStorage.setItem('correct_out',no_of_correct_answers);
            percent = (no_of_correct_answers*100/total) +'%';
            localStorage.setItem('percentage_out',percent);
          }
        }
      }    
    }  
