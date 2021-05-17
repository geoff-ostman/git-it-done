var getRepoIssues = function(repo) {
    console.log(repo);
  };
  
  getRepoIssues("facebook/react");

  var apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";

fetch(apiUrl);

fetch(apiUrl).then(function(response) {

    if (response.ok) {
      response.json().then(function(data) {
        
        displayIssues(data);
      });
    }
    else {
      alert("There was a problem with your request!");
    }
  });  

  var displayIssues = function(issues) {

};

for (var i = 0; i < issues.length; i++) {
    
    var issueEl = document.createElement("a");
    issueEl.classList = "list-item flex-row justify-space-between align-center";
    issueEl.setAttribute("href", issues[i].html_url);
    issueEl.setAttribute("target", "_blank");
  }

  
var titleEl = document.createElement("span");
titleEl.textContent = issues[i].title;

issueEl.appendChild(titleEl);

var typeEl = document.createElement("span");

if (issues[i].pull_request) {
  typeEl.textContent = "(Pull request)";
} else {
  typeEl.textContent = "(Issue)";
}

issueEl.appendChild(typeEl);
  
var issueContainerEl = document.querySelector("#issues-container");

issueContainerEl.appendChild(issueEl);

if (issues.length === 0) {
    issueContainerEl.textContent = "This repo has no open issues!";
    return;
  }
  
var displayIssues = function(issues) {

};

var limitWarningEl = document.querySelector("#limit-warning");

var displayWarning = function(repo) {
 
    limitWarningEl.textContent = "To see more than 30 issues, visit ";
  };

  var linkEl = document.createElement("a");
  linkEl.textContent = "See More Issues on GitHub.com";
  linkEl.setAttribute("href", "https://github.com/" + repo + "/issues");
  linkEl.setAttribute("target", "_blank");


  limitWarningEl.appendChild(linkEl);