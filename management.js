function addElection() {
    let name = document.getElementById("electionName").value;
    let date = document.getElementById("electionDate").value;
    
    if (!name || !date) {
        alert("Please fill in all fields.");
        return;
    }
    
    let elections = JSON.parse(localStorage.getItem("elections")) || [];
    elections.push({ name, date });
    localStorage.setItem("elections", JSON.stringify(elections));
    displayElections();
}

function displayElections() {
    let elections = JSON.parse(localStorage.getItem("elections")) || [];
    let list = document.getElementById("electionList");
    list.innerHTML = "";
    
    elections.forEach((election, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${election.name} - ${election.date} <button class='btn' onclick='deleteElection(${index})'>Delete</button>`;
        list.appendChild(li);
    });
}

function deleteElection(index) {
    let elections = JSON.parse(localStorage.getItem("elections")) || [];
    elections.splice(index, 1);
    localStorage.setItem("elections", JSON.stringify(elections));
    displayElections();
}

displayElections();
