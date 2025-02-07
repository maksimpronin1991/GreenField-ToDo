document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('taskModal');
    const addTaskBtn = document.querySelector('.add-task-btn');
    const closeBtn = document.querySelector('.close');
    const taskForm = document.getElementById('taskForm');
    const modalTitle = document.getElementById('modalTitle');

    // Open modal when Add button is clicked
    addTaskBtn.onclick = () => {
        modalTitle.textContent = 'Add New Task';
        modal.style.display = 'block';
    };

    // Close modal when X is clicked
    closeBtn.onclick = () => {
        modal.style.display = 'none';
    };

    // Close modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    // Handle form submission
    taskForm.onsubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById('taskTitle').value;
        const description = document.getElementById('taskDescription').value;
        const urgency = document.getElementById('taskUrgency').value;
        const importance = document.getElementById('taskImportance').value;

        // Here you would typically save the task data
        console.log({ title, description, urgency, importance });

        // Close the modal
        modal.style.display = 'none';

        // Reset the form
        taskForm.reset();
    };

    // Add click event to Edit buttons
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.onclick = (e) => {
            const listItem = e.target.closest('.tasks-list-item');
            const title = listItem.querySelector('.list-item-title').textContent;
            const description = listItem.querySelector('.list-item-description').textContent;

            // Populate the form
            document.getElementById('taskTitle').value = title;
            document.getElementById('taskDescription').value = description;

            // Open the modal
            modalTitle.textContent = 'Edit Task';
            modal.style.display = 'block';
        };
    });
});