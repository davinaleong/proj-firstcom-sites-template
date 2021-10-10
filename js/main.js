const viewPages = {
  settings: 'settings-sources-edit.html',
  cpanels: 'cpanels-view.html',
  projects: 'projects-view.html'
};

function goToPage(url) {
  window.location.href = url;
}

function goToEditSourcePage() {
  goToPage(viewPages.settings);
}

function goToViewCpanelPage() {
  goToPage(viewPages.cpanels);
}

function goToViewProjectPage() {
  goToPage(viewPages.projects);
}

function appendProjects(count, selector, viewPage) {
  const projectCardHtml = `<div class="card">
    <img src="images/site.png" class="card-img-top" alt="Site Name Screenshot">
    <div class="card-body">
      <h5 class="card-title">Site Name</h5>
      <a href="${viewPage}" class="btn btn-primary">View Project <i class="fas fa-eye fa-fw"></i></a>
    </div>
  </div>`;

  for (let i = 0; i < count; i++) {
    $(selector).append(projectCardHtml);
  }
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at.\n\rLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at.\n\rLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at.';

function appendNotes(selector) {
  let liHtml = '';
  const parts = text.split('\n\r');
  
  parts.forEach(part => {
    liHtml += `<li>${part}</li>`;
  });

  $(selector).html(`<ul>${liHtml}</ul>`);
}

function appendTextarea(selector) {
  $(selector).val(text);
}