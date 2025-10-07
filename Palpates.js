```js
const palpitesDeHoje = [
  {
    jogo: "Amazonas x Criciúma",
    palpite: "Vitória do Criciúma",
    visivel: true
},
  {
    jogo: "Goiás x CRB",
    palpite: "Mais de 2.5 gols",
    visivel: false
},
  {
    jogo: "Botafogo-SP x Paysandu",
    palpite: "Ambas equipes marcam",
    visivel: false
}
];

window.onload = function () {
  const lista = document.getElementById("lista-palpites");
  palpitesDeHoje.forEach(item => {
    const li = document.createElement("li");
    if (item.visivel) {
      li.innerHTML = `<strong>${item.jogo}:</strong> ${item.palpite}`;
} else {
      li.innerHTML = `<strong>${item.jogo}:</strong> <em>Palpite bloqueado – envie 200MT via M-Pesa para desbloquear</em>`;
}
    lista.appendChild(li);
});

  const pagamento = document.getElementById("pagamento");
  pagamento.innerHTML = `
    <h3>🔓 Desbloqueie os palpites</h3>
    <p>Envie <strong>200MT</strong> via <strong>M-Pesa</strong> para <strong>+258 8523 19663</strong></p>
    <p>Depois envie o comprovativo via <a href="https://wa.me/258852319663" target="_blank">WhatsApp</a></p>
  `;
};
```
