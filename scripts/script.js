
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // impede o recarregamento da página

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso! Em breve entrarei em contato.");
        form.reset(); // limpa os campos
      } else {
        alert("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua internet.");
    }
  });
