// theme.js
(function () {
  const KEY = "mf_theme"; // make future theme key
  const root = document.documentElement;

  function applyTheme(theme){
    root.setAttribute("data-theme", theme);
    // يساعد المتصفح في form controls
    root.style.colorScheme = theme === "light" ? "light" : "dark";
    localStorage.setItem(KEY, theme);

    const bDark = document.getElementById("btnThemeDark");
    const bLight = document.getElementById("btnThemeLight");
    if (bDark && bLight){
      bDark.classList.toggle("active", theme === "dark");
      bLight.classList.toggle("active", theme === "light");
    }
  }

  // Default
  const saved = localStorage.getItem(KEY);
  const systemPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = saved || (systemPrefersDark ? "dark" : "light");
  applyTheme(initial);

  // Inject toggle UI automatically (في كل الصفحات)
  document.addEventListener("DOMContentLoaded", () => {
    // لو موجود بالفعل، متحقنش تاني
    if (document.getElementById("mfThemeToggle")) return;

    const wrap = document.createElement("div");
    wrap.id = "mfThemeToggle";
    wrap.className = "theme-toggle";
    wrap.innerHTML = `
      <div class="pill">
        <button id="btnThemeDark" type="button">🌙 دارك</button>
        <button id="btnThemeLight" type="button">☀️ لايت</button>
      </div>
    `;
    document.body.appendChild(wrap);

    document.getElementById("btnThemeDark").onclick = () => applyTheme("dark");
    document.getElementById("btnThemeLight").onclick = () => applyTheme("light");

    // علشان يظبط حالة الاكتيف
    applyTheme(localStorage.getItem(KEY) || initial);
  });
})();
