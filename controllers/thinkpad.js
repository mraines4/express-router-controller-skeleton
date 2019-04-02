// Create
function create(req,res) {
    res.json({ message: "you created" });
};

// Retrieve
function retrieveAll(req,res) {
    res.json({ message: "you retrieved all" });
};

// Update
function update(req,res) {
    res.json({ message: "You updated" });
};

// Delete
function deleteOne(req,res) {
    res.json({ message: "you deleted" });
};

module.exports = {
    create,
    retrieveAll,
    update,
    deleteOne
};