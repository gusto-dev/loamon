import { NextPage, NextPageContext } from 'next'
import axios from 'axios'

import { Wrapper } from '@/components/units/Character/Character.styles'
import ICharacterProps from '@/components/units/Character/Character.types'
import Character from '@/components/units/Character'

const CharacterPage = (props: ICharacterProps) => {
  const { data } = props

  return (
    <Wrapper>
      <Character data={data} />
    </Wrapper>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  try {
    const { name } = ctx.query
    const resHeader = {
      headers: {
        Accept: 'application/json',
        Authorization: `bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
    const reqUrl = [
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/profiles`,
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/equipment`,
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/avatars`,
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/combat-skills`,
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/engravings`,
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/cards`,
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/gems`,
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/colosseums`,
      `${process.env.NEXT_PUBLIC_API_URL}/armories/characters/${name}/collectibles`,
      `${process.env.NEXT_PUBLIC_API_URL}/characters/${name}/siblings`,
    ]
    const data = await axios
      .all(reqUrl.map((url) => axios.get(url, resHeader)))
      .then(
        axios.spread(
          (
            { data: Profiles },
            { data: Equipment },
            { data: Avatars },
            { data: CombatSkills },
            { data: Engravings },
            { data: Cards },
            { data: Gems },
            { data: Colosseums },
            { data: Collectibles },
            { data: Siblings }
          ) => {
            return {
              Profiles,
              Equipment,
              Avatars,
              CombatSkills,
              Engravings,
              Cards,
              Gems,
              Colosseums,
              Collectibles,
              Siblings,
            }
          }
        )
      )

    return { props: { data } }
  } catch (error) {
    console.log(error)
    return { props: { data: {} } }
  }
}

export default CharacterPage
