import Image from 'next/image'

import {
  CharacterEngravingsContainer,
  CharacterEngravingsName,
  CharacterEngravingsImage,
  CharacterEngravingsMounted,
  CharacterEngravingsMountedItem,
  CharacterEngravingsEffects,
  CharacterEngravingsEffectsItem,
  CharacterEngravingsTooltip,
} from '@/components/units/Character/Character.styles'
import { ICharacterEngravings } from '@/components/units/Character/Character.types'

export default function CharacterEngravings(props: ICharacterEngravings) {
  return (
    <CharacterEngravingsContainer>
      {Object.keys(props).length !== 0 && (
        <>
          <CharacterEngravingsEffects>
            {props.Effects.map((item, index) => (
              <CharacterEngravingsEffectsItem key={index}>
                <CharacterEngravingsName>{item.Name}</CharacterEngravingsName>
                <CharacterEngravingsTooltip className="tooltip">
                  {item.Description}
                </CharacterEngravingsTooltip>
              </CharacterEngravingsEffectsItem>
            ))}
          </CharacterEngravingsEffects>

          <CharacterEngravingsMounted>
            {props.Engravings.map((item, index) => (
              <CharacterEngravingsMountedItem key={index}>
                <CharacterEngravingsImage>
                  <Image
                    src={`${item.Icon ?? '/images/temp.jpg'}`}
                    fill
                    priority={true}
                    sizes="100%"
                    alt="아이템 이미지"
                  />
                </CharacterEngravingsImage>
                <CharacterEngravingsName>{item.Name}</CharacterEngravingsName>
              </CharacterEngravingsMountedItem>
            ))}
          </CharacterEngravingsMounted>
        </>
      )}
    </CharacterEngravingsContainer>
  )
}
