import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// how webhooks look like
// https://hools.zapier.com/hooks/catch/12345/123456


// Password Logic 
app.use("/hooks/catch/:userid/:zapId", async (req, res) => {    
  const { userid, zapId } = req.params;
  console.log(userid, zapId);

    // store in db a new trigger 

    // push it on to a queue  ( kafka, queue or redis queue  )

  res.send("Hook called");


});




app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
}); 