const list = document.querySelector('div ol');

// delete books
list.addEventListener('click', e => {
 if(e.target.className == 'tick'){
  const li = e.target.parentElement;
  list.removeChild(li);
 }
});


//add
const addForm = document.forms['enter'];

addForm.addEventListener('submit', e => {
 e.preventDefault();
 const value = addForm.querySelector('input[type="text"]').value;

 //create element
 const li = document.createElement('li')
 const task = document.createElement('span')
 const deleteBtn = document.createElement('span')

 // add content
 deleteBtn.textContent = 'done';
 task.textContent = value;

 // add classes
 task.classList.add('task');
 deleteBtn.classList.add('tick');

 // append to document
 li.appendChild(task);
 li.appendChild(deleteBtn);
 list.appendChild(li);

 addForm.reset();
});


//clear list
const clear = document.querySelector('.clear');

clear.addEventListener('click', e => {
 // const content = document.querySelector('#list');
 const li = document.querySelector('#list ol li');
 list.innerHTML = '';
})

