import Image from 'next/image'

import {
  CharacterCardsContainer,
  CharacterCardsList,
  CharacterCardsItem,
  CharacterCardsImage,
  CharacterCardsName,
  CharacterCardsEffects,
} from '@/components/units/Character/Character.styles'
import { ICharacterCards } from '@/components/units/Character/Character.types'

export default function CharacterCards(props: ICharacterCards) {
  return (
    <CharacterCardsContainer>
      {Object.keys(props).length !== 0 && (
        <>
          <CharacterCardsList>
            {props.Cards.map((card, index) => (
              <CharacterCardsItem key={index}>
                <CharacterCardsImage>
                  <Image
                    src={`${card.Icon ?? '/images/temp.jpg'}`}
                    fill
                    priority={true}
                    sizes="100%"
                    alt="아이템 이미지"
                  />
                </CharacterCardsImage>
                <CharacterCardsName>{card.Name}</CharacterCardsName>
              </CharacterCardsItem>
            ))}
          </CharacterCardsList>
          <CharacterCardsEffects></CharacterCardsEffects>
        </>
      )}
    </CharacterCardsContainer>
  )
}
