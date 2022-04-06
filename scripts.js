const projects = document.querySelectorAll(".project")
const previews = document.querySelectorAll(".preview")

projects.forEach(project => {
    project.addEventListener("click",()=>{
        project.classList.toggle("expand")
        if (project.classList.contains("expand")){
            project.style.minWidth="600px"
        }
        else{
            project.style.minWidth="300px"
        }
    })
});