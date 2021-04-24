const router = require('express').Router();

const { task } = require('./db');

router.get('/', async (req, res) => {
    const tasks = await task.findAll();
    res.json(tasks);
})

router.post('/', async (req, res) => {
    const tasks = await task.create(req.body);
    res.json(tasks);
});

router.put('/:taskId', async (req, res) => {
    await task.update(req.body, {
        where: { id: req.params.taskId }
    });
    res.json({ success: 'Registro actualizado'});
});

router.delete('/:taskId', async (req, res) => {
    await task.destroy({
        where: { id: req.params.taskId }
    });
    res.json({ success: 'Registro eliminado'});
});


module.exports = router;