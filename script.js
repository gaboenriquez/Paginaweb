/* Selector de idioma, menú móvil y revelado al hacer scroll.
   El español vive en el HTML. El inglés vive aquí, en el diccionario EN.
   Para traducir un texto nuevo: ponle data-i18n="clave" en el HTML y añade la clave abajo. */

(function () {
  const EN = {
    "nav.about": "About",
    "nav.work": "Work",
    "nav.ai": "Applied AI",
    "nav.exp": "Experience",
    "nav.notes": "Notes",
    "nav.contact": "Contact",

    "hero.eyebrow": "Agroindustry strategy · OxG hybrids · Sustainability",
    "hero.title": "Oil palm that yields more and <span class=\"accent-italic\">restores</span> the landscape.",
    "hero.lede": "MSc in Ecology and Biodiversity with 19+ years leading strategy, productivity and sustainability in the oil palm agroindustry.",
    "cta.email": "Email me",
    "cta.linkedin": "View LinkedIn",

    "about.title": "Every technical decision in the field is also a sustainability decision.",
    "about.p1": "I create knowledge and strategic direction to transform the oil palm industry into a model of sustainability, productivity and climate resilience. I align agroindustrial operations with global ESG standards and with the realities of companies and producers across Latin America.",
    "about.p2": "I lead initiatives that integrate OxG hybrid systems, artificial pollination with NAA and climate-smart agronomy to raise yields while restoring ecosystems. I guide companies and organizations through RSPO and EUDR compliance with real data, not just frameworks.",
    "about.p3": "I design data-driven programs that deliver measurable results for the environment, communities and business performance. And I build artificial intelligence solutions so the agroindustry can decide with better information.",

    "work.title": "Lines of work",
    "work.a.title": "Artificial intelligence applied to the <em>agroindustry</em>",
    "work.a.body": "I build solutions with language models and data analysis for oil palm companies: plot-level productivity diagnostics, predictive models for yield and extraction rate, strategic planning and training for technical and management teams.",
    "tag.data": "Data",
    "tag.strategy": "Strategy",
    "work.b.title": "OxG hybrid adoption and NAA pollination",
    "work.b.body": "I lead the transition from Elaeis guineensis to OxG hybrids at company and regional scale: replanting decisions, early crop management and artificial pollination protocols with NAA to secure bunches per palm and yield.",
    "tag.replanting": "Replanting",
    "work.c.title": "Improving oil extraction rate",
    "work.c.body": "Nutrition, water management and harvest timing strategies to lift OER and fresh fruit bunches per hectare, with indicators that support agronomic management decisions.",
    "tag.nutrition": "Nutrition",
    "tag.harvest": "Harvest",
    "work.d.title": "Traceability and EUDR / RSPO compliance",
    "work.d.body": "Certified lead auditor for RSPO Principles and Criteria 2018 and RSPO Supply Chain 2020. I translate due diligence, High Conservation Value and traceability requirements into verifiable processes for the company.",

    "ai.eyebrow": "Artificial intelligence in agronomy",
    "ai.statement": "AI fluency will be as essential for running an agroindustry as soil science. I am building that capacity in my organization.",
    "ai.1.title": "Agronomic data analysis",
    "ai.1.body": "I explore production, climate, foliar and soil datasets with Python and language models as reasoning partners: correlations, yield prediction models and plot-by-plot diagnostics.",
    "ai.2.title": "Strategic planning",
    "ai.2.body": "I structure strategic plans, protocols and targets for organizations and technical teams with AI support, making sure every recommendation stays anchored in field evidence.",
    "ai.3.title": "Training materials",
    "ai.3.body": "I design guides, workshops and content for executives, technicians and growers, adapted to each context and written in language that makes sense on the plantation.",
    "ai.4.title": "Capacity in the organization",
    "ai.4.body": "I train technical and management teams to use AI with judgment: what to ask, how to verify and where the limits are. The tool does not replace agronomic judgment, it amplifies it.",
    "ai.tools": "Tools",

    "exp.title": "Experience",
    "exp.1.when": "2018 - Present",
    "exp.1.role": "Head of Extension, Northern Zone",
    "exp.1.body": "I lead Cenipalma's technical strategy for Colombia's Northern Zone: 9 departments and 13 producer nuclei. I set priorities for productivity, OxG hybrid adoption and NAA pollination, OER improvement and EUDR traceability compliance. I lead the team that turns applied research into measurable agronomic and sustainability outcomes for the companies in the region.",
    "exp.2.role": "Extension Specialist",
    "exp.2.body": "Productivity strategies for companies and growers in the Northern and Eastern zones: nutrition and harvest timing programs, diagnosis of limiting factors and support through the transition to OxG hybrids.",
    "exp.3.role": "Operations Coordinator",
    "exp.3.body": "Ran the day-to-day operation of a commercial plantation: harvest, irrigation, nutrition, pest and disease monitoring and workforce coordination. Closed inherited operational and administrative gaps and built a culture of agronomic best practice with performance indicators for management.",
    "exp.4.role": "Independent oil palm consultant",
    "exp.4.where": "Plantations in Cesar and Bolívar",
    "exp.4.body": "Technical assistance to several commercial plantations at once: agronomic assessments, tailored assistance plans and advice on nutrition, harvest and pest management across diverse agroecological conditions.",

    "edu.title": "Education and certifications",
    "edu.h.academic": "Academic background",
    "edu.1": "MSc in Ecology and Biodiversity",
    "edu.2": "Agroforestry Engineer",
    "edu.3": "Diploma in Coaching",
    "edu.h.certs": "Certifications",
    "cert.1": "RSPO Principles and Criteria 2018 Lead Auditor",
    "cert.2": "RSPO Supply Chain 2020 Lead Auditor",
    "cert.3": "High Conservation Value (HCV) Assessor",
    "cert.3.by": "HCV Assessor Training Course",

    "notes.title": "Notes and experiences",
    "notes.lede": "Field lessons, readings and experiments with data and AI in agronomy. Written without hurry and without formulas.",
    "note.1.title": "AI as a thinking partner in the agroindustry",
    "note.1.body": "Why anyone leading an agroindustry should treat language models like a colleague who asks good questions, not like a calculator.",
    "note.read": "Read",
    "notes.more": "More notes on the way. If you want to discuss one, email me.",

    "contact.title": "Let's talk palm, landscapes and data.",
    "contact.lede": "Open to collaborations in sustainability strategy, agroindustrial productivity, RSPO and EUDR compliance, and AI adoption in organizations.",
    "contact.email": "Email"
  };

  const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const ES = {};
  nodes.forEach((el) => { ES[el.dataset.i18n] = el.innerHTML; });

  const buttons = Array.from(document.querySelectorAll(".lang button"));

  function apply(lang) {
    const dict = lang === "en" ? EN : ES;
    nodes.forEach((el) => {
      const key = el.dataset.i18n;
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.documentElement.lang = lang;
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    try { localStorage.setItem("lang", lang); } catch (e) { /* almacenamiento no disponible */ }
  }

  buttons.forEach((b) => b.addEventListener("click", () => apply(b.dataset.lang)));

  let initial = "es";
  try { initial = localStorage.getItem("lang") || initial; } catch (e) { /* ignorar */ }
  if (initial === "en") apply("en");

  // Menú móvil
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", (e) => {
      if (e.target.tagName === "A") { links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
    });
  }

  // Revelado al entrar en pantalla (sin listeners de scroll)
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }
})();
