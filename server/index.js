const express = require("express")
const cors = require("require")
const mongoose = require("mongoose")

require("dotenv").config()
const app = express()

const PORT = process.env.PORT || 5000
