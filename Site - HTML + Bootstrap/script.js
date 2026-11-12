// ===== Constantes =====
const TAXA = 0.1;
const URL_API = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL";
 
// O "valor" aqui é o valor de reserva (cotação de 03/11/26).
// Se a API funcionar, ele é substituído pela cotação atual.
// "chave" é o nome do bloco que a API devolve para cada moeda.
const COTACOES = {
  dolar:   { nome: "Dólar",   simbolo: "US$", chave: "USDBRL", valor: 5.50 },
  euro:    { nome: "Euro",    simbolo: "€",   chave: "EURBRL", valor: 6.16 },
  bitcoin: { nome: "Bitcoin", simbolo: "₿",   chave: "BTCBRL", valor: 426000.00 }
};
 
const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const el = id => document.getElementById(id);
 
// ===== API de cotações =====
async function carregarCotacoes() {
  const status = el("statusCotacao");
  const botao = el("btnAtualizar");
 
  botao.disabled = true;
  status.textContent = "Carregando cotações...";
 
  try {
    const resposta = await fetch(URL_API);
    if (!resposta.ok) throw new Error("Erro HTTP " + resposta.status);
    const dados = await resposta.json();
 
    // Atualiza o valor de cada moeda com o "bid" (preço de compra)
    for (const moeda of Object.values(COTACOES)) {
      moeda.valor = parseFloat(dados[moeda.chave].bid);
    }
 
    // "timestamp" vem em segundos; o JavaScript espera milissegundos
    const data = new Date(Number(dados.USDBRL.timestamp) * 1000);
    status.textContent = "Cotações atualizadas em " + data.toLocaleString("pt-BR");
    el("relatorio").classList.add("d-none"); // o relatório antigo ficou desatualizado
  } catch (erro) {
    console.error("Falha ao buscar cotações:", erro);
    status.textContent = "Não foi possível atualizar. Usando as cotações anteriores (padrão: 03/11/26).";
  } finally {
    botao.disabled = false;
  }
}

// ===== Máscara de moeda: os dígitos entram pelos centavos =====
// digitar 1 -> 0,01 | 12 -> 0,12 | 1234 -> 12,34 | 123456 -> 1.234,56
function formatarCampo() {
  const campo = el("valorReal");
  const digitos = campo.value.replace(/\D/g, "");

  if (digitos === "") {
    campo.value = "";
    return;
  }

  const numero = parseInt(digitos, 10) / 100;
  campo.value = numero.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

// Lê o campo formatado de volta como número (1.234,56 -> 1234.56)
function lerValorReal() {
  const digitos = el("valorReal").value.replace(/\D/g, "");
  return digitos === "" ? NaN : parseInt(digitos, 10) / 100;
}

// ===== Conversão =====
function converter() {
  const valorReal = lerValorReal();
  const erro = el("erro");

  if (isNaN(valorReal) || valorReal <= 0) {
    erro.textContent = "Informe um valor em reais maior que zero.";
    erro.classList.remove("d-none");
    el("relatorio").classList.add("d-none");
    return;
  }

  if (el("moeda").value === "") {
  erro.textContent = "Escolha a moeda para a conversão.";
  erro.classList.remove("d-none");
  el("relatorio").classList.add("d-none");
  return;
  }

  erro.classList.add("d-none");

  const moeda = COTACOES[el("moeda").value];
  const valorTaxado = valorReal * TAXA;
  const valorLiquido = valorReal - valorTaxado;
  const valorConvertido = valorLiquido / moeda.valor;

  // Bitcoin precisa de mais casas decimais
  const casas = el("moeda").value === "bitcoin" ? 8 : 2;
  const convertidoTexto = valorConvertido.toLocaleString("pt-BR", {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas
  });

  el("resConvertido").textContent = moeda.simbolo + " " + convertidoTexto;
  el("resInformado").textContent = brl.format(valorReal);
  el("resTaxa").textContent = brl.format(valorTaxado);
  el("resLiquido").textContent = brl.format(valorLiquido);
  el("resCotacao").textContent = "1 " + moeda.nome + " = " + brl.format(moeda.valor);
  el("relatorio").classList.remove("d-none");
}

function limpar() {
  el("valorReal").value = "";
  el("moeda").selectedIndex = 0;
  el("erro").classList.add("d-none");
  el("relatorio").classList.add("d-none");
  el("valorReal").focus();
}

// ===== Eventos =====
el("textoTaxa").textContent = (TAXA * 100) + "%";
el("valorReal").addEventListener("input", formatarCampo);
el("btnConverter").addEventListener("click", converter);
el("btnLimpar").addEventListener("click", limpar);
el("btnAtualizar").addEventListener("click", carregarCotacoes);
el("valorReal").addEventListener("keydown", e => { if (e.key === "Enter") converter(); });

// Carrega as cotações ao abrir a página
carregarCotacoes();