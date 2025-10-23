const toggle = document.getElementById('themeToggle');
const html = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
if(currentTheme==='dark') html.setAttribute('data-theme','dark');
toggle.addEventListener('click',()=>{
  const isDark = html.getAttribute('data-theme')==='dark';
  if(isDark){
    html.removeAttribute('data-theme');
    localStorage.setItem('theme','light');
  }else{
    html.setAttribute('data-theme','dark');
    localStorage.setItem('theme','dark');
  }
});