import React from "react";
import PostGallery from "../PostGallery/PostGallery";
import { Grid } from "semantic-ui-react";

export default function PostDisplayForm({
  posts,
  isProfile,
  addLike,
  removeLike,
  loggedUser,
  setPosts,
  setProfileUser,
  itemsPerRow,
}) {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column centered>
          <div className="post-details">
            <PostGallery
              posts={posts}
              key={posts._id}
              isProfile={isProfile}
              removeLike={removeLike}
              addLike={addLike}
              loggedUser={loggedUser}
              setPosts={setPosts}
              setProfileUser={setProfileUser}
              itemsPerRow={itemsPerRow}
            />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
