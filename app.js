const clickBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const deleteBtn = document.querySelector('.close-btn')

clickBtn.addEventListener('click' , function(){
  sidebar.classList.toggle('show-sidebar');
})

deleteBtn.addEventListener('click', function(){
  sidebar.classList.remove('show-sidebar');
})