
    var dataSet = [
        [ "Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800" ],
        [ "Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750" ],
        [ "Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000" ],
        [ "Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060" ],
        [ "Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700" ],
        [ "Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000" ],
        [ "Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500" ],
        [ "Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900" ],
        [ "Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500" ],
        [ "Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600" ],
        [ "Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560" ],
        [ "Ajay Flynn", "Ajay Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],
        [ "Ajay Flynn", "Ajay Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],

        [ "Ajay Flynn", "Ajay Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],

        [ "Ajay Flynn", "Ajay Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ],

    ];
     var arr = [ "Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000" ];
     dataSet.push(arr);
     console.log("dataSet");

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
                { title: "Name" },
                { title: "Position" },
                { title: "Office" },
                { title: "Extn." },
                { title: "Start date" },
                { title: "Salary" }
            ]
        } );
    } );

