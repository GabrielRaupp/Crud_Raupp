const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAllUsers(); 
        res.render('index', { users });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.searchUsers = async (req, res) => {
    try {
        const searchQuery = req.query.search || ''; 
        const users = await User.searchUsers(searchQuery); 
        res.json({ users });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.renderCreateForm = (req, res) => {
    res.render('create'); 
};

exports.createUser = async (req, res) => {
    try {
        const { username, password, role } = req.body; o
        await User.createUser(username, password, role);
        res.redirect('/users'); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findUserById(req.params.id);
        res.render('userDetails', { user });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.renderEditForm = async (req, res) => {
    try {
        const user = await User.findUserById(req.params.id); 
        res.render('edit', { user });
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        await User.updateUser(req.params.id, username, password, role);
        res.redirect('/users'); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.deleteUser(req.params.id);
        res.redirect('/users'); 
    } catch (err) {
        res.status(500).send(err.message);
    }
};
