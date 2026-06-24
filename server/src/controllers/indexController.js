import prisma from "../lib/prisma.js";

async function indexHome(req, res) {
    const users = await prisma.user.findMany();
    res.json(users)
};

export default indexHome;