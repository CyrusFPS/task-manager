// const { Pool, Client } = require("pg");
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

exports.signup = signup;
exports.login = login;
