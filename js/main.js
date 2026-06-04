(function () {
  "use strict";

  /* año footer */
  var y = document.getElementById("y");
  if (y) y.textContent = new Date().getFullYear();

  /* nav: sombra al hacer scroll */
  var nav = document.getElementById("nav");
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 18) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* nav: menú móvil */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  var scrim = document.getElementById("navScrim");

  function setMenu(open) {
    if (!menu) return;
    menu.classList.toggle("is-open", open);
    if (scrim) scrim.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    }
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(!menu.classList.contains("is-open"));
    });
    if (scrim) scrim.addEventListener("click", function () { setMenu(false); });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 920) setMenu(false);
    });
  }

  /* reveal on scroll */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".reveal");
  if (reduce || !("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("is-inview"); });
  } else {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("is-inview");
          obs.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    els.forEach(function (el) {
      // Si ya está en pantalla o quedó por encima (deep-link), mostrarlo sin esperar scroll.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
        el.classList.add("is-inview");
      } else {
        obs.observe(el);
      }
    });
  }

  /* waitlist (tienda) — sin backend: guarda intención y agradece */
  var wait = document.getElementById("waitlist");
  if (wait) {
    wait.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = wait.querySelector("input[type=email]");
      var msg = document.getElementById("waitMsg");
      if (input && input.checkValidity()) {
        if (msg) msg.textContent = "¡Listo! Te avisamos apenas abramos la tienda. 🍷";
        input.value = "";
      } else if (msg) {
        msg.textContent = "Revisá el correo, parece que falta algo.";
      }
    });
  }

  /* reserva (contacto) — arma un mailto con los datos */
  var reserva = document.getElementById("reservaForm");
  if (reserva) {
    reserva.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!reserva.checkValidity()) { reserva.reportValidity(); return; }
      var data = new FormData(reserva);
      var nombre = (data.get("nombre") || "").toString().trim();
      var exp = (data.get("experiencia") || "").toString();
      var personas = (data.get("personas") || "").toString();
      var fecha = (data.get("fecha") || "").toString();
      var mensaje = (data.get("mensaje") || "").toString().trim();

      var cuerpo =
        "Hola Sin Etiquetas! Quiero reservar una cata.\n\n" +
        "Nombre: " + nombre + "\n" +
        "Experiencia: " + exp + "\n" +
        "Personas: " + personas + "\n" +
        "Fecha tentativa: " + (fecha || "a coordinar") + "\n" +
        "Mensaje: " + (mensaje || "—") + "\n";

      var asunto = "Reserva de cata — " + nombre;
      var mailto = "mailto:consultas@sinetiquetas.club" +
        "?subject=" + encodeURIComponent(asunto) +
        "&body=" + encodeURIComponent(cuerpo);

      var msg = document.getElementById("reservaMsg");
      if (msg) msg.textContent = "Abrimos tu correo con todo listo para enviar. ¿No se abrió? Escribinos a consultas@sinetiquetas.club";
      window.location.href = mailto;
    });
  }
})();
