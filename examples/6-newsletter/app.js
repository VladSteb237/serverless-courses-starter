// API_KEY=b04ee444-d1ca-4939-8cc2-fd854173cfcf
const form = document.querySelector(".form");
const emailInput = document.querySelector(".email-input");
const alert = document.querySelector(".alert");
alert.style.display = "none";

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  form.classList.add("loading");
  alert.style.display = "none";
  const email = emailInput.value;
  try {
    await axios.post("/api/6-newsletter", { email });
    form.innerHTML =
      "<h4 class='success'>Succsess! Please check you email!</h4>";
  } catch (error) {
    console.log(error.response);
    alert.style.display = "block";
    alert.textContent = "Something went wrong! Please try again!";
    //alert.textContent = error.response.data.email[0];
  }
  form.classList.remove("loading");
});
