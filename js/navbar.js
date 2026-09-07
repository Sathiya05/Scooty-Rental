(function () {
  var base = document.getElementById('navbar');
  if (!base) return;

  var dropdowns = [
    {
      label: 'Home',
      items: [
        { label: 'Home 1', href: 'index.html' },
        { label: 'Home 2', href: 'home2.html' }
      ]
    },
    {
      label: 'Dashboard',
      items: [
        { label: 'User Dashboard', href: 'user-dashboard.html' },
        { label: 'Admin Dashboard', href: 'admin-dashboard.html' }
      ]
    }
  ];

  var flatLinks = [
    { label: 'About', href: 'about.html' },
    { label: 'Fleet', href: 'fleet.html' },
    { label: 'Pricing', href: 'pricing.html' },
    { label: 'Coverage', href: 'coverage.html' },
    { label: 'Safety', href: 'safety.html' },
    { label: 'Contact', href: 'contact.html' }
  ];

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  function isActive(l) {
    return currentPage === l.href;
  }

  function activeDesk(l) {
    return isActive(l) ? ' bg-primary/10 text-primary dark:text-primary' : '';
  }

  function activeMob(l) {
    return isActive(l) ? ' bg-primary/10 text-primary dark:text-primary' : '';
  }



  function chevron() {
    return '<svg class="pointer-events-none h-4 w-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25 12 15.75 4.5 8.25"/></svg>';
  }

  function dropdownDesk(d) {
    var hasActive = d.items.some(isActive);
    var items = d.items.map(function (i) {
      return '<a href="' + i.href + '" class="block rounded-lg px-3 py-2 text-sm font-medium ' + (isActive(i) ? 'bg-primary/10 text-primary dark:text-primary' : 'text-slate-600 transition hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:text-primary') + '">' + i.label + '</a>';
    }).join('');
    return '<div class="relative group">' +
      '<button type="button" aria-haspopup="true" class="nav-dd inline-flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold ' + (hasActive ? 'bg-primary/10 text-primary dark:text-primary' : 'text-slate-600 transition hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:text-primary') + '">' + d.label + chevron() + '</button>' +
      '<div class="invisible absolute start-0 top-full z-50 w-56 translate-y-1 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-slate-700 dark:bg-slate-900">' + items + '</div>' +
    '</div>';
  }

  function linkDesk(l) {
    return '<a href="' + l.href + '" class="inline-flex items-center whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold ' + (isActive(l) ? 'bg-primary/10 text-primary dark:text-primary' : 'text-slate-600 transition hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:text-primary') + '">' + l.label + '</a>';
  }

  function dropdownMob(d) {
    var hasActive = d.items.some(isActive);
    var items = d.items.map(function (i) {
      return '<a href="' + i.href + '" class="block rounded-lg px-3 py-2 text-sm font-medium ' + (isActive(i) ? 'bg-primary/10 text-primary dark:text-primary' : 'text-slate-600 transition hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:text-primary') + '">' + i.label + '</a>';
    }).join('');
    return '<div class="dd-mob">' +
      '<button type="button" aria-haspopup="true" class="nav-dd-m flex w-full items-center justify-between rounded-full px-4 py-2 text-sm font-semibold ' + (hasActive ? 'bg-primary/10 text-primary dark:text-primary' : 'text-slate-600 transition hover:bg-primary/10 hover:text-primary dark:text-slate-300 dark:hover:text-primary') + '">' + d.label + chevron() + '</button>' +
      '<div class="dd-mob-panel hidden pl-3 pt-1">' + items + '</div>' +
    '</div>';
  }

  var deskHtml = dropdowns.slice(0, 1).map(dropdownDesk).join('') + flatLinks.map(linkDesk).join('') + dropdowns.slice(1).map(dropdownDesk).join('');
  var mobHtml = dropdowns.slice(0, 1).map(dropdownMob).join('') + flatLinks.map(linkDesk).join('') + dropdowns.slice(1).map(dropdownMob).join('');

  base.innerHTML =
    '<header class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/90">' +
      '<nav class="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">' +
        '<a href="index.html" class="flex shrink-0 items-center gap-2.5">' +
          '<span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30"><svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg></span>' +
          '<span class="leading-tight"><span class="block text-base font-extrabold tracking-tight text-slate-900 dark:text-white">City<span class="text-primary">Ride</span></span><span class="block text-[10px] font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">Scooter &amp; Moped Rental</span></span>' +
        '</a>' +
        '<div class="hidden min-w-0 flex-1 items-center justify-center gap-0.5 xl:flex">' + deskHtml + '</div>' +
        '<div class="flex shrink-0 items-center gap-1.5 sm:gap-2">' +
          '<button type="button" id="nav-theme" aria-label="Toggle dark mode" class="hidden h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition hover:bg-secondary hover:text-black xl:flex">' +
            '<svg class="h-5 w-5 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M5.28 18.72l-1.06 1.06M19.28 5.28l1.06-1.06M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>' +
            '<svg class="h-5 w-5 hidden dark:block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 21.64 13Z"/></svg>' +
          '</button>' +
          '<button type="button" id="nav-dir" aria-label="Toggle text direction" class="hidden h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary transition hover:bg-secondary hover:text-black xl:flex">' +
            '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h10.5"/></svg>' +
          '</button>' +
          '<a href="login.html" class="hidden rounded-full bg-primary px-5 py-2 text-sm font-bold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-800 xl:inline-flex">Login</a>' +
           '<a href="signup.html" class="hidden rounded-full bg-secondary px-5 py-2 text-sm font-bold text-black shadow-lg shadow-secondary/30 transition hover:bg-secondary-600 xl:inline-flex">Sign Up</a>' +

          '<button type="button" id="nav-burger" aria-label="Toggle menu" class="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-primary hover:text-primary xl:hidden dark:border-slate-700 dark:text-slate-300">' +
            '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>' +
          '</button>' +
        '</div>' +
      '</nav>' +
      '<div id="nav-mobile" class="hidden border-t border-slate-200 bg-white/95 px-4 py-4 xl:hidden dark:border-slate-800 dark:bg-slate-950/95">' +
        '<div class="flex flex-col gap-1">' + mobHtml + '</div>' +
        '<div class="mt-4 flex gap-2">' +
          '<button type="button" id="nav-theme-m" aria-label="Toggle dark mode" class="flex-1 flex items-center justify-center gap-2 rounded-full bg-secondary/10 px-5 py-2.5 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-black">' +
            '<svg class="h-5 w-5 dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1.5M12 19.5V21M4.22 4.22l1.06 1.06M18.72 18.72l1.06 1.06M3 12h1.5M19.5 12H21M5.28 18.72l-1.06 1.06M19.28 5.28l1.06-1.06M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Z"/></svg>' +
            '<svg class="h-5 w-5 hidden dark:block" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.64 13a1 1 0 0 0-1.05-.14 8.05 8.05 0 0 1-3.37.73 8.15 8.15 0 0 1-8.14-8.1 8.59 8.59 0 0 1 .25-2A1 1 0 0 0 8 2.36 10.14 10.14 0 1 0 21.64 13Z"/></svg>' +
            '<span>Theme</span>' +
          '</button>' +
          '<button type="button" id="nav-dir-m" aria-label="Toggle text direction" class="flex-1 flex items-center justify-center gap-2 rounded-full bg-secondary/10 px-5 py-2.5 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-black">' +
            '<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h10.5"/></svg>' +
            '<span dir="ltr">Direction</span>' +
          '</button>' +
        '</div>' +
        '<div class="mt-3 flex gap-3">' +
          '<a href="login.html" class="flex-1 rounded-full bg-secondary px-5 py-2.5 text-center text-sm font-bold text-black transition hover:bg-secondary-600">Login</a>' +
          '<a href="signup.html" class="flex-1 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-bold text-white transition hover:bg-primary-800">Sign Up</a>' +
        '</div>' +
      '</div>' +
    '</header>';

  var burger = document.getElementById('nav-burger');
  var mobile = document.getElementById('nav-mobile');
  if (burger && mobile) {
    burger.addEventListener('click', function () {
      var open = mobile.classList.toggle('hidden') === false;
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    mobile.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        if (!a.closest('.dd-mob-panel')) mobile.classList.add('hidden');
      });
    });
  }

  mobile.querySelectorAll('.nav-dd-m').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var panel = btn.nextElementSibling;
      panel.classList.toggle('hidden');
      btn.querySelector('svg').classList.toggle('rotate-180');
    });
  });

  var themeBtn = document.getElementById('nav-theme');
  if (themeBtn) themeBtn.addEventListener('click', function () { if (window.SRM) SRM.toggleTheme(); });

  var dirBtn = document.getElementById('nav-dir');
  if (dirBtn) dirBtn.addEventListener('click', function () { if (window.SRM) SRM.toggleDir(); });

  var themeBtnM = document.getElementById('nav-theme-m');
  if (themeBtnM) themeBtnM.addEventListener('click', function () { if (window.SRM) SRM.toggleTheme(); });

  var dirBtnM = document.getElementById('nav-dir-m');
  if (dirBtnM) dirBtnM.addEventListener('click', function () { if (window.SRM) SRM.toggleDir(); });
})();
