const express = require("express");
const router = express.Router();

let tasks = [
  {
    id: 1,
    title: "Create a new project",
    description: "Create a new project using Magic",
    completed: false,
    priority: "high",
  },
  {
    id: 2,
    title: "Design the project structure",
    description: "Design the folder structure and basic layout",
    completed: true,
    priority: "medium",
  },
  {
    id: 3,
    title: "Set up development environment",
    description: "Install necessary tools and dependencies",
    completed: false,
    priority: "low",
  },
  {
    id: 4,
    title: "Implement user authentication",
    description: "Create user login and registration system",
    completed: true,
    priority: "high",
  },
  {
    id: 5,
    title: "Write unit tests",
    description: "Write tests for key functions and modules",
    completed: false,
    priority: "medium",
  },
];

const createTask = (taskData) => {
  const newTask = {
    id: tasks.length + 1,
    ...taskData,
  };
  tasks.push(newTask);
  return newTask;
};

const validateTask = (taskData) => {
  if (!taskData.title || !taskData.description) {
    return false;
  }
  return true;
};

// Route to get all tasks
router.get("/tasks", (req, res) => {
  const { completed } = req.query;

  if (completed !== undefined) {
    const filteredTasks = tasks.filter(
      (task) => String(task.completed) === completed
    );
    return res.status(200).json({
      data: filteredTasks,
      status: true,
      message: `Tasks filtered by completed status: ${completed}`,
    });
  }

  // If no query parameter is provided, return all tasks
  res.status(200).json({
    data: tasks,
    status: true,
    message: "All tasks are received successfully",
  });
});

// Route to get tasks by priority level
router.get("/tasks/priority/:level", (req, res) => {
  const { level } = req.params;

  // Validate the priority level
  const validPriorities = ["low", "medium", "high"];
  if (!validPriorities.includes(level)) {
    return res.status(400).json({
      status: false,
      message:
        "Invalid priority level. Valid values are 'low', 'medium', or 'high'.",
    });
  }

  // Filter tasks by the specified priority
  const filteredTasks = tasks.filter((task) => task.priority === level);

  res.status(200).json({
    data: filteredTasks,
    status: true,
    message: `Tasks with ${level} priority are retrieved successfully.`,
  });
});

// Route to create a new task
router.post("/tasks", (req, res) => {
  const { body } = req;

  // Validate input
  if (!validateTask(body)) {
    return res.status(400).json({
      status: false,
      message: "Bad request. Title and description are required.",
    });
  }

  // Create and return the new task
  const newTask = createTask(body);
  res.status(201).json({
    data: newTask,
    status: true,
    message: "Task created successfully",
  });
});

module.exports = router;
