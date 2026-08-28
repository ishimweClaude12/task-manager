const tasks = [];
let nextId = 1;

function getAll() {
  return tasks;
}

function create({ title, description }) {
  const task = {
    id: String(nextId++),
    title,
    description,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  tasks.push(task);
  return task;
}

function findById(id) {
  return tasks.find((task) => task.id === id);
}

function updateStatus(id, status) {
  const task = findById(id);
  if (!task) return null;
  task.status = status;
  return task;
}

function remove(id) {
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) return false;
  tasks.splice(index, 1);
  return true;
}

module.exports = { getAll, create, findById, updateStatus, remove };
