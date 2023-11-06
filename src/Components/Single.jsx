import React from "react";
import Title from "./Title";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Photo from "./Photo";
import Comments from "./Comments";
import NotFound from "./NotFound";
import { Grid } from "@mui/material";

function Single() {
  let posts = useSelector((state) => state.posts);

  const params = useParams();
  let postID = params.id;
  let post = posts.find((post) => post.index === postID);
  if (!post) {
    return <NotFound />;
  }

  return (
    <>
      <Title />
      <div className="single-photo">
        <Grid container spacing={2}>
          <Grid item md={8} sm={12}>
            <Photo post={post} />
          </Grid>
          <Grid item md={4} sm={12}>
            <Comments />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Single;
