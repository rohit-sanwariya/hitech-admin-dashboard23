//declarations
const sidebarToggle = document.getElementById('sidebarToggle')
const navLinks = document.querySelectorAll('.nav-link')



//Event Listener functions


//sidebar toggle
sidebarToggle.addEventListener('click',(event)=>{
     const sidebar = document.querySelector('.sidebar')
     sidebar.classList.toggle('open')
})

// header modal toggle 
linkToModelMap = {}
navLinks.forEach((link,linkIndex)=>{
     const left = link.parentNode.parentNode.getBoundingClientRect().x
     const right = link.parentNode.parentNode.getBoundingClientRect().y
     console.log(left,right);    
     linkToModelMap[linkIndex] = link.href.split('#')[1]
     link.removeAttribute('href')
     link.addEventListener('click',(event)=>{
          event.preventDefault()
          const modalId = linkToModelMap[linkIndex]
         const modal = document.getElementById(modalId)
         modal.style.left = `${left-100}px`
         modal.style.top = `${right}px`
         modal.classList.toggle('modal-open')
        
     })

})