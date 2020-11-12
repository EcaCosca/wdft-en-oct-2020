function getContent(lang) {
  if (lang === 'en') {
    return 'Intensive courses & bootcamps in Web Development, UX/UI Design, Data Analytics & Cybersecurity'
  }
  else if (lang === 'es') {
    return 'Cursos intensivos y bootcamps de desarrollo web, diseño UX/UI, análisis de datos y ciberseguridad'
  }
}


module.exports = getContent;