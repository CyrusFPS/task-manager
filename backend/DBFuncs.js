const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const signup = async (user) => {
  const userWithEmailExists = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
  });

  if (!userWithEmailExists) {
    try {
      await prisma.user.create({
        data: {
          email: user.email,
          password: user.password,
        },
      });
    } catch (err) {
      throw err;
    } finally {
      const newUser = await prisma.user.findUnique({
        where: {
          email: user.email,
        },
      });
      await prisma.$disconnect();
      return newUser;
    }
  } else {
    return "User with email already exists";
  }
};

const login = async (user) => {
  const foundUser = await prisma.user.findMany({
    where: {
      email: user.email,
      password: user.password,
    },
  });

  if (foundUser.length === 0) return "User not found";
  return foundUser[0];
};

const addTask = async (task, userId) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
  });
  let updatedTasks = [];
  if (user.tasks) updatedTasks = user.tasks;
  updatedTasks.push(task);
  const result = await prisma.user.update({
    where: {
      userId: userId,
    },
    data: {
      tasks: updatedTasks,
    },
  });
  return updatedTasks;
};

const getTasks = async (userId) => {
  if (isNaN(userId)) return "User not found";
  const user = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
  });
  if (!user) return "User not found";
  return user.tasks;
};

const changeTaskStatus = async (id, userId) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
  });
  if (!user) return "User not found";
  const updatedTasks = user.tasks.map((task) =>
    task.id === id ? { ...task, status: !task.status } : task
  );
  const result = await prisma.user.update({
    where: {
      userId: userId,
    },
    data: {
      tasks: updatedTasks,
    },
  });

  return "Task updated";
};

const deleteTask = async (id, userId) => {
  const user = await prisma.user.findUnique({
    where: {
      userId: userId,
    },
  });
  if (!user) return "User not found";
  const updatedTasks = user.tasks.filter((task) => task.id !== id);
  if (updatedTasks === user.tasks) return "Task not found";
  const result = await prisma.user.update({
    where: {
      userId: userId,
    },
    data: {
      tasks: updatedTasks,
    },
  });
  return updatedTasks;
};

exports.signup = signup;
exports.login = login;
exports.addTask = addTask;
exports.getTasks = getTasks;
exports.changeTaskStatus = changeTaskStatus;
exports.deleteTask = deleteTask;
