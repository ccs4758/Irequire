document.addEventListener("DOMContentLoaded", function() {
    // Load previously stored data
    loadTasks();
    loadWorkouts();
    loadGoals();
});

// Schedule
function addTask() {
    const taskDate = document.getElementById('task-date').value;
    const taskDescription = document.getElementById('task-description').value;

    if (taskDate && taskDescription) {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push({ date: taskDate, description: taskDescription });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
        document.getElementById('task-date').value = '';
        document.getElementById('task-description').value = '';
    } else {
        alert("Please enter both a date and description.");
    }
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.date} - ${task.description}`;
        taskList.appendChild(li);
    });
}

// Fitness Tracker
function logWorkout() {
    const workoutDescription = document.getElementById('workout-description').value;
    const workoutDuration = document.getElementById('workout-duration').value;

    if (workoutDescription && workoutDuration) {
        let workouts = JSON.parse(localStorage.getItem('workouts')) || [];
        workouts.push({ description: workoutDescription, duration: workoutDuration });
        localStorage.setItem('workouts', JSON.stringify(workouts));
        loadWorkouts();
        document.getElementById('workout-description').value = '';
        document.getElementById('workout-duration').value = '';
    } else {
        alert("Please enter both a workout description and duration.");
    }
}

function loadWorkouts() {
    const workouts = JSON.parse(localStorage.getItem('workouts')) || [];
    const workoutList = document.getElementById('workout-list');
    workoutList.innerHTML = '';
    
    workouts.forEach(workout => {
        const li = document.createElement('li');
        li.textContent = `${workout.description} - ${workout.duration} minutes`;
        workoutList.appendChild(li);
    });
}

// Goal Tracker
function setGoal() {
    const goalDescription = document.getElementById('goal-description').value;

    if (goalDescription) {
        let goals = JSON.parse(localStorage.getItem('goals')) || [];
        goals.push({ description: goalDescription });
        localStorage.setItem('goals', JSON.stringify(goals));
        loadGoals();
        document.getElementById('goal-description').value = '';
    } else {
        alert("Please enter a goal.");
    }
}

function loadGoals() {
    const goals = JSON.parse(localStorage.getItem('goals')) || [];
    const goalList = document.getElementById('goal-list');
    goalList.innerHTML = '';
    
    goals.forEach(goal => {
        const li = document.createElement('li');
        li.textContent = goal.description;
        goalList.appendChild(li);
    });
}
