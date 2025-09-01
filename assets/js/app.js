// Basic mobile menu toggle and smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.menu-btn');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => {
      links.style.display = links.style.display === 'flex' ? 'none' : 'flex';
      links.style.flexDirection = 'column';
      links.style.gap = '12px';
      links.style.padding = '12px 0';
    });
  }
});


\n// Dark mode toggle with localStorage\n(function(){\n  const key="theme-dark";\n  const set=(on)=>{document.documentElement.classList.toggle("dark",!!on); localStorage.setItem(key,on?"1":"0");};\n  try{ set(localStorage.getItem(key)==="1"); }catch(e){}\n  const btn=document.querySelector(".menu-btn");\n  if(btn){\n    const t=document.createElement("button");\n    t.textContent= document.documentElement.classList.contains("dark")?"Light":"Dark";\n    t.className="menu-btn";\n    t.style.marginLeft="8px";\n    t.addEventListener("click",()=>{\n      const on=!document.documentElement.classList.contains("dark"); set(on); t.textContent=on?"Light":"Dark";\n    });\n    btn.parentNode && btn.parentNode.appendChild(t);\n  }\n})();\n