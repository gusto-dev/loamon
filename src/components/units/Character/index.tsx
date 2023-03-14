import React, { useState } from 'react'
import { useRouter } from 'next/router'

import {
  CharacterContainer,
  CharacterNone,
  CharacterTabButtons,
  CharacterTabButton,
  CharacterTabContent,
} from '@/components/units/Character/Character.styles'
import ICharacterProps from '@/components/units/Character/Character.types'
import CharacterProfiles from '@/components/units/Character/Profiles'
import CharacterClothes from '@/components/units/Character/Clothes'
import CharacterEngravings from '@/components/units/Character/Engravings'
import CharacterGems from '@/components/units/Character/Gems'
import CharacterCards from '@/components/units/Character/Cards'
import CharacterSkills from '@/components/units/Character/Skills'
import CharacterCollectibles from '@/components/units/Character/Collectibles'
import CharacterSiblings from '@/components/units/Character/Siblings'

function Character(props: ICharacterProps) {
  const [currentTab, setCurrentTab] = useState(1)
  const router = useRouter()
  const { data } = props
  const clothes = { Equipment: data.Equipment, Avatars: data.Avatars }
  const skills = { CombatSkills: data.CombatSkills }
  const collectibles = { Collectibles: data.Collectibles }
  const siblings = { Siblings: data.Siblings }

  return (
    <CharacterContainer>
      {data.Profiles ? (
        <>
          <CharacterProfiles {...data.Profiles} />
          <CharacterTabButtons>
            <CharacterTabButton
              className={`${currentTab === 1 && 'active'}`}
              onClick={() => setCurrentTab(1)}
            >
              전투
            </CharacterTabButton>
            <CharacterTabButton
              className={`${currentTab === 2 && 'active'}`}
              onClick={() => setCurrentTab(2)}
            >
              내실
            </CharacterTabButton>
            <CharacterTabButton
              className={`${currentTab === 3 && 'active'}`}
              onClick={() => setCurrentTab(3)}
            >
              캐릭터
            </CharacterTabButton>
          </CharacterTabButtons>
          {currentTab === 1 && (
            <CharacterTabContent>
              <CharacterEngravings {...data.Engravings} />
              <CharacterClothes {...clothes} />
              <CharacterGems {...data.Gems} />
              <CharacterCards {...data.Cards} />
              <CharacterSkills {...skills} />
            </CharacterTabContent>
          )}
          {currentTab === 2 && (
            <CharacterTabContent>
              <CharacterCollectibles {...collectibles} />
            </CharacterTabContent>
          )}
          {currentTab === 3 && (
            <CharacterTabContent>
              <CharacterSiblings {...siblings} />
            </CharacterTabContent>
          )}
        </>
      ) : (
        <CharacterNone>{router.query.name}은(는) 없습니다.</CharacterNone>
      )}
    </CharacterContainer>
  )
}

const MemoizedCharacter = React.memo(Character)
export default MemoizedCharacter
