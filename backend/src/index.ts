import express from "express";
import cors from "cors";
import helmet from "helmet";
import jwt from "jsonwebtoken";
import * as OpenApiValidator from "express-openapi-validator";
import entityRoutes from "./routes/entityRoutes";
import authRoutes from "./routes/authRoutes";
import aiRoutes from "./routes/aiRoutes";
import dashboardRoutes from "./routes/dashboardRoutes";

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(helmet());
app.use(express.json());

// JWT Authentication middleware - temporarily disabled for testing
// app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//   if (req.path.startsWith("/auth")) return next();

//   const authHeader = req.headers.authorization;
//   if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

//   const token = authHeader.split(" ")[1];
//   if (!token) return res.status(401).json({ error: "Unauthorized" });

//   jwt.verify(token, process.env.JWT_SECRET || "secret", (err: any, user: any) => {
//     if (err) return res.status(403).json({ error: "Forbidden" });
//     (req as any).user = user;
//     next();
//   });
// });

// OpenAPI validator middleware - temporarily disabled due to missing spec file
// app.use(
//   OpenApiValidator.middleware({
//     apiSpec: "./src/schemas/openapi.yaml",
//     validateRequests: true,
//     validateResponses: true,
//   })
// );

// Routes
app.use("/auth", authRoutes);
app.use("/entities", entityRoutes);
app.use("/ai", aiRoutes);
app.use("/api", dashboardRoutes);

app.use((err: any, req: any, res: any, next: any) => {
  // format errors
  res.status(err.status || 500).json({
    message: err.message,
    errors: err.errors,
  });
});

app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
