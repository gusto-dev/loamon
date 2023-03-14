import styled from '@emotion/styled'

export const Wrapper = styled.div`
  padding: 2rem 0;
`
export const NewsContainer = styled.div`
  position: relative;
`
export const NewsTitle = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 700;
`
export const NewsSubTitle = styled.h3`
  margin-bottom: 1rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  font-weight: 500;
`
export const NewsRow = styled.div`
  display: flex;
  gap: 0 2rem;
`
export const NewsBox = styled.div`
  width: calc(50% - 1rem);
`
export const NewsList = styled.ul`
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  border: 1px solid var(--color-main);
  border-radius: 0.25rem;
`
export const NewsItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  &.thumbnail {
    width: calc(50% - 0.5rem);
    font-size: 1rem;
    p {
      display: flex;
      flex-direction: column;
    }
  }
  a {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    &:hover {
      text-decoration: underline;
    }
  }
`
export const NewsItemTitle = styled.p`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
export const NewsItemType = styled.span`
  flex-shrink: 0;
  font-weight: 500;
`
export const NewsItemThumbnail = styled.span`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  display: block;
  aspect-ratio: 620 / 295;
`
export const NewsItemDate = styled.span`
  font-size: 0.85rem;
  opacity: 0.8;
`
