import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.post("/auth", (req,res) => {
    if(req.body.key === "secretkey"){
        res.status(200).send();
        return;
    }

    res.status(403).send();

    return;

});




app.listen(process.env.PORT || 5000, () => {
    console.log("Server started!");
})