import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MoreBtn } from './../Utils/Button';

const Title = styled.h3`
  margin: 0;
  font-size: 10px;
  color: #bcc6cf;
  font-weight: normal;
`;
const Threads = styled.ul`
  padding-left: 0;
  margin-top: 10px;
`;
const Thread = styled.li`
  margin: 5px 0 0;
  list-style: none;
`;

const CommunitySidebar = () => (
  <div>
    <Title><FontAwesomeIcon icon="comment-alt" /> COMMUNITY</Title>
    <Threads>
      <Thread>
        <a href="/artist/community/show/582846">おおおお（1）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/582365">低い声高い声（4）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/581771">初！（2）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/580993">おぱお（8）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/580742">似てます？（3）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/580247">今日1日の話（3）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/579559">アイ・アムパーフェクトヒューマン（4）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/578824">スタバの新作！！！声小さいですあと、声が変（4）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/578463">宣言（8）</a>
      </Thread>
      <Thread>
        <a href="/artist/community/show/568982">モノマネリクエスト1つ目だよ〜（7）</a>
      </Thread>
    </Threads>
    <MoreBtn><a href="/artist/4940/community">MORE</a></MoreBtn>
  </div>
);

export default CommunitySidebar;