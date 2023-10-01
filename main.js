let time = document.querySelector('.time');
setInterval(() => {
  show(time)
},
  1000)


function show(content) {
  content.style.color = '#FFF'
  content.textContent = new Date().toLocaleTimeString();

}
