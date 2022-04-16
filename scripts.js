const projects = document.querySelectorAll(".project")
const previews = document.querySelectorAll(".preview")
const screenWidth = window.innerWidth

projects.forEach(project => {
    project.addEventListener("click",()=>{
        if( screenWidth < 500){
            project.classList.toggle("mask")
            if (project.classList.contains("mask")){
                project.firstElementChild.style.display = "none"
            }
            else{
                project.firstElementChild.style.display = "flex"
            }
        }
        else{
            project.classList.toggle("expand")
            if (project.classList.contains("expand")){
                project.style.minWidth="600px"
            }
            else{
                project.style.minWidth="300px"
            }
        }
    })
});

console.log(screenWidth)


