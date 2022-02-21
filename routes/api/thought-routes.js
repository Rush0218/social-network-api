const router = require('express').Router();

const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');


//sets get one, put and delete routes for /api/thoughts:id
router
    .route('/:userId')
    .post(addThought)

//sets post route for /api/thoughts/:thoughtsId/reactions
router
    .route('/:userId/:thoughtId')
    .put(addReaction)
    .delete(removeThought)

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;
