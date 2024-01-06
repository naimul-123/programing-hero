const modules = {html:['intro', 'structure', 'structure_Defination',
'paragraph', 'button', 'heading','lineBreak', 'textFormating', 'block Vs inline',
'list', 'anchor', 'image', 'table','navigation', 'megaMenu', 'form'
], 
css:[
   'intro', 'display','selector',
],
git:[]
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
let listItem;
topicItems.forEach((item) => {
    item.addEventListener('click', () => {
        moduleCounter = 0;
        topicItems.forEach((item)=>{
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }

        })
        item.classList.add("active") 
       const topicName = item.innerHTML.replace(/\s/g, '');
        fetch(`content.html`)
            .then(response => response.text())
            .then( function (data) {
                document.getElementById("main").innerHTML = data;
                if(modules[topicName]){
                    item.classList.add("active");
                    let navList = "";
                    modules[topicName].forEach(function(list)  {
                        navList = `${navList}<li class="listItem">${list}</li> `;
                    });
                    document.getElementById("navList").innerHTML = navList;
                }        
            })
            .then(function(){
                listItem = document.querySelectorAll(".listItem");
                listItem.forEach((list)=>{
                    if(list.classList.contains("active")){
                        list.classList.remove("active");
                    }
                    
                })
                listItem[0].classList.add("active");
                fetch(`${topicName}\\${modules[topicName][0]}.html`)
                .then(response => response.text())
                .then(function(data){
                document.getElementById('contentArea').innerHTML = data;  
                })
            })
            .then(function(){
                 
                listItem.forEach((list, key)=>{
                    list.addEventListener('click',function(){
                        listItem.forEach((list)=>{
                            if(list.classList.contains("active")){
                                list.classList.remove("active");
                            }
                        })
                        list.classList.add("active");
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
                        
                        listItem.forEach((list)=>{
                            if(list.classList.contains("active")){
                                list.classList.remove("active");
                            }

                        })
                        
                    if(moduleCounter<modules[topicName].length-1){
                        moduleCounter++;
                        listItem[moduleCounter].classList.add("active");
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
                        listItem.forEach((list)=>{
                            list.classList.remove("active");

                        })
                    if(moduleCounter>0){
                        moduleCounter--;
                        listItem[moduleCounter].classList.add("active");
                        fetch(`${topicName}\\${modules[topicName][moduleCounter]}.html`)
                        .then(response => response.text())
                        .then(function(data){
                            document.getElementById('contentArea').innerHTML = data;
                             
                        })  
                    }
                      
                    })
                }) 
            })
            .catch(error => console.error('Error fetching content:', error));        
    });
});



