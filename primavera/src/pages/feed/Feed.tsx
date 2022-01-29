import React from 'react';
import './Feed.css';
import { Box } from '@material-ui/core';
import SideBar from '../../components/estaticos/sideBar/SideBar';
import PostCard from '../../components/estaticos/PostCard/PostCard';

function Feed() {
  return (
      <>
        <SideBar />
        <Box display='flex' className='center meio'>
                <PostCard />
          </Box>
      </>
  );
}

export default Feed;
