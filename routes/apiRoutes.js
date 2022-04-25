const router = require('express').Router();
// db.js 
const dB = require('../db/db');

// router reqeusting the notes 
router.get('/notes', (req, res) => {
    dB
        .getNotes()
        .then(notes => {
            res.json(notes)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// post notes function 
router.post('/notes', (req, res) => {
    console.log(req.body)
    dB
        .addNote(req.body)
        .then(note => {
            res.json(note)
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

// deleting notes route 
router.delete('/notes/:id', (req, res) => {
    dB
        .removeNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err))
})

module.exports = router;