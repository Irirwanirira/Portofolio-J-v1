const portofolio = document.querySelector('.portofolio-p');
const div = document.createElement('div');
div.className = 'container';
let display = '';

function displayUi(project) {
  project.forEach((item) => {
    display += `
    <div class="card">
      <img src=${item.image} alt=${item.title}/>

      <div class="more-info">
        <h3>${item.title}</h3>
        <p>${item.description}

          <ul class="technology">
            <li> ${item.languaage[0]}</li>
            <li> ${item.languaage[1]}</li>
            <li> ${item.languaage[2]}</li>
          </ul> 
      
        <div class="buttons-link">
          <button class="live">
            <a href="${item.liveLink}" >LIVE DEMO</a>
          </button>
          <button class="source">
            <a href="${item.liveLink}" >SOURCE</a>
          </button>
        </div>

      </div>
    </div>
        `;
  });
  portofolio.innerHTML = display;
}
export default displayUi;

