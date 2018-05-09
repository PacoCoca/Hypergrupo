// variable to simulate we're receiving the data from a database
var services = [
    // number of people
    // Name      image       description
    ["Canteen", "../assests/img/canteen.jpg", "A brief description"],
    ["Cafe", "../assests/img/cafe.jpg", "A brief description"],
    ["Parking", "../assests/img/parking.jpg", "A brief description"],
    ["Rehabilitation", "../assests/img/rehabilitation.jpg", "A brief description"],
    ["Playroom", "../assests/img/playroom.jpg", "A brief description"],
    ["Education", "../assests/img/education.jpg", "A brief description"]
    ];
    
    $(document).ready(function(){
        loadServiceDescription(1);
    });
    
    
    function getQueryVariable() {
        var query = document.URL;
        var vars = query.split("=");
        return vars[1];
    }
    
    function loadServiceDescription(index){
        document.getElementById("serviceTittle").innerHTML= getQueryVariable();
        var current = services;
        for(var i=0; i < services.length; i++)
        {
            if(getQueryVariable()==services[i][0])
            {
                document.getElementById("serviceDescription").innerHTML= services[i][2];   
                document.getElementById("serviceImage").src=services[i][1];
            }
        }
    }
    
    
        