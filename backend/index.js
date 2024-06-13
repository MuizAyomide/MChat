const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;


  try{
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {username: username, secret: username, first_name:username},
      {headers: {"private-key": "bf3d370d-7d6a-4b3c-82b7-2d26bd98a50d"}}
    )
    return res.status(r.status).json(r.data)

  } catch(err){
    return res.status(err.response.status).json(err.response.data)

  }

  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);