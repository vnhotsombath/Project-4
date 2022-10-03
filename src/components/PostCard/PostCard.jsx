import React from "react";
import { Card, Image, Icon, Segment } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";
import * as postsAPI from "../../utils/postApi";

function PostCard({
  post,
  isProfile,
  addLike,
  removeLike,
  loggedUser,
  getPosts,
}) {
  const navigate = useNavigate();

  //----DELETE----//

  //   function handlesubmit(e) {
  //     e.preventDefault();
  //     const request = post._id;
  //     handleDeletePost(request);
  //     setState(false)
  //   }

  async function deleteClickHandler(e) {
    try {
      await postsAPI.deletePost(post._id);
      getPosts();
      navigate("/");
    } catch (err) {
      console.log(err, "this is the error");
    }
  }

  //----LIKES----//
  const likedIndex = post.likes.findIndex(
    (like) => like.username === loggedUser?.username
  );

  const likeColor = likedIndex > -1 ? "red" : "grey";

  const clickHandler =
    likedIndex > -1
      ? () => removeLike(post.likes[likedIndex]._id)
      : () => addLike(post._id);

  return (
    <Card key={post._id} raised>
      {isProfile ? (
        ""
      ) : (
        <Card.Content textAlign="left">
          <Card.Header>
            <Link to={`/${post.user.username}`}>
              <Image
                size="large"
                avatar
                src={
                  post.user.photoUrl
                    ? post.user.photoUrl
                    : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
              />
              {post.user.username}
            </Link>
          </Card.Header>
        </Card.Content>
      )}
      <Image src={`${post?.photoUrl}`} wrapped ui={false} />
      <Card.Content>
        <Card.Description textAlign="center">
          {post.title}
          <br />
          {post.content}
        </Card.Description>
      </Card.Content>
      {loggedUser ? (
        <Card.Content>
          {post.user.username === loggedUser?.username ? (
            <Link to={`#`}>
              <Icon
                name={"delete"}
                color={"red"}
                onClick={deleteClickHandler}
              />
            </Link>
          ) : (
            <>
              <Link to={`#`}>
                <Icon
                  name={"thumbs up"}
                  size="large"
                  color={likeColor}
                  onClick={clickHandler}
                />
              </Link>
              {post.likes.length}
            </>
          )}
        </Card.Content>
      ) : null}
    </Card>
  );
}

export default PostCard;
