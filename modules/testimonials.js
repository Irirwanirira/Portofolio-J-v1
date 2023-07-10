const testimonials = document.querySelector('.testimonials');
testimonials.style.cssText = `
width: 50%;
padding: 1rem;
box-shadow: 1px 0px 8px 1px;
`

const div = document.createElement('div');

const arrows = document.createElement('div');
arrows.style.cssText = `text-align: center; margin-top: 1rem`
const left = document.createElement('button');
left.innerText = '<';
left.style.cssText =`
padding: 0.5rem;
background-color: #f55800;
border: none;
color: white;
margin: 0.5rem;
cursor: pointer
`

const rigth = document.createElement('button');
rigth.innerText = '>';
rigth.style.cssText =`
padding: 0.5rem;
background-color: #f55800;
border: none;
color: white;
cursor: pointer

`

arrows.append(left, rigth)

const people = [
    {
        "id": 1,
        "picture": "./image/evans.jpeg",
        "names": 'Evans Kupour',
        "role": "amazon",
        "description": "Joseph Irirwanirira is one of the best among all the people I have ever worked with. As I remember, Joseph Irirwanirira is very productive, hardworking, broad-minded, and forward-thinking. Intelligent, ambitious, energetic, and proactive perfectionist. The desire for proficiency and education makes Joseph Irirwanirira a valuable asset to the team. Working with Joseph Irirwanirira is a signature of success."
    },
    {
        "id": 2,
        "picture": "./image/joel.jpeg",
        "names": 'Kugonza Joel',
        "role": "amazon2",
        "description": "Joseph is a partner and friend. I have worked with Joseph on different projects remotely and asynchronously with developers in different parts of the world and I always sense his keen desire to learn and tackle challenges as they come. Joseph also has many desirable qualities such as being a good communicator, collaborator, and very willing to give help when need arises. These professional skills in addition to his technical prowess are definitely what any team craves. He is more than ready to join the workforce."
    },
    { 
        "id": 3,
        "picture": "./image/ken.jpeg",
        "names": 'Kenny Egun',
        "role": "amazon3",
        "description": "He's a serial learner, always ready to try new technologies! Such a great person to have in your team and organization!"
    },
    {
        "id": 4,
        "picture": "./image/kareem.jpeg",
        "names": 'kareem Magdy Wilson',
        "role": "amazon4",
        "description": "I spent almost 2 months learning with Joseph, I have to say that I learned a lot from him, he's a positive, ambitious person, and he knows a lot technically. I was experiencing frustration soon, but when I was talking to Joseph he filled me with positive energy and restored me the strength to complete my educational journey."
    },
    {       "id": 5,
        "picture": "./image/james.jpeg",
        "names": 'James Asibey Manu',
        "role": "amazon5",
        "description": "I worked with Joseph Irirwanirira at Microverse. I really liked his professionalism and his intelligence.He is a very good leader and a great asset to your company. I strongly recommend Him."
    }
]

let current = 0;

window.addEventListener('DOMContentLoaded', testimonialShow(current))

function testimonialShow(position){
    const ready = people[position]
    
    div.innerHTML = `
    <div class="testimonials">
        <div class="speaker">
            <img class="speaker-img" src="${ready.picture}" alt="">
        </div>
        <div class="speaker-contents">
            <p class="live-speaker">${ready.names}</p>
            <p class="content">${ready.description}</p>
        </div>
    </div>
`;
    testimonials.append(div, arrows)
}

left.addEventListener('click', ()=>{
    current -=1;
    if(current < 0){
        current = people.length -1;
    }
    testimonialShow(current)
})

rigth.addEventListener('click', ()=>{
    current +=1;
    if(current > people.length -1){
        current = 0;
    }
    testimonialShow(current)
})

export default testimonialShow(current) 