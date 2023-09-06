const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256..." });
});
try{
    const r = await axios.put (
        "https://api.chatengine.io/users/",
        { username :username, secret: username, first_name: username},
        {headers: {"private-key": "ed9e6a54-b8be-496d-a414-d7fa1ec887e4"}}
    )
    return res.status (r.status).json (r.data)
}catch (e) {
    return res.status (e.response.status).json (e.response.data)
}

app.listen(3001);