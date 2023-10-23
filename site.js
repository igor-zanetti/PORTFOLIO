<script>
  document.addEventListener "DOMContentLoaded", function () 
    //Encontra todos os links da barra de navegação
    const links = document.querySelectorAll("#navbar a");

    // Função para rolagem suave
    function scrollSmoothly(e)
      e.preventDefault()
      const targetId = this.getAttribute("href").substring(1); // Remove o "#" do href
      const targetElement = document.getElementById(targetId);
      const topOffset = targetElement.offsetTop;
      window.scroll(
        top: topOffset,
        behavior: "smooth",
      );
    

    // Adiciona o evento de clique a todos os links
    links.forEach(function (link) {
      link.addEventListener("click", scrollSmoothly)
    });
  ;
</script>

