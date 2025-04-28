import { Request, Response } from "express";

// Placeholder in-memory data store
const dataStore: Record<string, any[]> = {
  project: [],
  contract: [],
  rfp: [],
  bid: [],
  report: [],
};

export const getEntities = (req: Request, res: Response) => {
  const { entity } = req.params;
  if (!entity || !dataStore[entity]) {
    return res.status(400).json({ error: "Invalid entity" });
  }
  res.json(dataStore[entity]);
};

export const getEntityById = (req: Request, res: Response) => {
  const { entity, id } = req.params;
  if (!entity || !dataStore[entity]) {
    return res.status(400).json({ error: "Invalid entity" });
  }
  const item = dataStore[entity].find((e) => e.id === id);
  if (!item) {
    return res.status(404).json({ error: "Not found" });
  }
  res.json(item);
};

export const createEntity = (req: Request, res: Response) => {
  const { entity } = req.params;
  if (!entity || !dataStore[entity]) {
    return res.status(400).json({ error: "Invalid entity" });
  }
  const newItem = req.body;
  newItem.id = String(Date.now());
  dataStore[entity].push(newItem);
  res.status(201).json(newItem);
};

export const updateEntity = (req: Request, res: Response) => {
  const { entity, id } = req.params;
  if (!entity || !dataStore[entity]) {
    return res.status(400).json({ error: "Invalid entity" });
  }
  const index = dataStore[entity].findIndex((e) => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Not found" });
  }
  dataStore[entity][index] = { ...dataStore[entity][index], ...req.body };
  res.json(dataStore[entity][index]);
};

export const deleteEntity = (req: Request, res: Response) => {
  const { entity, id } = req.params;
  if (!entity || !dataStore[entity]) {
    return res.status(400).json({ error: "Invalid entity" });
  }
  const index = dataStore[entity].findIndex((e) => e.id === id);
  if (index === -1) {
    return res.status(404).json({ error: "Not found" });
  }
  dataStore[entity].splice(index, 1);
  res.status(204).send();
};
