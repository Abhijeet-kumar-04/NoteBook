const express= require('express');
const app= express();
const path = require('path');
const fs = require('node:fs');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    fs.readdir('./files', function(err, files) {
        if (err) return res.status(500).send("Error reading files");

        // Read content of each file
        const notes = [];
        let filesRead = 0;

        if (files.length === 0) {
            return res.render("index", { files: [] });
        }

        files.forEach(function(filename, idx) {
            fs.readFile(`./files/${filename}`, 'utf8', function(err, data) {
                notes[idx] = { name: filename, content: data || "" };
                filesRead++;
                if (filesRead === files.length) {
                    res.render("index", { files: notes });
                }
            });
        });
    });
});
    
app.get('/read-more/:filename',function(req,res){
    const filename = req.params.filename;
    
    fs.readFile(`./files/${filename}`,'utf-8',function(err,data){
        if (err) return res.status(404).send("Note not found");
        res.render("read_more", { filename: filename, content: data });
    })      
})


app.post("/create",function(req, res) {
    
    fs.writeFile(`./files/${req.body.notebookName.split(' ').join('')}.txt`,req.body.noteContent,function(err){
        res.redirect("/");
    })
    
})

app.post('/edit-note/:filename', function(req, res) {
    const filename = req.params.filename;
    const newContent = req.body.content;
    fs.writeFile(`./files/${filename}`, newContent, function(err) {
        if (err) return res.status(500).send("Error saving file");
        res.redirect('/');
    });
});

app.get('/delete-note/:filename', function(req, res) {
    const filename = req.params.filename;
    fs.unlink(`./files/${filename}`, function(err) {
        if (err) return res.status(500).send("Error deleting file");
        res.redirect('/');
    });
})

app.get('/edit-note/:filename',function(req,res){
    const filename = req.params.filename;
    fs.readFile(`./files/${filename}`,"utf-8",function(err,data){
        if (err) return res.status(404).send("Note not found");
        res.render("edit_note", { filename: filename, content: data });
    })
})



app.listen(3000, function() {
    console.log("Server is running on port 3000");
});

