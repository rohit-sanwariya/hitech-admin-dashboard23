//declarations
const sidebarToggle = document.getElementById('sidebarToggle')
const navLinks = document.querySelectorAll('.nav-link')
const logout = document.getElementById('logout')
const  data =[
  
     {   name:'course',
         completed:
         {
             count:12,
             title:'Course Completed'
         },
         unfinished:
         {
             count:3,
             title:'Course Unfinished'
         },
         list:[
             'Basics for Ux Designer',
             '10 Steps to improve your wireframe',
             'A Better Way to Request App Ratings',
             'How to Speed your wordpress website'
         ]
     },
     {   name:'exam',
         completed:
         {
             count:19,
             title:'Following Exam'
         },
         unfinished:
         {
             count:88,
             title:'Done Exam'
         },
         list:[
             'Junior Web Designer',
             'Best Ways to Become MERN Stack...',
             'Great Examples of viral Design Trends',
             'Boost performance of your Linode server'
         ]
     },
     {   name:'q&a',
         completed:
         {
             count:22,
             title:'Asking Question'
         },
         unfinished:
         {
             count:9,
             title:'Answered Question'
         },
         list:[
             'How to make good logos?',
             'What are the best Apps for.....',
             'What is the difference between UI and UX?',
             'How to Speed your wix website?'
         ]
     },
 ]

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
   
    
     const left = Math.floor(link.parentNode.parentNode.getBoundingClientRect().x)
     const top = Math.floor(link.parentNode.parentNode.getBoundingClientRect().y)

     
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
        
     })

})
window.onresize = (event)=>{
    document.querySelectorAll('.modal').forEach((modal)=>{
        modal.classList.remove('modal-open')
    })
}
//them toggle
const themeToggleBtn = document.querySelector('.toggle-theme-icon')
themeToggleBtn.addEventListener('click',(event)=>{
     const icon = event.target
     icon.innerText=="light_mode"? icon.innerText ='dark_mode':icon.innerText ='light_mode'
     darkLightLink = document.getElementById('darkTheme')
    
    const arr = darkLightLink.href.split('/')
    const val = arr[arr.length-1]
    if( val == 'dark.css' ){
        darkLightLink.href = ''
       
    }
    else{
        darkLightLink.href = 'dark.css' 
    }
     
     
})

//logout
logout.addEventListener('click',(event)=>{
       const modalLogout = document.querySelector('[data-logout-attribute]')
      
       
       
       const bounds = event.target.parentNode.parentNode.getBoundingClientRect();
        
       const left = bounds.x + Math.floor(bounds.width/2)-50
       const top = bounds.y
       modalLogout.style.left = `${left}px`
       modalLogout.style.top = `${top+50}px`
       modalLogout.classList.toggle('modal-open-logout')
      
       
})


//course nav tab functionality

const courseNavLinks = document.querySelectorAll('.course-nav')
courseNavLinks.forEach((courseNavLink)=>{
     
     courseNavLink.addEventListener('click',(event)=>{
          courseNavLinks.forEach((courseNavLink)=>{
               courseNavLink.classList.remove('active')
          })
          event.target.classList.add('active')
const id = event.target.innerText.toLowerCase()
 const tabData = data.find((val)=>{
      return val.name==id
 })
 
 
 document.querySelector('.completed-count').innerText = tabData.completed.count.toString()
 document.querySelector('.completed-title').innerText = tabData.completed.title.toString()
 document.querySelector('.unfinished-count').innerText = tabData.unfinished.count.toString()
 document.querySelector('.unfinished-title').innerText = tabData.unfinished.title.toString()
 const taskList = document.querySelector('ul.task-list')
  taskList.innerText = ''
 tabData.list.map((item)=>{
               const li = document.createElement('li')
               li.innerText = item
               taskList.appendChild(li)
     })
     })
})



//chart plots
const labels = ['January','February','March','April','May','June'];
const dataChart = {
    labels: labels,
    datasets: [{
      label: 'Kevins Score in Last Half Year',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [10, 57, 35, 27, 20, 30, 45],
    }]
  };
  const config = {
    type: 'line',
    data: dataChart,
    options: {}
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

const logoutUser=(bool)=>{
    bool?window.location = './logout.html':window.location.reload()
}