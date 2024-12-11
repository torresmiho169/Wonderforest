// Dados das notícias
const newsData = [
    {
        title: "Missão",
        description: "Preservar a Amazônia e promover o equilíbrio entre desenvolvimento humano e conservação ambiental. Buscamos proteger o maior bioma tropical do mundo, garantindo a biodiversidade, mitigando os impactos das mudanças climáticas e apoiando as comunidades que dependem diretamente da floresta. Nosso foco é combater o desmatamento, restaurar áreas degradadas e conscientizar sobre a importância global da Amazônia.",
        link: "#noticia1",
    },
    {
        title: "Visão",
        description: "Buscamos proteger o maior bioma tropical do mundo, garantindo a biodiversidade, mitigando os impactos das mudanças climáticas e apoiando as comunidades que dependem diretamente da floresta. Nosso foco é combater o desmatamento, restaurar áreas degradadas e conscientizar sobre a importância global da Amazônia.",
        link: "#noticia2",
    },
    {
        title: "Valores",
        description: "Um futuro onde a Amazônia permaneça em pé, rica em biodiversidade, protegida e valorizada como o coração pulsante do planeta Visualizamos um modelo de desenvolvimento sustentável, onde as comunidades locais prosperem em harmonia com o meio ambiente. Nosso objetivo é inspirar ações globais para manter a floresta como um legado para as próximas gerações.",
        link: "#noticia3",
    },
    {
        title: "Notícia 4 em Destaque",
        description: "Descrição da notícia 4. Detalhes sobre o quarto slide de destaque.",
        link: "#noticia4",
    },
    {
        title: "Notícia 5 em Destaque",
        description: "Descrição da notícia 5. Explore o conteúdo relacionado ao quinto slide.",
        link: "#noticia5",
    },
  ];
  
  const track = document.getElementById("carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const contentTitle = document.getElementById("content-title");
  const contentDescription = document.getElementById("content-description");
  const contentLink = document.getElementById("content-link");
  
  let currentIndex = 0; // Índice do slide atual
  let accumulatedScroll = 0; // Armazena o deslocamento acumulado para cada rolagem
  const scrollThreshold = 200; // Define o quanto o usuário precisa rolar para trocar de slide
  const startScrollY = 4800; // Altura mínima do scroll para ativar o carrossel
  
  // Sincronizar conteúdo com o slide ativo
  function updateContent(index) {
    const news = newsData[index];
    contentTitle.textContent = news.title;
    contentDescription.textContent = news.description;
    contentLink.setAttribute("href", news.link);
  }
  
  // Ajustar a posição do carrossel
  function updateCarousel(index) {
    const slideHeight = slides[0].offsetHeight + 20; // Altura do slide + margem
    track.style.transform = `translateY(-${index * slideHeight}px)`; // Move o carrossel
  
    // Aplicar efeitos de perspectiva 3D apenas no slide ativo
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.transform = `scale(1) translateZ(100px)`;
            slide.style.opacity = 1;
        } else {
            slide.style.transform = `scale(0.9) translateZ(0px)`;
            slide.style.opacity = 0.7;
        }
    });
  
    updateContent(index);
  }
  
  // Detectar rolagem do mouse com controle de acumulação
  window.addEventListener("wheel", (event) => {
    // Verificar se o scrollY está na altura mínima para ativar o carrossel
    if (window.scrollY >= startScrollY) {
        accumulatedScroll += event.deltaY; // Acumula o deslocamento do scroll
  
        if (accumulatedScroll >= scrollThreshold && currentIndex < slides.length - 1) {
            // Passou o limite para baixo e ainda há slides disponíveis
            currentIndex++;
            accumulatedScroll = 0; // Reseta o acumulado
        } else if (accumulatedScroll <= -scrollThreshold && currentIndex > 0) {
            // Passou o limite para cima e ainda há slides disponíveis
            currentIndex--;
            accumulatedScroll = 0; // Reseta o acumulado
        }
  
        updateCarousel(currentIndex); // Atualiza o carrossel
    }
  });
  
  // Inicializar conteúdo com o primeiro slide
  updateCarousel(0);