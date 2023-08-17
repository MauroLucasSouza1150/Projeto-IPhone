const buttons = document.querySelectorAll("#imagem-link li");
const image = document.querySelector("#produto-imagem");

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log("e");

        buttons.forEach((btn) => {
            btn.querySelector(".color").classList.remove("selected");
        });

        const button = e.target;

        const id = button.getAttribute("id");

        button.querySelector(".color").classList.add("selected");

        image.classList.add("changing");
        image.setAttribute("src", `img/iphone_${id}.jpg`);

        setTimeout(() => {
            image.classList.toggle("changing");
        }, 200);
    });
});