import styled from '@emotion/styled'

// 공통
export const Wrapper = styled.div`
  padding: 2rem 0;
`
export const CharacterContainer = styled.div`
  position: relative;
`
export const CharacterNone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CharacterTabButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 0 1rem;
`
export const CharacterTabButton = styled.button`
  width: 120px;
  height: 40px;
  border: 1px solid var(--color-main);
  &.active {
    background-color: var(--color-main);
    color: var(--bg-main);
    font-weight: 700;
  }
`
export const CharacterTabContent = styled.div``

// 프로필
export const CharacterProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0 4rem;
`
export const CharacterProfileImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 240px;
  aspect-ratio: 612 / 708;
  border-radius: 0.5rem;
`
export const CharacterProfileInfo = styled.div`
  flex: 1;
`
export const CharacterProfileName = styled.h2`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
export const CharacterProfileList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const CharacterProfileItem = styled.li`
  display: flex;
  gap: 0.5rem;
`
export const CharacterProfileBadge = styled.span`
  padding: 0.25rem 0.5rem;
  display: flex;
  border: 1px solid var(--color-main);
  border-radius: 0.25rem;
`
export const CharacterProfileStats = styled.ul`
  padding: 0.5rem;
  border: 1px solid var(--color-sub);
  border-radius: 0.25rem;
`
export const CharacterProfileStat = styled.li`
  position: relative;
  &:hover {
    .tooltip {
      display: block;
    }
  }
`
export const CharacterProfileTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
`
export const CharacterProfileTendencies = styled(CharacterProfileStats)`
  margin-top: 1rem;
`
export const CharacterProfileTendency = styled(CharacterProfileStat)``

// 장비, 아바타
export const CharacterClothesContainer = styled.div`
  margin-top: 2rem;
`
export const CharacterClothesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const CharacterClothesItem = styled.li`
  position: relative;
  width: 16.66%;
`
export const CharacterClothesName = styled.h5`
  font-weight: 500;
`
export const CharacterClothesGrade = styled.span`
  font-size: 0.85rem;
`
export const CharacterClothesImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 36px;
  aspect-ratio: 1 / 1;
`
export const CharacterClothesTooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
`

// 각인
export const CharacterEngravingsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`
export const CharacterEngravingsName = styled.h5`
  font-weight: 500;
`
export const CharacterEngravingsImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 36px;
  aspect-ratio: 1 / 1;
`
export const CharacterEngravingsEffects = styled.div`
  flex: 1;
`
export const CharacterEngravingsEffectsItem = styled.div`
  position: relative;
  display: flex;
  &:hover {
    .tooltip {
      display: block;
    }
  }
`
export const CharacterEngravingsMounted = styled.div`
  flex: 1;
`
export const CharacterEngravingsMountedItem = styled.div`
  display: flex;
`
export const CharacterEngravingsTooltip = styled.p`
  position: absolute;
  bottom: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  display: none;
`

// 보석
export const CharacterGemsContainer = styled.div`
  margin-top: 2rem;
`
export const CharacterGemsList = styled.ul`
  display: flex;
`
export const CharacterGemsItem = styled.li`
  position: relative;
  text-align: center;
`
export const CharacterGemsImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 36px;
  aspect-ratio: 1 / 1;
`
export const CharacterGemsLevel = styled.span``
export const CharacterGemsTooltip = styled.div``

// 카드
export const CharacterCardsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
`
export const CharacterCardsList = styled.ul`
  display: flex;
`
export const CharacterCardsItem = styled.li``
export const CharacterCardsName = styled.h5`
  font-weight: 500;
`
export const CharacterCardsImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 120px;
  aspect-ratio: 248 / 362;
`
export const CharacterCardsTooltip = styled.div``
export const CharacterCardsEffects = styled.div``

// 스킬
export const CharacterSkillsContainer = styled.div`
  margin-top: 2rem;
`
export const CharacterSkillsList = styled.ul`
  display: flex;
`
export const CharacterSkillsItem = styled.li`
  flex: 1;
`
export const CharacterSkillsName = styled.h5``
export const CharacterSkillsImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 36px;
  aspect-ratio: 1 / 1;
`

// 내실
export const CharacterCollectiblesContainer = styled.div`
  margin-top: 2rem;
`
export const CharacterCollectiblesList = styled.ul``
export const CharacterCollectiblesItem = styled.li`
  display: flex;
  gap: 1rem;
`
export const CharacterCollectiblesType = styled.div`
  min-width: 10rem;
`
export const CharacterCollectiblesPoints = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`
export const CharacterCollectiblesPoint = styled.div`
  width: 20%;
`
export const CharacterCollectiblesName = styled.h5``
export const CharacterCollectiblesImage = styled.div`
  overflow: hidden;
  position: relative;
  width: 36px;
  aspect-ratio: 1 / 1;
`

// 캐릭터
export const CharacterSiblingsContainer = styled.div`
  margin-top: 2rem;
`
export const CharacterSiblingsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`
export const CharacterSiblingsItem = styled.li`
  width: calc(50% - 0.25rem);
  padding: 0.5rem;
  border: 1px solid var(--color-sub);
`
export const CharacterSiblingsName = styled.h5``
