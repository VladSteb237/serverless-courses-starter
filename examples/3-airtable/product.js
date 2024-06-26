const result = document.querySelector(".result");

const fetchProducts = async () => {
  result.innerHTML = `<h2>loading...</h2>`;
  try {
    //const id = "?id=1";
    const id = window.location.search;
    // const {
    //   data: { fields },
    // } = await axios.get(`/api/3-product/${id}`);
    const {
      data: { fields },
    } = await axios.get(`/api/3-z-complete/${id}`);
    const { name, desc, image, price } = fields;
    result.innerHTML = `<h1 class="title">${name}</h1>
  <article class="product">
    <img class="product-img"
    src="${image[0].url}"
    alt="${name}"
    />
    <div class="product-info">
      <h5 class="title">${name}</h5>
      <h5 class="price">$${price}</h5>
      <p class="desc">${desc}</p>
    </div>
  </article>`;
    console.log(data);
  } catch (error) {
    result.innerHTML = `<h2>${error.response.data}</h2>`;
  }
};

fetchProducts();
