let url = "http://api.football-data.org/v2/competitions/2002/teams";
let urlMatches = "https://api.football-data.org/v4/competitions/CL/matches";

fetch(url, {
    headers: {
        "x-auth-token": "819babcd7902454f930c154272296d78"
    }
})
.then(respone => respone.json())
.then(function (data) {
    let html="";
    data.teams.forEach(element => {
        html += "<li>" + element.name + "</li>";
        //console.log(element);
    });
    document.getElementById("teamList").innerHTML += html;
});