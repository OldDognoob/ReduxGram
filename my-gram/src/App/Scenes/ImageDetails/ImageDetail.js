import React from "react";
import Paper from "material-ui/Paper";
import components from "../../components";



const Photo = components.Photo;
const Comments = components.Comments;

class ImageDetails extends React.Component {
  render() {
    const postId = this.props.postId;
    const post = this.props.posts.find(post => post.id === postId);
    const postComments = this.props.comments[post.code];
    const index = this.props.posts.indexOf(post);

    post.index = index;

    console.log(this.props);

    return (
      <Paper>
        <Photo post={post} onLikeClicked={this.props.increment} />
        <Comments
          comments={postComments}
          postCode={post.code}
          postId={post.id}
          onRemoveComments={this.props.removeComment}
          onAddComments={this.props.addComment}
        />
      </Paper>
    );
  }
}

export { ImageDetails };
