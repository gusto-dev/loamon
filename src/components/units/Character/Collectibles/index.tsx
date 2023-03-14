import Image from 'next/image'

import {
  CharacterCollectiblesContainer,
  CharacterCollectiblesList,
  CharacterCollectiblesItem,
  CharacterCollectiblesType,
  CharacterCollectiblesName,
  CharacterCollectiblesImage,
  CharacterCollectiblesPoints,
  CharacterCollectiblesPoint,
} from '@/components/units/Character/Character.styles'
import { ICharacterCollectibles } from '@/components/units/Character/Character.types'

export default function CharacterCollectibles({
  Collectibles,
}: {
  Collectibles: ICharacterCollectibles[]
}) {
  return (
    <CharacterCollectiblesContainer>
      {Collectibles && (
        <CharacterCollectiblesList>
          {Collectibles.map((item, index) => {
            return (
              <CharacterCollectiblesItem key={index}>
                <CharacterCollectiblesType>
                  <CharacterCollectiblesImage>
                    <Image
                      src={`${item.Icon ?? '/images/temp.jpg'}`}
                      fill
                      priority={true}
                      sizes="100%"
                      alt="아이템 이미지"
                    />
                  </CharacterCollectiblesImage>
                  <CharacterCollectiblesName>
                    {item.Type}
                  </CharacterCollectiblesName>
                  {item.Point} / {item.MaxPoint}
                </CharacterCollectiblesType>
                <CharacterCollectiblesPoints>
                  {item.CollectiblePoints.map((point, index) => {
                    return (
                      <CharacterCollectiblesPoint key={index}>
                        {point.PointName}
                        <br />
                        {point.Point} / {point.MaxPoint}
                      </CharacterCollectiblesPoint>
                    )
                  })}
                </CharacterCollectiblesPoints>
              </CharacterCollectiblesItem>
            )
          })}
        </CharacterCollectiblesList>
      )}
    </CharacterCollectiblesContainer>
  )
}
