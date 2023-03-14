import Image from 'next/image'

import {
  CharacterClothesContainer,
  CharacterClothesList,
  CharacterClothesItem,
  CharacterClothesName,
  CharacterClothesImage,
  CharacterClothesGrade,
  CharacterClothesTooltip,
} from '@/components/units/Character/Character.styles'
import {
  ICharacterEquipment,
  ICharacterAvatars,
} from '@/components/units/Character/Character.types'

export default function CharacterClothes({
  Equipment,
  Avatars,
}: {
  Equipment: ICharacterEquipment[]
  Avatars: ICharacterAvatars[]
}) {
  return (
    <CharacterClothesContainer>
      {Equipment && (
        <CharacterClothesList>
          {Equipment.map((item, index) => (
            <CharacterClothesItem key={index}>
              <CharacterClothesImage>
                <Image
                  src={`${item.Icon ?? '/images/temp.jpg'}`}
                  fill
                  priority={true}
                  sizes="100%"
                  alt="아이템 이미지"
                />
              </CharacterClothesImage>
              <CharacterClothesGrade>{item.Grade}</CharacterClothesGrade>
              <CharacterClothesName>{item.Name}</CharacterClothesName>
            </CharacterClothesItem>
          ))}
        </CharacterClothesList>
      )}
      {Avatars && (
        <CharacterClothesList>
          {Avatars.map((item, index) => (
            <CharacterClothesItem key={index}>
              <CharacterClothesImage>
                <Image
                  src={`${item.Icon ?? '/images/temp.jpg'}`}
                  fill
                  priority={true}
                  sizes="100%"
                  alt="아이템 이미지"
                />
              </CharacterClothesImage>
              <CharacterClothesGrade>{item.Grade}</CharacterClothesGrade>
              <CharacterClothesName>{item.Name}</CharacterClothesName>
            </CharacterClothesItem>
          ))}
        </CharacterClothesList>
      )}
    </CharacterClothesContainer>
  )
}
