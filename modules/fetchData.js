import displayUi from './display.js';

async function projectfetch() {
  try {
    const res = await fetch('project.json');
    const data = await res.json();
    return displayUi(data);
  } catch (error) {
    return `${error}`;
  }
}

export default projectfetch;
