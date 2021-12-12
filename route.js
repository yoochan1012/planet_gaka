const express = require('express');
const router = express.Router();

const Comment = require('../models/comments');

router.get('/comments', (req, res, next)=>{
    Comment.find(function(err, comments){
        res.json(comments);
    })
});

router.post('/comment', (req, res, next)=>{
    let newComment = new Comment({
        title: req.body.title,
        text: req.body.text,
        addtext: req.body.addtext
    });

    newComment.save((err, comment)=>{
        if(err)
        {
            res.json({msg: '댓글 넣기에 실패했습니다!ㅠㅠ'});
        }
        else{
            res.json({msg: '댓글 넣기에 성공했습니다!^^'});
        }
    })
});

router.delete('/comment/:id', (req, res, next)=>{
    Comment.remove({_id: req.params.id}, function(err, result){
        if (err) {res.json(err);}
        else{res.json(result);}
    });
});

module.exports = router;