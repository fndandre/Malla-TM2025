const ramos = {
  "Principios Matemáticos": { requisitos: [], desbloquea: ["Estadística para Ciencias de la Salud"] },
  "Biología Celular": { requisitos: [], desbloquea: [] },
  "Química General": { requisitos: [], desbloquea: ["Química Orgánica"] },
  "Introducción a la Tecnología Médica": { requisitos: [], desbloquea: [] },
  "Taller de Competencias Comunicativas": { requisitos: [], desbloquea: [] },
  "Taller de Competencias para el Aprendizaje": { requisitos: [], desbloquea: [] },
  "Taller de Desarrollo Personal I": { requisitos: [], desbloquea: [] },

  "Biofísica": { requisitos: [], desbloquea: [] },
  "Procedimientos de Enfermería y Primeros Auxilios": { requisitos: [], desbloquea: [] },
  "Química Orgánica": { requisitos: ["Química General"], desbloquea: ["Fundamentos en Bioquímica"] },
  "Anatomía": { requisitos: [], desbloquea: ["Fisiología"] },
  "Histología": { requisitos: [], desbloquea: ["Inmunología Básica"] },
  "Taller de Desarrollo Personal II": { requisitos: [], desbloquea: [] },
  "Cultura y Valores": { requisitos: [], desbloquea: [] },

  "Estadística para Ciencias de la Salud": { requisitos: ["Principios Matemáticos"], desbloquea: ["Fundamentos en Salud Pública"] },
  "Inmunología Básica": { requisitos: ["Histología"], desbloquea: ["Microbiología Básica"] },
  "Fundamentos en Bioquímica": { requisitos: ["Química Orgánica"], desbloquea: ["Bioquímica Clínica Básica", "Gestión de Calidad"] },
  "Fisiología": { requisitos: ["Anatomía"], desbloquea: ["Fisiopatología"] },
  "Bioseguridad": { requisitos: [], desbloquea: [] },
  "Persona y Sentido": { requisitos: [], desbloquea: [] },
  "Inglés Básico I": { requisitos: [], desbloquea: ["Inglés Básico II"] },

  "Fundamentos en Salud Pública": { requisitos: ["Estadística para Ciencias de la Salud"], desbloquea: [] },
  "Ética en Salud": { requisitos: [], desbloquea: [] },
  "Bioquímica Clínica Básica": { requisitos: ["Fundamentos en Bioquímica"], desbloquea: ["Bioquímica Clínica Aplicada"] },
  "Fisiopatología": { requisitos: ["Fisiología"], desbloquea: ["Inmunología Clínica", "Microbiología Clínica", "Hematología Básica"] },
  "Gestión de Calidad": { requisitos: ["Fundamentos en Bioquímica"], desbloquea: ["Gestión de Calidad y Administración de Laboratorio"] },
  "Inglés Básico II": { requisitos: ["Inglés Básico I"], desbloquea: [] },

  "Microbiología Básica": { requisitos: ["Inmunología Básica"], desbloquea: ["Microbiología Clínica", "Diagnóstico Molecular"] },
  "Bioquímica Clínica Aplicada": { requisitos: ["Bioquímica Clínica Básica"], desbloquea: ["Integrado Clínico I"] },
  "Inmunología Clínica": { requisitos: ["Fisiopatología"], desbloquea: ["Parasitología Clínica", "Inmunohematología"] },
  "Gestión de Calidad y Administración de Laboratorio": { requisitos: ["Gestión de Calidad"], desbloquea: [] },

  "Parasitología Clínica": { requisitos: ["Inmunología Clínica"], desbloquea: ["Integrado Clínico I"] },
  "Microbiología Clínica": { requisitos: ["Fisiopatología", "Microbiología Básica"], desbloquea: ["Integrado Clínico I"] },
  "Diagnóstico Molecular": { requisitos: ["Microbiología Básica"], desbloquea: [] },
  "Electivo I Gestión Calidad": { requisitos: [], desbloquea: [] },

  "Inmunohematología": { requisitos: ["Inmunología Clínica"], desbloquea: ["Medicina Transfusional"] },
  "Hematología Básica": { requisitos: ["Fisiopatología"], desbloquea: ["Hematología Clínica", "Metodología de la Investigación"] },
  "Integrado Clínico I": { requisitos: ["Bioquímica Clínica Aplicada", "Microbiología Clínica", "Parasitología Clínica"], desbloquea: ["Metodología de la Investigación"] },
  "Electivo II Gestión Calidad": { requisitos: [], desbloquea: [] },

  "Medicina Transfusional": { requisitos: ["Inmunohematología"], desbloquea: ["Integrado Clínico II"] },
  "Hematología Clínica": { requisitos: ["Hematología Básica"], desbloquea: ["Integrado Clínico II"] },
  "Metodología de la Investigación": { requisitos: ["Hematología Básica", "Integrado Clínico I"], desbloquea: ["Seminario de Investigación"] },
  "Electivo III Gestión Calidad": { requisitos: [], desbloquea: [] },

  "Gestión en Salud": { requisitos: [], desbloquea: [] },
  "Seminario de Investigación": { requisitos: ["Metodología de la Investigación"], desbloquea: [] },
  "Integrado Clínico II": { requisitos: ["Hematología Clínica", "Medicina Transfusional"], desbloquea: [] },

  "Internado Profesional Microbiología/Parasitología Clínica": { requisitos: [], desbloquea: [] },
  "Internado Profesional Química Clínica": { requisitos: [], desbloquea: [] },
  "Internado Profesional Hematología Clínica": { requisitos: [], desbloquea: [] },
  "Internado Profesional Medicina Transfusional": { requisitos: [], desbloquea: [] },
  "Actividad de Titulación": { requisitos: [], desbloquea: [] }
};

const semestres = {
  "1° Semestre": [
    "Principios Matemáticos", "Biología Celular", "Química General", "Introducción a la Tecnología Médica",
    "Taller de Competencias Comunicativas", "Taller de Competencias para el Aprendizaje", "Taller de Desarrollo Personal I"
  ],
  "2° Semestre": [
    "Biofísica", "Procedimientos de Enfermería y Primeros Auxilios", "Química Orgánica", "Anatomía", "Histología",
    "Taller de Desarrollo Personal II", "Cultura y Valores"
  ],
  "3° Semestre": [
    "Estadística para Ciencias de la Salud", "Inmunología Básica", "Fundamentos en Bioquímica", "Fisiología",
    "Bioseguridad", "Persona y Sentido", "Inglés Básico I"
  ],
  "4° Semestre": [
    "Fundamentos en Salud Pública", "Ética en Salud", "Bioquímica Clínica Básica", "Fisiopatología", 
    "Gestión de Calidad", "Inglés Básico II"
  ],
  "5° Semestre": [
    "Microbiología Básica", "Bioquímica Clínica Aplicada", "Inmunología Clínica", 
    "Gestión de Calidad y Administración de Laboratorio"
  ],
  "6° Semestre": [
    "Parasitología Clínica", "Microbiología Clínica", "Diagnóstico Molecular", "Electivo I Gestión Calidad"
  ],
  "7° Semestre": [
    "Inmunohematología", "Hematología Básica", "Integrado Clínico I", "Electivo II Gestión Calidad"
  ],
  "8° Semestre": [
    "Medicina Transfusional", "Hematología Clínica", "Metodología de la Investigación", "Electivo III Gestión Calidad"
  ],
  "9° Semestre": [
    "Gestión en Salud", "Seminario de Investigación", "Integrado Clínico II"
  ],
  "10° Semestre": [
    "Internado Profesional Microbiología/Parasitología Clínica", "Internado Profesional Química Clínica",
    "Internado Profesional Hematología Clínica", "Internado Profesional Medicina Transfusional",
    "Actividad de Titulación"
  ]
};

const aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  for (const [semestre, ramosDelSemestre] of Object.entries(semestres)) {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>${semestre}</h2>`;

    const container = document.createElement("div");
    container.className = "ramo-container";

    ramosDelSemestre.forEach(ramo => {
      const btn = document.createElement("div");
      btn.className = "ramo";
      btn.innerText = ramo;

      if (!puedeDesbloquear(ramo)) {
        btn.classList.add("bloqueado");
      }

      btn.addEventListener("click", () => aprobarRamo(btn, ramo));
      container.appendChild(btn);
    });

    div.appendChild(container);
    contenedor.appendChild(div);
  }
}

function puedeDesbloquear(ramo) {
  const { requisitos } = ramos[ramo] || { requisitos: [] };
  return requisitos.every(r => aprobados.has(r));
}

function aprobarRamo(elemento, ramo) {
  if (elemento.classList.contains("bloqueado")) return;

  if (!aprobados.has(ramo)) {
    aprobados.add(ramo);
    elemento.classList.add("aprobado");

    // Desbloquear los que dependían de este
    document.querySelectorAll(".ramo").forEach(el => {
      const nombre = el.textContent;
      if (ramos[nombre] && ramos[nombre].requisitos.includes(ramo)) {
        if (puedeDesbloquear(nombre)) {
          el.classList.remove("bloqueado");
        }
      }
    });
  }
}

crearMalla();
