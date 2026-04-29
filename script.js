function creatCard(targetClass,rank,image){

    let html = ` 
        <span>
            <span class="rank">${rank}</span> <!-- numbering -->
            <img src="${image}" class="imgradius imgradius1" alt="">
        </span>
        `

    document.querySelector(targetClass).insertAdjacentHTML("beforeend",html)        
}

creatCard(".imgtrending", 1,"Assets/images/movie1.jpg")
creatCard(".imgtrending", 2,"Assets/images/movie3.jpeg")
creatCard(".imgtrending", 3,"Assets/images/movie2.jpeg")
creatCard(".imgtrending", 4,"Assets/images/movie4.webp")
creatCard(".imgtrending", 5,"Assets/images/movie5.jpeg")
creatCard(".imgtrending", 6,"Assets/images/movie6.jpeg")
creatCard(".imgtrending", 7,"Assets/images/movie7.jpeg")
creatCard(".imgtrending", 8,"Assets/images/movie8.jpeg")
creatCard(".imgtrending", 9,"Assets/images/movie9.jpeg")
creatCard(".imgtrending", 10,"Assets/images/movie10.jpeg")


//  Add an Event Listener  for faq answer

document.querySelectorAll(".same-box").forEach(box => {
    box.addEventListener("click", () => {

        const answer = box.nextElementSibling;
        const icon = box.querySelector(".plus-icon");

        const isOpen = answer.classList.contains("active");

        // all close
        document.querySelectorAll(".faq-answer").forEach(a => a.classList.remove("active"));
        document.querySelectorAll(".plus-icon").forEach(i => i.classList.remove("active"));

        // open on click
        if (!isOpen) {
            answer.classList.add("active");
            icon.classList.add("active");
        }
    });
});