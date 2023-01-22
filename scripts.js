const addActivityBtn = document.querySelector('.add-activity-button');
let activityInput = document.querySelector('#activity-input');
let activitiesContainer = document.querySelector('.activities-container');
colors = [
  'green', 'red', 'blue', 'pink', 'tomato', 'yellow', 'purple'
]
addActivityBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let activity = document.createElement('div');
  activity.classList.add('added-activity');
  let content = document.createElement('p');
  // content.classList.add('new-activity');
  content.textContent = activityInput.value;
  activity.appendChild(content);
  activitiesContainer.appendChild(activity);

  activity.addEventListener('dblclick', () => {
    let activity = document.querySelector('.added-activity');
    activity.remove();
  })

  activity.addEventListener('long-press', () => {
    activity.style.backgroundColor = colors[Math.floor(Math.random(colors) * colors.length)];
    console.log('hi');
  })


  clear(activityInput);
})

function clear(input) {
  input.value = '';
}
