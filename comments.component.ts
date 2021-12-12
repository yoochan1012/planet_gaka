import { Component, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments: Comment[];
  comment: Comment;
  title: string;
    text: string;
    addtext: string;

  constructor(private commentsService: CommentsService) { }

  addComment() {
    const newComment = {
      title: this.title,
      text: this.text,
      addtext: this.addtext
    }
  }
  // deleteComment(id: any){
  //   var comments = this.comments;
  //   this.commentsService.deleteComment(id).subscribe(data =>{
  //     if (data=='1') {for (var i = 0; i<this.comments.length; i++){
  //       if (comments[i]._id = id) {
  //         comments.splice(1,1);
  //       }
  //     }}
  //   })
  // }
  ngOnInit(): void {
    this.commentsService.getComments().subscribe(comments => this.comments = this.comments);
  }

}
