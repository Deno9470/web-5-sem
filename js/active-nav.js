window.addEventListener("load", function () {
    let sections = document.getElementsByClassName("section")
    let links = document.querySelectorAll("nav a")
    function activeLink(){
        let currentPosition = window.pageYOffset + window.innerHeight / 3
        let currentElement = sections[0]
        for (let i = 0; i < sections.length; ++i) {
            if (sections[i].offsetTop > currentPosition) {
                if (i !== 0) {
                    currentElement = sections[i - 1]
                }
                break
            }
            if (i === sections.length - 1) {
                currentElement = sections[i]
            }
        }
        for (let i = 0; i < links.length; ++i) {
            links[i].classList.remove("active")
            if (links[i].getAttribute("href") === "#" + currentElement.id) {
                links[i].classList.add("active")
            }

        }
    }
    window.addEventListener("scroll", activeLink)
    activeLink()
})