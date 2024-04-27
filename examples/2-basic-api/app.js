const result = document.querySelector(".result");

// testing add coming from the document selector
const fetchData = async () => {
  try {
    const { data } = await axios.get("/api/2-basic-api");
    const products = data
      .map((product) => {
        const {
          image: { url },
          name,
          price,
        } = product;
        //console.log(product);
        return `
      <article class="product">
      <img src=${url} alt="${name}"/>
      <div class="info">
        <h5>${name}</h5>
        <h5 class="price">$${price}</h5>
      </div>
    </article>
      `;
      })
      .join("\n");
    result.innerHTML = products;
  } catch (error) {
    result.innerHTML = `<h4>There was an Error! Please try again later.</h4>`;
  }
};

fetchData();
