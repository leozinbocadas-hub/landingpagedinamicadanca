/**
 * Scripts de proteção contra clonagem e inspeção de código.
 * Implementa travas de domínio, desativa atalhos e detecção de DevTools.
 */

export const initSecurity = () => {
  if (typeof window === 'undefined') return;

  // 1. Trava de Domínio (Substitua pelo seu domínio real se desejar)
  // Se quiser que funcione apenas em um domínio específico, descomente e ajuste:
  /*
  const authorizedDomain = "seudominio.com";
  if (window.location.hostname !== authorizedDomain && window.location.hostname !== "localhost") {
      document.documentElement.innerHTML = "<h1>Acesso Não Autorizado</h1>";
      window.location.replace("https://" + authorizedDomain);
  }
  */

  // 2. Bloqueio de Clique Direito e Seleção de Texto
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  
  // 3. Bloqueio de Atalhos (F12, Ctrl+U, Ctrl+S, Ctrl+Shift+I)
  document.addEventListener('keydown', (e) => {
    // Bloqueia F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    
    // Bloqueia Ctrl+U (Ver código fonte)
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
    
    // Bloqueia Ctrl+S (Salvar página)
    if (e.ctrlKey && e.keyCode === 83) {
      e.preventDefault();
      return false;
    }

    // Bloqueia Ctrl+Shift+I (Inspecionar)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      e.preventDefault();
      return false;
    }

    // Bloqueia Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      e.preventDefault();
      return false;
    }
    
    // Bloqueia Ctrl+Shift+C (Inspecionar Elemento)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
      e.preventDefault();
      return false;
    }
  });

  // 4. Detecção de DevTools com Debugger Loop (Pílula de Veneno)
  // Isso causa um lag imenso se o DevTools estiver aberto, dificultando o uso.
  setInterval(() => {
    const startTime = performance.now();
    debugger;
    const endTime = performance.now();
    if (endTime - startTime > 100) {
      console.clear();
      // Opcional: Redirecionar se detectar inspeção
      // window.location.reload();
    }
  }, 1000);

  // 5. Limpar console constantemente
  setInterval(() => {
    console.clear();
    console.log("%cInterrupção: Acesso ao código fonte desativado por segurança.", "color: red; font-size: 20px; font-weight: bold;");
  }, 2000);
};
