/*
document.addEventListener("DOMContentLoaded", function() {
  var projects = document.querySelectorAll('.projects');
  var seeMoreButton = document.getElementById('see-more-button');
  var seeLessButton = document.getElementById('see-less-button');
  var projectsToShow = 3; // Número de projetos para mostrar de cada vez
  var hiddenProjects = Array.from(projects).slice(projectsToShow); // Projetos para ocultar inicialmente

  // Oculta os projetos adicionais
  hiddenProjects.forEach(function(project) {
    project.style.display = 'none';
  });

  // Verifica se há mais projetos para exibir os botões "Veja Mais" e "Veja Menos"
  if (projects.length > projectsToShow) {
    seeMoreButton.style.display = 'block';
  }
  if (hiddenProjects.length > 0) {
    seeLessButton.style.display = 'none';
  }

  // Adiciona um evento de clique ao botão "Veja Mais"
  seeMoreButton.addEventListener('click', function() {
    // Mostra os próximos projetos ocultos
    for (var i = 0; i < projectsToShow; i++) {
      if (hiddenProjects.length > 0) {
        hiddenProjects.shift().style.display = 'block';
      } else {
        break;
      }
    }

    // Atualiza a lista de projetos ocultos
    hiddenProjects = hiddenProjects.slice(projectsToShow);

    // Oculta o botão "Veja Mais" se não houver mais projetos para mostrar
    if (hiddenProjects.length === 0) {
      seeMoreButton.style.display = 'none';
      seeLessButton.style.display = 'inline-block'; // Mostra o botão "Veja Menos"
    }
  });

  // Adiciona um evento de clique ao botão "Veja Menos"
  seeLessButton.addEventListener('click', function() {
    // Oculta os projetos extras
    for (var i = 0; i < projectsToShow; i++) {
      if (projects.length > projectsToShow) {
        projects[projectsToShow + i].style.display = 'none';
      } else {
        break;
      }
    }

    // Atualiza a lista de projetos ocultos
    hiddenProjects = Array.from(projects).slice(projectsToShow);

    // Mostra o botão "Veja Mais"
    seeMoreButton.style.display = 'inline-block';
    // Oculta o botão "Veja Menos" se não houver mais projetos ocultos
    if (hiddenProjects.length === projects.length - projectsToShow) {
      seeLessButton.style.display = 'none';
    }
  });
});

*/







