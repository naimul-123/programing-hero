const modules = [
    "module1", "module2", "module3","module4","module5","module6","module7",
]
let moduleCounter = 0;

document.addEventListener("DOMContentLoaded", ()=>{
    fetch('navbar.html')
    .then(response=> response.text())
    .then(data=> document.getElementById("navbar").innerHTML = data);
});

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(`${modules[moduleCounter]}.html`)
    .then(response=> response.text())
    .then(data=> document.getElementById("contentArea").innerHTML = data);
});





const prevBtns = document.querySelectorAll(".prevBtn");
prevBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        // console.log(modules[moduleCounter])
        if(moduleCounter>0){
            moduleCounter--
            fetch(`${modules[moduleCounter]}.html`)
            .then(response=> response.text())
            .then(data=> document.getElementById("contentArea").innerHTML = data);
        }
        else{
            fetch(`${modules[moduleCounter]}.html`)
            .then(response=> response.text())
            .then(data=> document.getElementById("contentArea").innerHTML = data); 
        }


    })
})

const nextBtns = document.querySelectorAll(".nextBtn");
nextBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        // console.log(moduleCounter)
        if(moduleCounter<modules.length-1){
            moduleCounter++
            // console.log(moduleCounter)

            fetch(`${modules[moduleCounter]}.html`)
            .then(response=> response.text())
            .then(data=> document.getElementById("contentArea").innerHTML = data);
        }
    })
})



    let navList = "";
    modules.forEach((module)=>{
         navList = `${navList}<li class="listItem">${module}</li>` 
       
    })
    document.getElementById("navList").innerHTML= navList;

    const listitems = document.querySelectorAll(".listItem");
    listitems.forEach((list)=>{
        list.addEventListener('click',()=>{
            modules.map((module, index)=>{
                if(module=== list.innerHTML){
                    moduleCounter= index;
                    fetch(`${module}.html`)
                    .then(response=> response.text())
                    .then(data=> document.getElementById("contentArea").innerHTML = data);
                }
                //console.log(moduleCounter)
            })
        })
    })
    

