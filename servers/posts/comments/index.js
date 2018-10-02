const router = require('express').Router({mergeParams: true});
const Comment = require('./CommentsModel');

router.get('/', (req, res) => {
    const { page = 1 } = req.query;

    Comment
      .paginate( 
        { post: req.params.postId },
        { 
          page,
          limit: 3,         
          populate: ['author'],
        }
      )
      .then(comments => res.send(comments))
      .catch(e => res.status(400).send(e.message));
});

router.post('/', (req, res) => {
    req.body.post = req.params.postId;

    const comment = new Comment(req.body);
    comment.save()
        .then(comment => res.send(comment))
        .catch(e => res.status(400).send(e.message));
});

router.get('/:commentId', (req, res) => {
	
});

router.put('/:commentId', (req, res) => {

});

router.delete('/:commentId', (req, res) => {

});

module.exports = router;