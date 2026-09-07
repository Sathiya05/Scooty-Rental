(function () {
  var SRM = window.SRM || (window.SRM = {});
  var THEME_KEY = 'srm-theme';
  var DIR_KEY = 'srm-dir';

  function storedTheme() {
    var t = null;
    try { t = localStorage.getItem(THEME_KEY); } catch (e) {}
    if (t === 'dark' || t === 'light') return t;
    return 'light';
  }
  function getTheme() { return document.documentElement.classList.contains('dark') ? 'dark' : 'light'; }
  function applyTheme(t) { document.documentElement.classList.toggle('dark', t === 'dark'); }
  function setTheme(t) { try { localStorage.setItem(THEME_KEY, t); } catch (e) {} applyTheme(t); document.dispatchEvent(new CustomEvent('srm:theme', { detail: { theme: t } })); }
  function toggleTheme() { setTheme(getTheme() === 'dark' ? 'light' : 'dark'); }

  function getDir() { return document.documentElement.getAttribute('dir') || 'ltr'; }
  function applyDir(d) {
    document.documentElement.setAttribute('dir', d);
    try { localStorage.setItem(DIR_KEY, d); } catch (e) {}
    document.dispatchEvent(new CustomEvent('srm:dir', { detail: { dir: d } }));
  }
  function toggleDir() { applyDir(getDir() === 'rtl' ? 'ltr' : 'rtl'); }

  function init() {
    applyTheme(storedTheme());
    var d = null;
    try { d = localStorage.getItem(DIR_KEY); } catch (e) {}
    if (d === 'rtl' || d === 'ltr') applyDir(d);
    document.dispatchEvent(new CustomEvent('srm:init'));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();

  SRM.getTheme = getTheme;
  SRM.setTheme = setTheme;
  SRM.toggleTheme = toggleTheme;
  SRM.getDir = getDir;
  SRM.applyDir = applyDir;
  SRM.toggleDir = toggleDir;
})();