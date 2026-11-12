// ===== Constantes (equivalem às "const real" do Portugol) =====
const COTACOES = {
  dolar:   { nome: "Dólar",   simbolo: "US$", valor: 5.50 },
  euro:    { nome: "Euro",    simbolo: "€",   valor: 6.16 },
  bitcoin: { nome: "Bitcoin", simbolo: "₿",   valor: 426000.00 }
};
const TAXA = 0.1;

const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const el = id => document.getElementById(id);

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
  el("moeda").value = "dolar";
  el("erro").classList.add("d-none");
  el("relatorio").classList.add("d-none");
  el("valorReal").focus();
}

// ===== Eventos =====
el("textoTaxa").textContent = (TAXA * 100) + "%";
el("valorReal").addEventListener("input", formatarCampo);
el("btnConverter").addEventListener("click", converter);
el("btnLimpar").addEventListener("click", limpar);
el("valorReal").addEventListener("keydown", e => { if (e.key === "Enter") converter(); });