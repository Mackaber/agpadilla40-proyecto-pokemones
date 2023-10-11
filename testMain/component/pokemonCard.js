function createTags(array) {
    return array.map(({ tagName, classN }) => {
      const item = document.createElement(tagName);
      item.className = classN;
  
      return item;
    });
  }
  
  export function PokemonCard({
    //sprites: { other = [0] },
    //sprites: { other: official-artwork: front_default = "" },
    //id = "",
    abilities: { ability: name = "" },
    abilities: { ability: url = "" },
  }) {
    const tags = [
      { tagName: "aside", classN: "col-md-3" },
      { tagName: "div", classN: "card" },
      { tagName: "img", classN: "card-img-top" },
      { tagName: "div", classN: "card-body" },
      { tagName: "h5", classN: "card-title" },
      { tagName: "h6", classN: "card-subtitle" },
      { tagName: "h7", classN: "card-subtitle" },
      { tagName: "p", classN: "card-text" },
      { tagName: "button", classN: "btn btn-success" },
    ];
  
    const [aside, divCard, img, divBody, h5, h6, h7, p, button] = createTags(tags);
  
    //img.src = name;
    h5.textContent = name;
    //h6.textContent = name;
    h7.textContent = url;
    //p.textContent = url;
  
    aside.appendChild(divCard);
    divCard.appendChild(img);
    divCard.appendChild(divBody);
    divBody.appendChild(h5);
    divBody.appendChild(h6);
    divBody.appendChild(h7);
    divBody.appendChild(p);
    divBody.appendChild(button);
  
    return aside;
  }
  
  export function PokemonCardTemplate({
    //sprites: { front_default = "" },
    //name,
    //id = "",
    abilities: { ability: name = "" },
    abilities: { ability: url = "" },
  }) {
    return `
    <aside class="col-md-3">
      <div class="card">
        <img
          src=""
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <h6 class="card-subtitle>${name}</h6>
          <h7 class="card-subtitle">${url}</h7>
          <p class="card-text">${url}</p>
          <button id="btnLike" class="btn btn-success">Like</button>
        </div>
      </div>
    </aside>
    `;
  }
  