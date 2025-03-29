//cadastrar
document.getElementById("cadastrar").addEventListener("click", function()
{
    window.location.href="cadastro.html";
});
//entrar
document.getElementById("entrar").addEventListener("click", function()
{
    window.location.href="login.html";
});
//Saber mais sobre HTML
document.getElementById("aulahtml").addEventListener("click", function()
{
    window.location.href="aulahtml.html";
});

// Função para rolar até a seção "Cursos"
function botao() {
    const coursesSection = document.getElementById('card');
    coursesSection.scrollIntoView({ behavior: 'smooth' });
  }

    
  const imagens = document.querySelector('.imagens');
  const bolhas = document.querySelectorAll('.bolha');
  
  let currentIndex = 0;
  
  // Atualiza o carrossel para mostrar a imagem atual
  function updateCarousel(index) {
    const imageWidth = imagens.clientWidth;
    imagens.style.transform = `translateX(-${index * imageWidth}px)`;
  
    // Atualiza os indicadores (bolinhas)
    bolhas.forEach((bolha, i) => {
      bolha.classList.toggle('active', i === index);
    });
  }
  
  // Função para passar para a próxima imagem automaticamente
  function nextSlide() {
    currentIndex = (currentIndex + 1) % bolhas.length; // Volta ao início após a última imagem
    updateCarousel(currentIndex);
  }
  
  // Evento para os indicadores (caso o usuário clique em uma bolinha)
  bolhas.forEach((bolha, index) => {
    bolha.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel(currentIndex);
    });
  });
  
  // Inicia o carrossel automático
  setInterval(nextSlide, 3000); // Alterna as imagens a cada 3 segundos
  