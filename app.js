const VER = 13;

import express from "express";
import { config } from "./config.js";
import data  from "./data/products.js";

const port = 3000;
const app = express();
import axios from "axios";
import fs from "fs";
import * as path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./app.html"));
});

app.get("/items", (req, res) => {
  res.sendFile(path.join(__dirname, "./app/items/items.html"));
});

app.get("/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "./app/checkout/checkout.html"));
});

app.get("/products", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
