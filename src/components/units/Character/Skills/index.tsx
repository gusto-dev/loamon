import Image from 'next/image'

import {
  CharacterSkillsContainer,
  CharacterSkillsList,
  CharacterSkillsItem,
  CharacterSkillsName,
  CharacterSkillsImage,
} from '@/components/units/Character/Character.styles'
import { ICharacterCombatSkills } from '@/components/units/Character/Character.types'

export default function CharacterSkills({
  CombatSkills,
}: {
  CombatSkills: ICharacterCombatSkills[]
}) {
  if (!CombatSkills) return null
  const sortedSkills = CombatSkills.sort((a, b) => {
    return b.Level - a.Level
  })

  return (
    <CharacterSkillsContainer>
      {sortedSkills && (
        <CharacterSkillsList>
          {sortedSkills.map((item, index) => {
            if (item.Level === 1) {
              return null
            }

            return (
              <CharacterSkillsItem key={index}>
                <CharacterSkillsImage>
                  <Image
                    src={`${item.Icon ?? '/images/temp.jpg'}`}
                    fill
                    priority={true}
                    sizes="100%"
                    alt="아이템 이미지"
                  />
                </CharacterSkillsImage>
                <CharacterSkillsName>{item.Name}</CharacterSkillsName>
              </CharacterSkillsItem>
            )
          })}
        </CharacterSkillsList>
      )}
    </CharacterSkillsContainer>
  )
}
