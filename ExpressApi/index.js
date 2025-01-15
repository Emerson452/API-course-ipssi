//Importe le module express
const express = require("express");

//Créer une app express
const app = express();

//Définir le port
const port = 3000;

app.use(express.json());

//DATA
const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@gmail.com",
    age: 25,
    address: "123 rue du bois",
  },
  {
    id: 2,
    name: "Boc",
    email: "boc@gmail.com",
    age: 29,
    address: "49 rue du wood",
  },
  {
    id: 3,
    name: "Charle",
    email: "charle@gmail.com",
    age: 12,
    address: "13 rue du bis",
  },
];

//MIDDLEWARE
app.use((req, res, next) => {
  console.log("Middleware exécuté !");
  next();
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const validateApiKey = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];

  if (apiKey === "12345") {
    next();
  } else {
    res.status(403).json({ message: "Accès interdit : clé API invalide" });
  }
};

//ROUTES
//Route d'origine
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon API !");
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

//Route GET utilisateur par son ID
app.get("/api/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé" });
  }
});

//Route POST pour ajouter un utilisateur
app.post("/api/users", (req, res) => {
  const newUser = req.body; //Récupérer les données envoyées dans le corps de la requête(body)

  if (
    !newUser.id ||
    !newUser.name ||
    !newUser.email ||
    !newUser.age ||
    !newUser.address
  ) {
    return res.status(400).json({
      message: "Les champs id, name, email, age et address sont requis",
    });
  }

  //Ajouter l'utilisateur à la liste
  users.push(newUser);

  //Répondre avec l'utilisateur ajouté
  res.status(201).json(newUser);
});

//Route PUT pour mettre à jour un utilisateur
app.put("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); //Extraire l'id de l'utilisateur depuis les param de la req
  const existingUser = users.find((user) => user.id === userId); //Trouver l'utilisateur correspondant à l'ID de la req

  if (existingUser) {
    existingUser.name = req.body.name || existingUser.name;
    existingUser.email = req.body.email || existingUser.email;
    existingUser.age = req.body.age || existingUser.age;
    existingUser.address = req.body.address || existingUser.address;
    res.json(existingUser);
  } else {
    res.status(404).json({ message: "Utilisateur non trouvé" });
  }
});

//Route DELETE pour supprimer un utilisateur
app.delete("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id); //Extraire l'id de l'utilisateur depuis les param de la req
  const userIndex = users.findIndex((user) => user.id === userId); //Trouver l'utilisateur correspondant à l'ID de la req

  if (userIndex < 0) {
    return res.status(404).json({ message: "Utilisateur non trouvé" });
  }

  //Suprime l'utilisateur
  users.splice(userIndex, 1);
  res.status(204).end();
});

app.get("/api/secure-data", validateApiKey, (req, res) => {
  res.json({ message: "Bienvenue sur la route sécurisée !" });
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
