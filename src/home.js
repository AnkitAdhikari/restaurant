export default function (container, nav, menu) {
    container.innerHTML = '';
    container.insertAdjacentHTML('beforeend', ` <div class="header">
    <h1 class="brand-name">Welcome to Savory Haven</h1>
    <p class="brand-content">
      Welcome to Savory Haven, where every dish is a delicious journey!
      Indulge in culinary delights that will tantalize your taste buds and
      leave you craving for more. Experience gastronomic bliss with us!
    </p>
    <button class="cta">Discover The Menu</button>
  </div>`)

    document.querySelector('.cta').addEventListener('click', () => {
        nav.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.menu-btn').classList.add('active');
        menu(container);
    })
}