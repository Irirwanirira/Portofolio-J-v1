const portofolio = document.querySelector('.portofolio-p');
const hamburger = document.querySelector('.humburger-menu');
const Nav = document.querySelector('.navs');
const NavLinks = document.querySelectorAll('.nav-links');

const div = document.createElement('div');
div.className = 'container';

const projects = [
  {
    id: 1,
    image: './image/todo.png',
    title: 'Todo List',
    description: 'A user-friendly and responsive app that allows users to easily track his/her daily T0 D0. The user is able to add a new to-do, Edit a current to-do, and Delete a to-do. This app allows users to store all changes in Local storage so user can be able to see his/her stored data anytime.',
    languaage: ['HTML', 'CSS', 'JavaScript'],
    livelink: 'https://magical-torte-c172f0.netlify.app/',
  },

  {
    id: 2,
    image: './image/calculator.png',
    title: 'Math magician',
    description: ' This is a simple app calculator, which helps to operate different basic mathematical operations like addition, multiplication, subtraction, and division.',
    languaage: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://magical-torte-c172f0.netlify.app/',
  },

  {
    id: 3,
    image: './image/rockets.png',
    title: 'Space Traveller',
    description: 'This is a react project that renders rocket data as well as mission data from an API onto the UI. This SPA allows users to reserve rockets and join missions, once that is done their data will be rendered onto a profile page showing what has been reserved and/or joined.',
    languaage: ['HTML', 'CSS', 'React'],
    liveLink: 'https://deploy-preview-32--strong-heliotrope-adde83.netlify.app/',
  },

  {
    id: 4,
    image: './image/transact.png',
    title: 'E-neza TrANZACT',
    description: 'E-neza App is a franchised online mobile application that allows the user to manage his/her budget: they have a list of transactions associated with a category so that the user can see how much money they spend on a particular category.',
    languaage: ['HTML', 'CSS', 'Ruby-on-Rail'],
    liveLink: 'https://budget-app-deploy.onrender.com/',
  },
  {
    id: 4,
    image: './image/library.png',
    title: 'Library',
    description: 'This is a library app that helps to control the library activities, it helps users to add books of their own and reserve books for reading if they want, all the library operations are saved on the database which is built with ruby on rails, it is simple to use for everyone.',
    languaage: ['HTML', 'CSS', 'Ruby-on-Rails '],
    liveLink: 'https://frontend-libba.onrender.com/signin',
  },
  {
    id: 4,
    image: './image/download.jpeg',
    title: 'To Be Added',
    description: ' can help you build a product, feature or a website. look through some of my work and experience! if you like what you see and have a project you need codeded, dont hesitate to contact me',
    languaage: ['HTML', 'SCSS', 'Ruby'],
    liveLink: '#',
  },
];

const display = projects.map((item) => `
        <a href="${item.liveLink}" class="card">
                <img src=${item.image} alt=${item.title}/>

                <div>
                    <h3>${item.title}</h3>
                    <p>${item.description}
                    <ul>
                        <li>${item.languaage[0]}</li>
                        <li>${item.languaage[1]}</li>
                        <li>${item.languaage[2]}</li>
                    </ul>
                </div>
        </a>
    `);

div.innerHTML = display;
portofolio.append(div);

const toggle = () => {
  hamburger.classList.toggle('active');
  Nav.classList.toggle('active');
};

NavLinks.forEach((element) => {
  element.addEventListener('click', () => {
    hamburger.classList.remove('active');
    Nav.classList.remove('active');
  });
});

hamburger.addEventListener('click', toggle);
