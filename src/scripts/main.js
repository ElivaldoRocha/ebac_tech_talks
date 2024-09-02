AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function () {
  const agora = new Date();
  const agoraEmSegundos = agora.getTime();
  const diferencaEmMilisegundos = timeStampDoEvento - agoraEmSegundos;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horasEmMs = 1000 * 60 * 60;
  const minutosEmMs = 1000 * 60;

  const diasAteEvento = Math.floor(diferencaEmMilisegundos / diaEmMs);

  const horasAteEvento = Math.floor(
    (diferencaEmMilisegundos % diaEmMs) / horasEmMs
  );

  const minutosAteEvento = Math.floor(
    (diferencaEmMilisegundos % horasEmMs) / minutosEmMs
  );

  const segundosAteEvento = Math.floor(
    (diferencaEmMilisegundos % minutosEmMs) / 1000
  );

  // console.log(diasAteEvento);
  // console.log(horasAteEvento);
  // console.log(minutosAteEvento);
  // console.log(segundosAteEvento);

  document.getElementById(
    "contador"
  ).innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

  if (diasAteEvento <= 0) {
    clearInterval(contaHoras);
    document.getElementById("contador").innerHTML = `Evento Expirado`;
  }
}, 1000);
