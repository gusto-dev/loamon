import styled from '@emotion/styled'

// 공통 스타일
export const Wrapper = styled.div`
  position: relative;
`
export const Main = styled.main`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`

// Header 스타일
export const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--color-main);
`
export const HeaderRow = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  &.spaceBetween {
    justify-content: space-between;
  }
`
export const HeaderLogo = styled.h1`
  a {
    padding: 0.5rem;
    display: block;
    font-size: 2rem;
    font-weight: 700;
  }
`
export const HeaderSearch = styled.div`
  position: relative;
  width: 420px;
`
export const HeaderSearchRow = styled.div`
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--bg-sub);
  border: 1px solid var(--color-main);
  border-radius: 0.25rem;
`
export const HeaderSearchInput = styled.input`
  border: 0;
  background: 0;
  &::placeholder {
    color: var(--color-sub);
  }
`
export const HeaderSearchButton = styled.button`
  width: 24px;
  height: 24px;
  font-size: 1.5rem;
  color: var(--color-main);
`
export const HeaderActions = styled.div`
  display: flex;
  gap: 0 0.5rem;
`
export const HeaderActionsThemeButton = styled.button`
  font-size: 1.5rem;
`
export const HeaderMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1rem;
  border-top: 1px solid var(--color-sub);
  a {
    display: flex;
    padding: 0.5rem 1rem;
  }
`

// Footer 스타일

// Sidebar 스타일
export const SidebarContainer = styled.aside`
  position: absolute;
  top: 2rem;
  right: -200px;
  width: 200px;
`
export const SidebarFavorites = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 2px solid var(--color-main);
  border-bottom: 1px solid var(--color-sub);
`
export const SidebarFavoriteItem = styled.div`
  a {
    display: block;
  }
`
