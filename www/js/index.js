"use strict"; // needed for mobile browser

let pages = []; // used to store all our screens/pages
let links = []; // used to store all our navigation links

if(document.deviceready){
    
    document.addEventListener('deviceready', onDeviceReady);
}
else{
    
    document.addEventListener('DOMContentLoaded', onDeviceReady);
}

// Main Initialization
function onDeviceReady(){
    
    console.log("Ready!");
    
    serverData.getJSON();
    
    pages = document.querySelectorAll('[data-role="page"]');
    links = document.querySelectorAll('[data-role="nav"] a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener("click", navigate);
    }
}

function navigate(ev) {
    ev.preventDefault();
    let link = ev.currentTarget;
    console.log(link);
    // split a string into an array of substrings using # as the seperator
    let id = link.href.split("#")[1]; // get the href page name
    console.log(id);
    //update what is shown in the location bar
    history.replaceState({}, "", link.href);
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].id == id) {
            pages[i].classList.add("active");
        }
        else {
            pages[i].classList.remove("active");
        }
    }
}

function standingsData(data) {
    
    var hufflePuffWins = 0;
    var hufflePuffLoss = 0;
    var hufflePuffTies = 0;
    
    var gryffindorWins = 0;
    var gryffindorLoss = 0;
    var gryffindorTies = 0;
    
    var slytherinWins = 0;
    var slytherinLoss = 0;
    var slytherinTies = 0;
    
    var ravenclawWins = 0;
    var ravenclawLoss = 0;
    var ravenclawTies = 0;
    
    data.scores.forEach(function(value){
        
        value.games.forEach(function(item){
        
            let homeTeam = getTeamName(data.teams, item.home);
            let awayTeam = getTeamName(data.teams, item.away);
            let homeScore = item.home_score;
            let awayScore = item.away_score;
            
            console.log(homeTeam + ": " + homeScore);
            console.log(awayTeam + ": " + awayScore);
            
            if(homeTeam == "Hufflepuff"){
                if(homeScore > awayScore){
                    hufflePuffWins += 1;
                }
                else if(homeScore == awayScore){
                    hufflePuffTies += 1;
                }
                else{
                    hufflePuffLoss += 1;
                }
            }
            if(awayTeam == "Hufflepuff"){
                if(awayScore > homeScore){
                    hufflePuffWins += 1;
                }
                else if(awayScore == homeScore){
                    hufflePuffTies += 1;
                }
                else{
                    hufflePuffLoss += 1;
                }
            }
            if(homeTeam == "Gryffindor"){
                if(homeScore > awayScore){
                    gryffindorWins += 1;
                }
                else if(homeScore == awayScore){
                    gryffindorTies += 1;
                }
                else{
                    gryffindorLoss += 1;
                }
            }
            if(awayTeam == "Gryffindor"){
                if(awayScore > homeScore){
                    gryffindorWins += 1;
                }
                else if(awayScore == homeScore){
                    gryffindorTies += 1;
                }
                else{
                    gryffindorLoss += 1;
                }
            }
            if(homeTeam == "Slytherin"){
                if(homeScore > awayScore){
                    slytherinWins += 1;
                }
                else if(homeScore == awayScore){
                    slytherinTies += 1;
                }
                else{
                    slytherinLoss += 1;
                }
            }
            if(awayTeam == "Slytherin"){
                if(awayScore > homeScore){
                    slytherinWins += 1;
                }
                else if(awayScore == homeScore){
                    slytherinTies += 1;
                }
                else{
                    slytherinLoss += 1;
                }
            }
            if(homeTeam == "Ravenclaw"){
                if(homeScore > awayScore){
                    ravenclawWins += 1;
                }
                else if(homeScore == awayScore){
                    ravenclawTies += 1;
                }
                else{
                    ravenclawLoss += 1;
                }
            }
            if(awayTeam == "Ravenclaw"){
                if(awayScore > homeScore){
                    ravenclawWins += 1;
                }
                else if(awayScore == homeScore){
                    ravenclawTies += 1;
                }
                else{
                    ravenclawLoss += 1;
                }
            }
        });
    });
    
    console.log("hufflepuffwins: " + hufflePuffWins);
    console.log("hufflepuffloss: " + hufflePuffLoss);
    console.log("hufflepuffties: " + hufflePuffTies);
    
    console.log("gryfwins: " + gryffindorWins);
    console.log("gryfloss: " + gryffindorLoss);
    console.log("gryfties: " + gryffindorTies);
    
    console.log("slyfwins: " + slytherinWins);
    console.log("slyfloss: " + slytherinLoss);
    console.log("slyfties: " + slytherinTies);
    
    console.log("ravenwins: " + ravenclawWins);
    console.log("ravenloss: " + ravenclawLoss);
    console.log("raventies: " + ravenclawTies);
    
    let tbody = document.querySelector("#teamStandings tbody");
    
    let points1 = (gryffindorWins * 3) + gryffindorTies;
    let name1 = "Gryffindor";
    
    let tr = document.createElement("tr");
    let tdn = document.createElement("td");
    let nameG = document.createElement("p");
    nameG.textContent = name1;
    let tdw = document.createElement("td");
    tdw.textContent = gryffindorWins;
    let tdl = document.createElement("td");
    tdl.textContent = gryffindorLoss;
    let tdt = document.createElement("td");
    tdt.textContent = gryffindorTies;
    let tdp = document.createElement("td");
    tdp.textContent = points1;
    tr.appendChild(tdn);

    var logo = document.createElement("object");
    logo.setAttribute("data", "img/logoG.svg");
    logo.setAttribute("type", "image/svg+xml");
    tdn.appendChild(logo);
    
    tdn.appendChild(nameG);
    tr.appendChild(tdw);
    tr.appendChild(tdl);
    tr.appendChild(tdt);
    tr.appendChild(tdp);
    tbody.appendChild(tr);
    
    let points2 = (slytherinWins * 3) + slytherinTies;
    let name2 = "Slytherin";
    
    let tr2 = document.createElement("tr");
    let tdn2 = document.createElement("td");    
    let nameS = document.createElement("p");
    nameS.textContent = name2;
    let tdw2 = document.createElement("td");
    tdw2.textContent = slytherinWins;
    let tdl2 = document.createElement("td");
    tdl2.textContent = slytherinLoss;
    let tdt2 = document.createElement("td");
    tdt2.textContent = slytherinTies;
    let tdp2 = document.createElement("td");
    tdp2.textContent = points2;
    tr2.appendChild(tdn2);
    
    var logo = document.createElement("object");
    logo.setAttribute("data", "img/logoS.svg");
    logo.setAttribute("type", "image/svg+xml");
    tdn2.appendChild(logo);
    
    tdn2.appendChild(nameS);
    tr2.appendChild(tdw2);
    tr2.appendChild(tdl2);
    tr2.appendChild(tdt2);
    tr2.appendChild(tdp2);
    tbody.appendChild(tr2);
    
    let points3 = (ravenclawWins * 3) + ravenclawTies;
    let name3 = "Ravenclaw";
    
    let tr3 = document.createElement("tr");
    let tdn3 = document.createElement("td");
    let nameR = document.createElement("p");
    nameR.textContent = name3;
    let tdw3 = document.createElement("td");
    tdw3.textContent = ravenclawWins;
    let tdl3 = document.createElement("td");
    tdl3.textContent = ravenclawLoss;
    let tdt3 = document.createElement("td");
    tdt3.textContent = ravenclawTies;
    let tdp3 = document.createElement("td");
    tdp3.textContent = points3;
    tr3.appendChild(tdn3);

    var logo = document.createElement("object");
    logo.setAttribute("data", "img/logoR.svg");
    logo.setAttribute("type", "image/svg+xml");
    tdn3.appendChild(logo);
    tdn3.appendChild(nameR);

    tr3.appendChild(tdw3);
    tr3.appendChild(tdl3);
    tr3.appendChild(tdt3);
    tr3.appendChild(tdp3);
    tbody.appendChild(tr3);
    
    let points4 = (hufflePuffWins * 3) + hufflePuffTies;
    let name4 = "Hufflepuff";
    
    let tr4 = document.createElement("tr");
    let tdn4 = document.createElement("td");    
    let nameH = document.createElement("p");
    nameH.textContent = name4;
    let tdw4 = document.createElement("td");
    tdw4.textContent = hufflePuffWins;
    let tdl4 = document.createElement("td");
    tdl4.textContent = hufflePuffLoss;
    let tdt4 = document.createElement("td");
    tdt4.textContent = hufflePuffTies;
    let tdp4 = document.createElement("td");
    tdp4.textContent = points4;
    tr4.appendChild(tdn4);

    var logo = document.createElement("object");
    logo.setAttribute("data", "img/logoH.svg");
    logo.setAttribute("type", "image/svg+xml");
    tdn4.appendChild(logo);
    tdn4.appendChild(nameH);
    
    tr4.appendChild(tdw4);
    tr4.appendChild(tdl4);
    tr4.appendChild(tdt4);
    tr4.appendChild(tdp4);
    tbody.appendChild(tr4);
}

let serverData = {
    url: "https://griffis.edumedia.ca/mad9014/sports/basketball.php",
    httpRequest: "GET",
    getJSON: function () {
        
        // Add headers and options objects
        // Create an empty Request Headers instance
        let headers = new Headers();

        // Add a header(s)
        // key value pairs sent to the server

        headers.append("Content-Type", "text/plain");
        headers.append("Accept", "application/json; charset=utf-8");
        
        // simply show them in the console
        console.dir("headers: " + headers.get("Content-Type"));
        console.dir("headers: " + headers.get("Accept"));
        
        // Now the best way to get this data all together is to use an options object:
        
         // Create an options object
        let options = {
            method: serverData.httpRequest,
            mode: "cors",
            headers: headers
        };
        
        // Create an request object so everything we need is in one package
        let request = new Request(serverData.url, options);
        console.log(request);
           
        fetch(request)
            .then(function (response) {

                console.log(response);
                return response.json();
            })
            .then(function (data) {
                console.log(data); // now we have JS data, let's display it

                // Call a function that uses the data we recieved  
                displayData(data);
                standingsData(data);
            })
            .catch(function (err) {
                alert("Error: " + err.message);
            });
    }
};

function displayData(data) {
  
    console.log(data);
    
    localStorage.setItem("scores", JSON.stringify(data));
    
    var myScoreData = JSON.parse(localStorage.getItem("scores"));
    console.log("From LS: ");
    console.log(myScoreData);
    
    console.log(data.teams);
    console.log(data.scores);
    
    let ul = document.querySelector(".results_list");
    ul.innerHTML = "";
    
    data.scores.forEach(function(value){
        
        let li = document.createElement("li");
        li.className = "score";
        
        let h3 = document.createElement("h3");
        h3.textContent = value.date;
        
        let homeTeam = null;
        let awayTeam = null;
        
        ul.appendChild(li);
        ul.appendChild(h3);
        
        value.games.forEach(function(item){
            
            homeTeam = getTeamName(data.teams, item.home);
            awayTeam = getTeamName(data.teams, item.away);
            
            let dg = document.createElement("div");
            
            let home = document.createElement("p");
            home.innerHTML = homeTeam + " " + "<b>" + 
                item.home_score + "</b>" + "<br>";
            
            let away = document.createElement("p");
            away.innerHTML = awayTeam + " " + "<b>" +
                item.away_score + "</b>";
            
            dg.appendChild(home);
            dg.appendChild(away);
            ul.appendChild(dg);
        });
    });
}

function getTeamName(teams, id){
    
    for(let i = 0; i < teams.length; i++){
        
        if(teams[i].id == id){
            
            return teams[i].name;
        }
    }
    
    return "unknown";
}