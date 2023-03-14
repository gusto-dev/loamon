import Image from 'next/image'

import {
  CharacterGemsContainer,
  CharacterGemsList,
  CharacterGemsItem,
  CharacterGemsImage,
  CharacterGemsLevel,
} from '@/components/units/Character/Character.styles'
import { ICharacterGems } from '@/components/units/Character/Character.types'

export default function CharacterGems(props: ICharacterGems) {
  if (!props.Gems) return null
  const sortedGems = props.Gems.sort((a, b) => {
    return b.Level - a.Level
  })

  return (
    <CharacterGemsContainer>
      {Object.keys(props).length !== 0 && (
        <CharacterGemsList>
          {sortedGems.map((gem, index) => {
            const newEffect = props.Effects.filter(
              (effect) => effect.GemSlot === gem.Slot && effect
            )

            return (
              <CharacterGemsItem key={index}>
                <CharacterGemsImage>
                  <Image
                    src={`${gem.Icon ?? '/images/temp.jpg'}`}
                    fill
                    priority={true}
                    sizes="100%"
                    alt="아이템 이미지"
                  />
                </CharacterGemsImage>
                <CharacterGemsLevel>{gem.Level}</CharacterGemsLevel>
                {/* <p>{newEffect[0].Name}</p> */}
              </CharacterGemsItem>
            )
          })}
        </CharacterGemsList>
      )}
    </CharacterGemsContainer>
  )
}
