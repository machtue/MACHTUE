function showPage(pageId) {
      document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
      document.querySelectorAll('nav button').forEach(btn => btn.classList.remove('active'));

      document.getElementById('page-' + pageId).classList.add('active');
      document.getElementById('btn-' + pageId).classList.add('active');
    }

    function comprar(nomeQuadro) {
      alert('Você selecionou para comprar: ' + nomeQuadro);
    }