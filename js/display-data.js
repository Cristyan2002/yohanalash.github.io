document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const listaDados = document.getElementById("lista-dados");
  const nomeClienteSpan = document.getElementById("cliente-nome");

  if (!listaDados || !nomeClienteSpan) {
    console.error("Elementos para exibição dos dados não encontrados.");
    return;
  }

  function formatarData(dataString) {
    if (!dataString) return "Não informado";
    const [ano, mes, dia] = dataString.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  function adicionarDado(label, valor) {
    if (valor && valor !== "Não informado") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${label}:</strong> ${valor}`;
      listaDados.appendChild(listItem);
    }
  }

  const nomeCompleto = params.get("Nome");
  const nascimento = formatarData(params.get("Data_de_Nascimento"));
  const whatsapp = params.get("WhatsApp");
  const conforto = params.get("Conforto_Procedimento");
  const alergias = params.get("Alergias") || "Nenhuma informação";
  const consentimento =
    params.get("consentimento") === "Aceito"
      ? "Sim, confirmo que li os termos"
      : "Não confirmado";
  const disponibilidade =
    params.getAll("Disponibilidade").join(", ") ||
    "Nenhuma preferência marcada";

  if (nomeCompleto) {
    nomeClienteSpan.textContent = nomeCompleto.split(" ")[0];
  } else {
    nomeClienteSpan.textContent = "querida cliente";
  }

  adicionarDado("Nome Completo", nomeCompleto);
  adicionarDado("Data de Nascimento", nascimento);
  adicionarDado("WhatsApp", whatsapp);
  adicionarDado("Confortável no procedimento", conforto);
  adicionarDado("Alergias", alergias);
  adicionarDado("Disponibilidade", disponibilidade);
  adicionarDado("Termos e Compromisso", consentimento);
});
