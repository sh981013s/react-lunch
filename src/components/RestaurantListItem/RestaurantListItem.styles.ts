import styled from 'styled-components';
import { Body, Subtitle } from '../../styles/Text';

export const RestaurantListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
  row-gap: 8px;

  padding: 16px 8px;
  border-bottom: 1px solid #e9eaed;
  cursor: pointer;

  & > :first-child {
    grid-row: span 2;
  }
`;

export const RestaurantListItemHeaderTitle = styled(Subtitle)``;

export const RestaurantListItemHeaderSubtitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: var(--primary-color);
`;

export const RestaurantListItemBody = styled(Body)`
  display: -webkit-box;

  padding-top: 8px;

  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
