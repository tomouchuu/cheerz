import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const ItemList = styled.div`
  flex: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Timeline = props => (
  <ItemList>
    {
      props.posts.map(post => (
        <Item
          key={post.item.item_id}
          itemid={post.item.item_id}
          smallimage={post.item.blur_image_url ? post.item.blur_image_url : post.item.s_image_url}
          image={post.item.blur_image_url ? post.item.blur_image_url : post.item.image_url}
          date="2018.10.7"
          postedtime={post.item.posted_time}
          artistid={post.poster.poster_id}
          artist={post.poster.name}
          artistimage={post.poster.s_image_url}
          unitid={post.poster.group[0] ? post.poster.group[0].group_id : 0}
          unit={post.poster.group[0] ? post.poster.group[0].name : ''}
          cheers={post.item.cheer_count}
          comment={post.item.comment}
          issupporter={post.item.blur_image_url ? true : false}
        />
      ))
    }
  </ItemList>
);

Timeline.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Timeline;