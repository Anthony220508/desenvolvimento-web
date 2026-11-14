// Preços do cardápio (R$)
const precos = { calabresa: 40, marguerita: 45, quatro: 52 };

// Funções do exercício da pizzaria
const calcularTotal = (preco, qtd) => preco * qtd;
const aplicarDesconto = (valor, percentual) => valor - valor * percentual / 100;

const form = document.querySelector("#formPedido");
form.addEventListener("submit", (e) => {
 e.preventDefault();
 const nome = document.querySelector("#nome").value.trim();
 const aviso = document.querySelector("#aviso");
 if (nome === "") {
   aviso.innerHTML = '<div class="alert alert-warning">' +
     'Informe o nome do cliente.</div>';
   return;
 }
 aviso.innerHTML = "";
 const pizza = document.querySelector("#pizza").value;
 const qtd = Number(document.querySelector("#qtd").value);
 let total = calcularTotal(precos[pizza], qtd);
 if (document.querySelector("#vip").checked) {
   total = aplicarDesconto(total, 10);
 }
 document.querySelector("#recibo")
   .innerHTML =
   "Cliente: <strong>" + nome +
   "</strong><br>Pedido: " +
   qtd + " x " + pizza +
   "<br>Total: R$ " +
   total.toFixed(2);
 const modalEl =
   document.querySelector("#modalPedido");
 bootstrap.Modal
   .getOrCreateInstance(modalEl)
   .show();
});
