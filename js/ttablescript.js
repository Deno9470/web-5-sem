main = document.querySelectorAll("section")[1];


document.querySelector("button[type=submit]").addEventListener('click', (e) => {
    var table = main.getElementsByClassName("own-ttable")[0];
    if (!table.classList.contains("inactive")) {
        var classList = main.querySelectorAll("input.input-class");
        var teacherList = main.querySelectorAll("input.teacher-name");
        for (let i = 0; i < classList.length; i++) {
            if(classList[i].value === "") {
                classList[i].classList.remove("inactive");
                teacherList[i].classList.remove("inactive");
            }
            else {
                teacherList[i].classList.remove("disabled");
                classList[i].classList.remove("disabled");
                classList[i].disabled = false;
                teacherList[i].disabled = false;
            }
        }
    }
    main.getElementsByClassName("own-ttable")[0].classList.remove("inactive");
    main.getElementsByClassName("ttable-save")[0].classList.remove("inactive");
    main.getElementsByClassName("ttable-create")[0].classList.add("inactive");


});

document.querySelector(".button-save").addEventListener("click", (e) => {
    var classList = main.querySelectorAll("input.input-class");
    var teacherList = main.querySelectorAll("input.teacher-name");
    SaveTable()
    for (let i = 0; i < classList.length; i++) {
        if(classList[i].value === "") {
            classList[i].classList.add("inactive");
            teacherList[i].classList.add("inactive");
        }
        else {
            teacherList[i].classList.add("disabled");
            classList[i].classList.add("disabled");
            classList[i].disabled = true;
            teacherList[i].disabled = true;
        }
        main.getElementsByClassName("ttable-create")[0].classList.remove("inactive");
        main.getElementsByClassName("ttable-save")[0].classList.add("inactive");
    }
} );


function SaveTable() {
    var classList = main.querySelectorAll("input.input-class");
    var teacherList = main.querySelectorAll("input.teacher-name");
    var isEmpty = true;
    for(let i = 0; i < classList.length; i++) {
         if(classList[i].value.toString() !== "") {
             var classData = classList[i].value.toString();
             isEmpty = false;
         }
         else {
             var classData = "0"
         }
        let teacherData = teacherList[i].value.toString() === "" ? "0" : teacherList[i].value.toString();
        let data = classData + ":" + teacherData;
        window.localStorage.setItem(i, data);
    }
    if(isEmpty)
        window.localStorage.clear()
}


function LoadData() {
    var classList = main.querySelectorAll("input.input-class");
    var teacherList = main.querySelectorAll("input.teacher-name");
    for(let i = 0; i < classList.length; i++) {
        var data = window.localStorage.getItem(i)
        if(data === "0:0")
            continue;
        data = data.split(":")
        classList[i].value = data[0];
        teacherList[i].value = data[1];
    }
    document.querySelector(".button-save").dispatchEvent(new Event("click"))
}


if(window.localStorage.length !== 0) {
    document.querySelector("button[type=submit]").dispatchEvent(new Event("click"));
    LoadData()
}