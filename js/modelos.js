const cardData = [
    {
      title: "Musculos",
      description: "Mira los varios musculos del cuerpo humano al detalle",
      image: "img/musculos.png",
      tags: ["Biologia"]
    },
    {
        title: "El sistema digestivo",
        description: "Observa a lujo de detalle los organos que comprenden el sistema digestivo",
        image: "img/sistema-digestivo.png",
        tags: ["Biologia"]
    },
    {
        title: "Celula Procariota",
        description: "Conoce a detalle las partes de las celulas procariotas",
        image: "img/celula.png",
        tags: ["Biologia"]
    },
    {
      title: "Celula Eucariota",
      description: "Conoce a detalle las partes de las celulas eucariotas",
      image: "img/eucariota.png",
      tags: ["Biologia"]
  },
  {
    title: "ADN",
    description: "Observa la estructura del ADN y lo que lo compone",
    image: "img/adn.png",
    tags: ["Biologia"]
},
{
  title: "Cerebro Humano",
  description: "La fuente de nuestros pensamientos...",
  image: "img/cerebro.png",
  tags: ["Biologia"]
},
{
  title: "La Columna Vertebral",
  description: "Mira las distintas vertebras y partes de la columna vertebral!",
  image: "img/columna.png",
  tags: ["Biologia"]
},
{
  title: "El Esqueleto",
  description: "Observa el esqueleto humano y donde se encuentra el corazón",
  image: "img/esqueleto.png",
  tags: ["Biologia"]
},
{
  title: "El Coliseo Romano",
  description: "Uno de los lugares mas icónicos de la Antigua Roma  ",
  image: "img/coliseo.png",
  tags: ["Historia"]
},
{
  title: "Jeroglificos",
  description: "Observa un escaneo de una tabla de jeroglificos real!",
  image: "img/jeroglificos.png",
  tags: ["Historia"]
},
{
  title: "Sarcofagos",
  description: "Donde antiguamente enterraban a los faraones del viejo egipto",
  image: "img/sarcofago.png",
  tags: ["Historia"]
},
{
  title: "Templo Japones",
  description: "Explora la arquitectura oriental japonesa",
  image: "img/templojap.png",
  tags: ["Historia"]
},
{
  title: "El Primer Avión",
  description: "Mira las partes que comprendian el primer avión de la historia",
  image: "img/primeravion.png",
  tags: ["Historia"]
},
{
  title: "Mapa Topológico de la Antigua Roma",
  description: "Un mapa de la Antigua Roma con profundidad creado por Paul Bigot entre 1908 y 1942",
  image: "img/maparoma.png",
  tags: ["Geografia", "Historia"]
},
{
  title: "Mapa Topológico del Museo Americano",
  description: "Un mapa con profundidad mostrandonos como se ve por fuera el museo de historia americano",
  image: "img/museo.png",
  tags: ["Geografia"]
},
{
  title: "Castillo Santiago de la Torre",
  description: "Escaneo 3D del castillo Español Santiago de la Torre",
  image: "img/castillo.png",
  tags: ["Geografia"]
},
{
  title: "Fontana di Trevi",
  description: "Uno de los lugares de Italia más conocidos sin ser la torre de Pizza, cuenta la leyenda que si tiras una moneda volves a Roma",
  image: "img/fuente.png",
  tags: ["Geografia"]
},
{
  title: "Modelos de Atómos",
  description: "Observa las distintas propuestas a lo largo de los años sobre el atómo y su composición",
  image: "img/atomos.png",
  tags: ["Quimica"]
},
{
  title: "Estructura del Aminoácido",
  description: "Observa la estructura del Aminoácido en 3D",
  image: "img/aminoacido.png",
  tags: ["Quimica"]
},
{
  title: "Estructura y polaridad del agua",
  description: "Observa la estructura y polaridad del agua en 3D",
  image: "img/agua.png",
  tags: ["Quimica"]
},
{
  title: "Disolución",
  description: "Observa como la sal se disuelve en el agua (Animado)",
  image: "img/disolucion.png",
  tags: ["Quimica"]
},
{
  title: "Reacción Quimica",
  description: "Observa la reacción quimica entre Metano y Dioxigeno",
  image: "img/reaccion.png",
  tags: ["Quimica"]
},
{
  title: "Elementos Químicos",
  description: "Mirá los distintos objetos dentro de un laboratorio, como tubos de ensayo, provetas, etc",
  image: "img/elementos.png",
  tags: ["Quimica"]
},

    // Add more card data here
  ];
 
  const cardContainer = document.getElementById('card-container');
  const searchInput = document.getElementById('search-input');
  const filterButtons = document.querySelectorAll('.filter-btn');
 
  // Function to create a card element
  function createCardElement(data) {
    const card = document.createElement('div');
    card.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden');
 
    const image = document.createElement('img');
    image.src = data.image;
    image.alt = data.title;
    image.classList.add('w-full', 'h-48', 'object-cover');
 
    const content = document.createElement('div');
    content.classList.add('p-4');
 
    const title = document.createElement('h2');
    title.textContent = data.title;
    title.classList.add('text-lg', 'font-medium');
 
    const description = document.createElement('p');
    description.textContent = data.description;
    description.classList.add('text-gray-600', 'mt-2');
 
    const footer = document.createElement('div');
    footer.classList.add('flex', 'justify-between', 'items-center', 'mt-4');
 
    const viewButton = document.createElement('a');
    viewButton.href = '#';
    viewButton.textContent = 'Ver modelo';
    viewButton.classList.add('text-teal-500', 'hover:text-teal-600', 'font-medium', 'flex', 'items-center');
 
    const subjectTag = document.createElement('span');
    subjectTag.textContent = data.tags[0];
    subjectTag.classList.add('text-gray-600');
 
    footer.appendChild(viewButton);
    footer.appendChild(subjectTag);
 
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(footer);
 
    card.appendChild(image);
    card.appendChild(content);
 
    return card;
  }
 
  // Function to filter cards based on search and tags
  function filterCards() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeTags = Array.from(filterButtons)
      .filter(btn => btn.classList.contains('active'))
      .map(btn => btn.dataset.filter);
 
    cardContainer.innerHTML = '';
 
    cardData.forEach(card => {
      const matchesSearch = card.title.toLowerCase().includes(searchTerm);
      const matchesTag = activeTags.length === 0 || activeTags.some(tag => card.tags.includes(tag));
 
      if (matchesSearch && matchesTag) {
        cardContainer.appendChild(createCardElement(card));
      }
    });
  }
 
  // Add event listeners
  searchInput.addEventListener('input', _.debounce(filterCards, 300));
 
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle the 'active' class instead of 'bg-gray-200'
      btn.classList.toggle('active');
      
      filterCards();
    });
  });
 
  // Initial render
  cardData.forEach(card => {
    cardContainer.appendChild(createCardElement(card));
  });