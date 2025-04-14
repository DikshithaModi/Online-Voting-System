function displayResults() {
    let votes = JSON.parse(localStorage.getItem("votes")) || {};
    let candidates = JSON.parse(localStorage.getItem("candidates")) || ["Candidate A", "Candidate B", "Candidate C"];
    let resultsDiv = document.getElementById("results");

    if (Object.keys(votes).length === 0) {
        resultsDiv.innerHTML = "<p>No votes have been cast yet.</p>";
        return;
    }

    let resultsHTML = "<ul>";
    let maxVotes = 0;
    let winners = [];

    candidates.forEach(candidate => {
        let candidateVotes = votes[candidate] || 0;
        resultsHTML += `<li>${candidate}: ${candidateVotes} votes</li>`;
        
        if (candidateVotes > maxVotes) {
            maxVotes = candidateVotes;
            winners = [candidate];
        } else if (candidateVotes === maxVotes) {
            winners.push(candidate);
        }
    });

    resultsHTML += `</ul><h3>Winner: ${winners.join(", ")}</h3>`;
    resultsDiv.innerHTML = resultsHTML;
}

displayResults();
