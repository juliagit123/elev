document.addEventListener('DOMContentLoaded', () => {
    const langPrefix = /^\/(en|pt-br)(?=\/|$)/i;

    const normalize = (path) => {

      try { path = new URL(path, window.location.origin).pathname; } catch (e) {}
      return path
        .replace(langPrefix, '')          
        .replace(/\/index\.html?$/i, '')  
        .replace(/\.html?$/i, '')         
        .replace(/\/+$/,'')               
        .toLowerCase() || '/';
    };

    const current = normalize(window.location.pathname);

    document.querySelectorAll('nav a[href]').forEach(a => {
      const target = normalize(a.getAttribute('href'));

      const isHome = target === '/';
      const match  = current === target || (isHome && current === '/');

      if (match) a.classList.add('active');
    });
  });