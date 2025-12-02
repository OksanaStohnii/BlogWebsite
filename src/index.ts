import express from "express";
import path from "path";
import cors from "cors";
import nunjucks from 'nunjucks';
import adminRoutes from "./routes/adminRoutes"
import publicRoutes from "./routes/publicRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

nunjucks.configure('src/views', {
    autoescape: true,
    express: app
});

app.use(express.static(path.join(__dirname, "..", "src")));
app.use(express.urlencoded({extended: true}));

app.use(publicRoutes).use("/admin", adminRoutes)

app.listen(PORT, () => {
  console.log(`BlogWebsite on http://localhost:${PORT}`);
});