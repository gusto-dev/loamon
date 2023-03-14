import Link from 'next/link'

import {
  CharacterSiblingsContainer,
  CharacterSiblingsList,
  CharacterSiblingsItem,
  CharacterSiblingsName,
} from '@/components/units/Character/Character.styles'
import { ICharacterSiblings } from '@/components/units/Character/Character.types'

export default function CharacterSiblings({
  Siblings,
}: {
  Siblings: ICharacterSiblings[]
}) {
  if (!Siblings) return null
  const sortedSiblings = Siblings.sort((a, b) => {
    const aLevel = parseFloat(a.ItemAvgLevel.replace(',', ''))
    const bLevel = parseFloat(b.ItemAvgLevel.replace(',', ''))
    return bLevel - aLevel
  })

  return (
    <CharacterSiblingsContainer>
      <CharacterSiblingsList>
        {sortedSiblings.map((item, index) => (
          <CharacterSiblingsItem key={index}>
            <Link href={`/character/${item.CharacterName}`}>
              <dl>
                <dt>{item.ServerName}</dt>
                <dd>
                  <p>{item.CharacterClassName}</p>
                  <p>{item.CharacterName}</p>
                  <p>{item.ItemAvgLevel}</p>
                </dd>
              </dl>
            </Link>
          </CharacterSiblingsItem>
        ))}
      </CharacterSiblingsList>
    </CharacterSiblingsContainer>
  )
}
