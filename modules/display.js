const portofolio = document.querySelector('.portofolio-p');
const div = document.createElement('div');
div.className = 'container';
let display = '';

function displayUi(project) {
  project.forEach((item) => {
    display += `
    <a href="${item.liveLink}" class="card">
            <img src=${item.image} alt=${item.title}/>

            <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}
                <ul>
                <li> ${item.languaage[0]}</li>
                <li> ${item.languaage[1]}</li>
                <li> ${item.languaage[2]}</li>
                </ul>
            </div>
    </a>
        `;
  });
  portofolio.innerHTML = display;
}
export default displayUi;