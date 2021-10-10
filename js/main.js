function goToPage(url) {
  window.location.href = url;
}

function goToEditSourcePage() {
  goToPage('settings-sources-edit.html');
}

function goToViewCpanelPage() {
  goToPage('cpanels-view.html');
}

function goToViewProjectPage() {
  goToPage('projects-view.html');
}

const projectCardHtml = '<div class="card"><img src="images/site.png" class="card-img-top" alt="Site Name Screenshot"><div class="card-body"><h5 class="card-title">Site Name</h5><a href="cpanels-view.html" class="btn btn-primary">View Project <i class="fas fa-eye fa-fw"></i></a></div></div>';

function appendProjects(count, elementId) {
  var projectCardsHtml = '';
  for (let i = 0; i < count; i++) {
    projectCardsHtml += projectCardHtml;
  }
  document.getElementById(elementId).innerHTML(projectCardsHtml);
}