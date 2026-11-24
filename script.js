function toggleMenu(event, idDoMenu) {
    event.preventDefault(); /* Evita que a tela pule para o topo */

    // (Opcional) Fecha outros menus abertos antes de abrir o novo
    var todosMenus = document.querySelectorAll('.dropdown-conteudo, .dropdown-cont');
    todosMenus.forEach(function (menu) {
        if (menu.id !== idDoMenu) {
            menu.classList.remove('mostrar');
        }
    });

    // Abre ou fecha o menu específico que foi clicado
    document.getElementById(idDoMenu).classList.toggle("mostrar");
}

/* Função única: Fecha os menus se o usuário clicar fora */
window.onclick = function (event) {
    // Verifica se onde o usuário clicou NÃO é um botão de menu ou a setinha
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbt') && !event.target.matches('.drseta')) {

        // Pega todos os menus suspensos e remove a classe 'mostrar'
        var todosMenus = document.querySelectorAll(".dropdown-conteudo, .dropdown-cont");
        todosMenus.forEach(function (menu) {
            if (menu.classList.contains('mostrar')) {
                menu.classList.remove('mostrar');
            }
        });
    }
}


function mostrarTrimestre(numero) {
    // Esconde todos os trimestres que existirem na página
    var todos = document.querySelectorAll('.trimestre, [id^="tri"]');
    todos.forEach(function (el) {
        // apenas elementos do tipo Element com style
        if (el && el.style) el.style.display = 'none';
    });

    // Mostra o trimestre solicitado, se existir
    var alvo = document.getElementById('tri' + numero);
    if (alvo && alvo.style) {
        alvo.style.display = 'block';
    } else {
        // Se não encontrou, loga para ajudar no debug
        console.warn('mostrarTrimestre: elemento "tri' + numero + '" não encontrado nesta página.');
    }
}

let indexAtual = 0;

function mudarSlide(direcao) {
  const slides = document.getElementById('slides');
  const totalSlides = slides.children.length;

  indexAtual += direcao;

  if (indexAtual >= totalSlides) {
    indexAtual = 0;
  } else if (indexAtual < 0) {
    indexAtual = totalSlides - 1;
  }

  slides.style.transform = `translateX(${-indexAtual * 100}%)`;
}