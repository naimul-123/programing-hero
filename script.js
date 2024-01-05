const modules = {html:['intro', 'structure', 'structure_Defination',
'paragraph', 'button', 'heading','lineBreak', 'textFormating', 'block Vs inline',
'list', 'anchor', 'image'
], 
css:[
   'intro', 'display','selector',
]
}

const module = Object.keys(modules);

let topics = `<ul class= "mainMenu"> `

module.forEach((topic)=>{
    topics = `${topics} <li class= "topic">${topic} </li>`
});

topics = `${topics}  </ul>`
document.getElementById("navbar").innerHTML= topics;
let moduleCounter = 0;


document.addEventListener("DOMContentLoaded", ()=>{
    fetch(`home.html`)
    .then(response=> response.text())
    .then(data=> document.getElementById("main").innerHTML = data);
});



const topicItems = document.querySelectorAll(".topic");

topicItems.forEach((item) => {
    item.addEventListener('click', () => {
       const topicName = item.innerHTML.replace(/\s/g, '');
        fetch(`content.html`)
            .then(response => response.text())
            .then( function (data) {
                document.getElementById("main").innerHTML = data;
                if(modules[topicName]){
                    let navList = "";
                    modules[topicName].forEach(function(list)  {
                        navList = `${navList}<li class="listItem">${list}</li> `;
                    });
                    document.getElementById("navList").innerHTML = navList;

                }        
            })
            .then(function(){
                document.querySelectorAll(".listItem").forEach((list, key)=>{
                    list.addEventListener('click',function(){
                        moduleCounter=key;
                        const listData = list.innerHTML;
                        fetch(`${topicName}\\${listData}.html`)
                        .then(response => response.text())
                        .then(function(data){
                            document.getElementById('contentArea').innerHTML = data;
                             
                        })
                 
                    })

                   
                }) 
            })
            .then(function(){
                document.querySelectorAll(".nextBtn").forEach((btn)=>{
                    btn.addEventListener('click',function(){
                    if(moduleCounter<modules[topicName].length-1){
                        moduleCounter++;
                        fetch(`${topicName}\\${modules[topicName][moduleCounter]}.html`)
                        .then(response => response.text())
                        .then(function(data){
                            document.getElementById('contentArea').innerHTML = data;
                             
                        })
                        
                    }
                      
                      //alert(moduleCounter)
                    })
                }) 
            })
            .then(function(){
                document.querySelectorAll(".prevBtn").forEach((btn)=>{
                    btn.addEventListener('click',function(){
                    if(moduleCounter>0){
                        moduleCounter--;
                        fetch(`${topicName}\\${modules[topicName][moduleCounter]}.html`)
                        .then(response => response.text())
                        .then(function(data){
                            document.getElementById('contentArea').innerHTML = data;
                             
                        })
                        
                    }
                      
                      //alert(moduleCounter)
                    })
                }) 
            })

            
            .catch(error => console.error('Error fetching content:', error));        
    });
});



document.querySelectorAll(".nextBtn").forEach((btn)=>{
    btn.addEventListener('click',function(){
      alert(moduleCounter);
    })
})


//     const listTopic = document.getElementsByClassName("listItem")[0];
//     console.log(listTopic.innerHTML)



// const prevBtns = document.querySelectorAll(".prevBtn");
// prevBtns.forEach((btn)=>{
//     btn.addEventListener('click', ()=>{
//         console.log(`button is clicked`)
//         listitems.forEach((list)=>{
//             list.classList.remove("active")
//         });
//         if(moduleCounter>0){
//             moduleCounter--
//             listitems[moduleCounter].classList.add('active')
//             fetch(`html/${modules[moduleCounter]}.html`)
//             .then(response=> response.text())
//             .then(data=> document.getElementById("contentArea").innerHTML = data);
//         }
//         else{
//             fetch(`html/${modules[moduleCounter]}.html`)
//             .then(response=> response.text())
//             .then(data=> document.getElementById("contentArea").innerHTML = data); 
//         }


//     })
// })

// const nextBtns = document.querySelectorAll(".nextBtn");
// nextBtns.forEach((btn)=>{
//     btn.addEventListener('click', ()=>{
//         listitems.forEach((list)=>{
//             list.classList.remove("active")
//         });
//         if(moduleCounter<modules.length-1){
//             moduleCounter++
//             listitems[moduleCounter].classList.add('active')
//             fetch(`html/${modules[moduleCounter]}.html`)
//             .then(response=> response.text())
//             .then(data=> document.getElementById("contentArea").innerHTML = data);
//         }
//     })
// })



    



// //     Object.keys(modules).forEach((key)=>{
// //         navList = `${navList}<li class="topic">${key} <ul class = "topic">` 
// //         modules[key].forEach((topic)=>{
// //             navList = `${navList}<li class="listItem">${topic}</li> ` 
// //         })

// //         navList = `${navList}</ul> ` 

      
// //    })

// //    console.log(navList)

// //     document.getElementById("navList").innerHTML= navList;

//     const listitems = document.querySelectorAll(".listItem");
//     listitems.forEach((list)=>{
//         list.addEventListener('click',()=>{
            
//             modules["html"].map((module, index)=>{
//                 listitems[index].classList.remove("active");  
//                 if(module=== list.innerHTML){
//                     moduleCounter= index;
//                     fetch(`html/${module}.html`)
//                     .then(response=> response.text())
//                     .then(data=> document.getElementById("contentArea").innerHTML = data);
//                     list.classList.add("active");
//                 }

             
//                 //console.log(moduleCounter)
//             })
            
//         })
//     })
    

