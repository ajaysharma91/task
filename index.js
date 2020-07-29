
    var dataSet = [
        [ "Tiger Nixon", "System Architect", "Edinburgh", "2011/04/25" ],
        [ "Tiger Nixon", "System Architect", "Edinburgh", "2011/04/25" ],
        [ "Tiger Nixon", "System Architect", "Edinburgh", "2011/04/25" ],
        [ "Tiger Nixon", "System Architect", "Edinburgh", "2011/04/25" ],

    ];
    //  var arr = [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ];
    //  dataSet.push(arr);
     console.log("dataSet");
     let arr=[];
     let title;
     let type;
     let associate;
     let assignTo;
     let queue;
     let date;
     let time;
     console.log(arr[0]);

    function submitForm(event) {
        // e.preventDefault();
        title = event.target.elements.title.value;
        type = event.target.elements.type.value;
        associate = event.target.elements.title.value;
        assignTo = event.target.elements.assign.value;
        queue = event.target.elements.queue.value;
        date = event.target.elements.date.value;
        time = event.target.elements.time.value;
        let dueDate = date +" "+time;
        //dataSet.push(dueDate);
         return false;
       }
    $(document).ready(function() {
        $('#example').DataTable( {
            data: dataSet,
            // "lengthMenu": [
            //     [10, 25, 50, 100, -1],
            //     [10, 25, 50, 100, "All"]
            //   ],
            //   "scrollY": "200px",
            //   "dom": 'rtipS',
              // searching: false,
              "deferRender": true,
              initComplete: function() {
                var column = this.api().column(0);
          
                var select = $('<select class="filter"></select>')
                  .appendTo('#selectTriggerFilter')
                  .on('change', function() {
                    var val = $(this).val();
                    column.search(val ? '^' + $(this).val() + '$' : val, true, false).draw();
                  });
          
                column.data().unique().sort().each(function(d, j) {
                  select.append('<option value="' + d + '">' + d + '</option>');
                });
              },
            columns: [
                { title: "Title" },
                { title: "Type" },
                { title: "Associate with-" },
                { title: "DueDate" }
                
            ]
        } );
    } );

    $(document).ready(function(){
      var date_input=$('input[name="date"]'); //our date input has the name "date"
      var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
      date_input.datepicker({
          format: 'mm/dd/yyyy',
          container: container,
          todayHighlight: true,
          autoclose: true,
      })
  })

  function openNav() {
    document.getElementById("mySidenav").style.width = "370px";
    document.getElementById("main").style.marginRight = "370px";
    document.getElementById("main1").style.marginRight = "370px";
  
    document.body.style.backgroundColor = "white";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
  }
  
    
  //     $(function() {
  //   $('#title').on('input', function() {
  //     this.value = this.value.match(/^[A-Za-z][A-Za-z0-9 -]*$/, '');
  //   });
  // });
  
  