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

var projectCardHtml = `<div class="card">
  <img src="images/site.png" class="card-img-top" alt="Site Name Screenshot">
  <div class="card-body">
    <h5 class="card-title">Site Name</h5>
    <a href="cpanels-view.html" class="btn btn-primary">View Project <i class="fas fa-eye fa-fw"></i></a>
  </div>
</div>`;

function appendProjects(count, selector) {
  for (var i = 0; i < count; i++) {
    $(selector).append(projectCardHtml);
  }
}