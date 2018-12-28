var breathe_in_databse=[
    {"data":document.getElementById('in15').name,
    "id":in15},
    {"data":document.getElementById('in10').name,
    "id":in10},
    {"data":document.getElementById('in7').name,
    "id":in7},
    {"data":document.getElementById('in9').name,
    "id":in9},
    {"data":document.getElementById('in11').name,
    "id":in11}
    ];
    console.log(breathe_in_databse);
    localStorage.setItem('in',JSON.stringify(breathe_in_databse));
    
    var database_in=[
    {"data":document.getElementById('in1').name,
    "id":in1},
     {"data":document.getElementById('in2').name,
    "id":in2},
     {"data":document.getElementById('in3').name,
     "id":in3},
     {"data":document.getElementById('in4').name,
    "id":in4},
     {"data":document.getElementById('in5').name,
    "id":in5},
     {"data":document.getElementById('in6').name,
    "id":in6},
     {"data":document.getElementById('in7').name,
    "id":in7},
     {"data":document.getElementById('in8').name,
    "id":in8},
     {"data":document.getElementById('in9').name,
    "id":in9},
     {"data":document.getElementById('in10').name,
    "id":in10},
     {"data":document.getElementById('in11').name,
    "id":in11},
     {"data":document.getElementById('in12').name,
    "id":in12},
     {"data":document.getElementById('in13').name,
     "id":in13},
     {"data":document.getElementById('in14').name,
    "id":in14},
     {"data":document.getElementById('in15').name,
    "id":in15},
     {"data":document.getElementById('in16').name,
    "id":in16}
    ];
    
    console.log(database_in);
    localStorage.setItem('in_database',JSON.stringify(database_in));
    var selected_answers_array = [];
    var no_of_correct_answers = 0;
    var total = breathe_in_databse.length;
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
        if(selected_answers_array.length == breathe_in_databse.length)
     {
       alert('You have already selected' +breathe_in_databse.length+ '.Click on next to continue');
        return;
     }
        selected_answers_array.push(temp);
        console.log(selected_answers_array); 
        localStorage.setItem('selected',selected_answers_array);
    }
    
    function next()
    {
      if(selected_answers_array.length != breathe_in_databse.length)
      {
        return;
      }
      for(var i = 0 ; i < selected_answers_array.length ; i++){
        for( var j = 0 ; j < breathe_in_databse.length ; j++)      {
          if(selected_answers_array[i].localeCompare(breathe_in_databse[j].data) == 0){
            no_of_correct_answers++;
            localStorage.setItem('correct_in',no_of_correct_answers);
            percent = (no_of_correct_answers*100/total)+'%';
            localStorage.setItem('percentage_in',percent);
          }
        }
      }    
    }  











    