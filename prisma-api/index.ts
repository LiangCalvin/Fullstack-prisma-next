import { Request, Response, NextFunction } from "express"
import { PrismaClient } from '@prisma/client'

var express = require('express')
var cors = require('cors')
var app = express()
const prisma = new PrismaClient()

app.use(cors())
 
app.get('/home', async function (req: Request, res: Response, next:NextFunction) {
    try {
        const users = await prisma.user.findMany();
        res.json({users: users});
      } catch (error) {
        next(error); // Pass the error to the error handler middleware
      }
})

app.get('/home/:id', async function (req: Request, res: Response, next:NextFunction) {
    const id = req.params.id
    try {
        const user = await prisma.user.findUnique({
            where: {
              id: parseInt(id),
            },
            include: {
                posts: true,
    }})
        res.json({users: user});
      } catch (error) {
        next(error); // Pass the error to the error handler middleware
      }
})
 
app.listen(5001, function () {
  console.log('CORS-enabled web server listening on port 5001')
})