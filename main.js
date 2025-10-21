const menu = document.getElementById("menu");

// Adicione classes responsivas no container no HTML/CSS se ainda não tiver:
// <div id="menu" class="flex flex-wrap justify-center gap-4 p-4"></div>

produtos.forEach(produto => {
  const card = document.createElement("div");
 card.className = "bg-white rounded-2xl shadow-md overflow-hidden card"; // sem w-64

  card.dataset.category = produto.categoria;
  card.dataset.name = produto.nome;

  let tamanhosHTML = '';
  const precosKeys = Object.keys(produto.precos);

  if(precosKeys.length > 1){
    // Botões de tamanho
    tamanhosHTML = '<div class="mt-3 flex flex-wrap gap-2">' + 
      precosKeys.map((tamanho, index) => `
        <button type="button" class="size-btn ${index===0?'bg-[#c8a98b] text-white':'bg-[#f4e8dd] text-[#3b2415]'} px-2 py-1 rounded-full text-xs font-medium" data-price="${produto.precos[tamanho]}">${tamanho}</button>
      `).join('') + '</div>';
  }

  const precoInicial = produto.precos[precosKeys[0]].toFixed(2);

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="text-lg font-semibold">${produto.nome}</h3>
      <p class="text-sm text-gray-600">${produto.descricao}</p>
      ${tamanhosHTML}
      <div class="mt-4 flex items-center justify-between">
        <p class="font-bold text-[#3b2415] text-lg">R$ ${precoInicial}</p>
        <button class="bg-[#68432c] hover:bg-[#412f23] text-white px-4 py-2 rounded-full text-sm font-semibold transition" onclick="addToCart(this)">Adicionar</button>
      </div>
    </div>
  `;

  menu.appendChild(card);
});
