let imgContainer = document.querySelector(".img_container");
let details = document.querySelector(".details");
let getUserBtn = document.querySelector("#btn");
let url = "https://random-data-api.com/api/v2/users?response_type=json";

let getUser = () => {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      imgContainer.innerHTML = `<img src=${data.avatar} />`;
      details.innerHTML = `<h1>${data.first_name} ${data.last_name}</h1>
      <p>${data.employment.title}</p>
      <p>${data.address.city}</p>`;

      let RandomColor = () => {
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
        document.documentElement.style.setProperty(
          "--theme-color",
          RandomColor
        );
      };
    });
};

window.addEventListener("load", getUser);
getUserBtn.addEventListener("click", getUser);
