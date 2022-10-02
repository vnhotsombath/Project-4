import React, { useState } from "react";
import { Card, Image, Icon, Segment } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";

function PostCard({
  post,
  isProfile,
  addLike,
  removeLike,
  loggedUser,
  handleDeletePost,
}) {

const [state, setState] = useState(false);

  //----DELETE----//

  function handlesubmit(e) {
    e.preventDefault();
    const request = post._id;
    handleDeletePost(request);
    setState(false)
  }

  //   async function deleteClickHandler(e) {
  //     try {
  //       const response = await removePost(post._id);
  //       console.log(response, "<---remove post");
  //       navigate("/")
  //     } catch (err) {
  //       console.log(err,"this is the error")
  //     }
  //   }

  //----LIKES----//
  const likedIndex = post.likes.findIndex(
    (like) => like.username === loggedUser.username
  );

  // if likedIndex is -1 the color should be 'grey' (the user wasn't in the post.likes array)
  // likedIndex is greater then -1 (the user is in the post.likes array) the color should be red
  const likeColor = likedIndex > -1 ? "red" : "grey";

  const clickHandler =
    likedIndex > -1
      ? () => removeLike(post.likes[likedIndex]._id) // user has liked the post
      : () => addLike(post._id); // user hasn't liked the post handler

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
        <Card.Description>{post.title}</Card.Description>
      </Card.Content>
      <Card.Content>
        <Card.Description>{post.content}</Card.Description>
      </Card.Content>
      {loggedUser ? (
        <Card.Content>
          {post.user.username === loggedUser?.username ? (
            <Link to={`#`}>
              <Icon
                name={"delete"}
                color={"red"}
                onClick={clickHandler}
                required
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
                  required
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
