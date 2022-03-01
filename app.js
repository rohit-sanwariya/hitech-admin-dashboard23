//declarations
const sidebarToggle = document.getElementById('sidebarToggle')
const navLinks = document.querySelectorAll('.nav-link')
const logout = document.getElementById('logout')


//Event Listener functions


//sidebar toggle
sidebarToggle.addEventListener('click',(event)=>{
     const sidebar = document.querySelector('.sidebar')
     sidebar.classList.toggle('open')
})

// header modal toggle 
modalState = {}
linkToModelMap = {}
navLinks.forEach((link,linkIndex)=>{
     const left = link.parentNode.parentNode.getBoundingClientRect().x
     const top = link.parentNode.parentNode.getBoundingClientRect().y
     console.log(left,top);    
     linkToModelMap[linkIndex] = link.href.split('#')[1]
     modalState[linkIndex] = false
     link.removeAttribute('href')
     link.addEventListener('click',(event)=>{
          Object.keys(linkToModelMap).filter((el)=>Number(el)!==linkIndex).map((key)=>{
               const modalId = linkToModelMap[key]
              
         const modal = document.getElementById(modalId)
         modal.classList.remove('modal-open')
          })
     event.preventDefault()
          const modalId = linkToModelMap[linkIndex]
         const modal = document.getElementById(modalId)
         modal.style.left = `${left-50}px`
         modal.style.top = `${top+30}px`
         if(modalState[linkIndex] == true){
              modal.classList.remove('modal-open')
              
         }
         else{
          modal.classList.add('modal-open')
         
         }
         modalState[linkIndex] = !modalState[linkIndex]
         console.log(linkToModelMap,modalState,linkIndex);
     })

})

//them toggle
const themeToggleBtn = document.querySelector('.toggle-theme-icon')
themeToggleBtn.addEventListener('click',(event)=>{
     const icon = event.target
     icon.innerText=="light_mode"? icon.innerText ='dark_mode':icon.innerText ='light_mode'
})

//logout
logout.addEventListener('click',(event)=>{
     
})