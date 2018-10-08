import React from 'react';
import styled from 'styled-components';

const EventsArea = styled.div`
  flex: 1 1 auto;
  margin: ${props => props.issignedin ? '0 0 0 60px;' : '38px auto 0;'};
  width: ${props => props.issignedin ? 'auto' : '500px'};
`;
const EventTitle = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 11px;
    font-weight: normal;
    color: #fff;
    margin: 0;
  }

  a {
    margin: 0 0 0 8px;
    font-size: 7px;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
`;
const EventList = styled.ul`
  padding-left: 0;
  margin: 13px 0 0;

  li {
    margin: 10px 0 0;
    list-style: none;
    :first-child {
      margin: 0;
    }
  }
`;
const Event = styled.a`
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  background: transparent;
  color: #8995a3;

  .title {
    display: flex;
    align-items: center;
    color: #fff;
    margin: 0;
  }
  .subtitle {
    font-size: 9px;
    color: #bcc6cf;
    margin: 0;
  }
`;

const Events = props => (
  <EventsArea issignedin={props.issignedin}>
    <EventTitle>
      <h3>EVENT</h3>
      <a href="/ranking">MORE</a>
    </EventTitle>
    <EventList>
      <li>
        <Event href="/idol-event/detail/970">
          <p className="title">人気ファッション誌「mer」に出演！（その2）</p>
          <p className="subtitle">10/2 - 10/8 Kotori、Minami Yamada、Haru Tennoji</p>
        </Event>
      </li>
      <li>
        <Event href="/idol-event/detail/970">
          <p className="title">人気ファッション誌「mer」に出演！（その2）</p>
          <p className="subtitle">10/2 - 10/8 Kotori、Minami Yamada、Haru Tennoji</p>
        </Event>
      </li>
      <li>
        <Event href="/idol-event/detail/970">
          <p className="title">人気ファッション誌「mer」に出演！（その2）</p>
          <p className="subtitle">10/2 - 10/8 Kotori、Minami Yamada、Haru Tennoji</p>
        </Event>
      </li>
    </EventList>
  </EventsArea>
);

export default Events;