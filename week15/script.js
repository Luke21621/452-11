/*I am Luke*/
document.addEventListener('DOMContentLoaded', () => {
    const DM1 = document.getElementById('DM1');
    const addTaskButton = document.querySelector('.add');
    const DM2 = document.getElementById('DM2');

    addTaskButton.addEventListener('click', () => {
        const taskText = DM1.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.classList.add('remove');
            removeButton.addEventListener('click', () => {
                DM2.removeChild(li);
            });

            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.classList.add('complete');
            completeButton.addEventListener('click', () => {
                li.style.textDecoration = 'line-through';
            });

            li.appendChild(removeButton);
            li.appendChild(completeButton);

            DM2.appendChild(li);
            DM1.value = '';
        }
    });
});