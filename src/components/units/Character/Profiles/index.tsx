import Image from 'next/image'

import {
  CharacterProfileContainer,
  CharacterProfileInfo,
  CharacterProfileName,
  CharacterProfileImage,
  CharacterProfileList,
  CharacterProfileItem,
  CharacterProfileBadge,
  CharacterProfileStats,
  CharacterProfileStat,
  CharacterProfileTooltip,
  CharacterProfileTendencies,
  CharacterProfileTendency,
} from '@/components/units/Character/Character.styles'
import { ICharacterProfiles } from '@/components/units/Character/Character.types'
import Favorite from '@/components/commons/Favorite'

export default function CharacterProfiles(props: ICharacterProfiles) {
  return (
    <CharacterProfileContainer>
      {/* 캐릭터 프로필 이미지 */}
      <CharacterProfileImage>
        <Image
          src={`${props.CharacterImage ?? '/images/temp.jpg'}`}
          fill
          priority={true}
          sizes="100%"
          alt="캐릭터 이미지"
        />
      </CharacterProfileImage>

      {/* 캐릭터 프로필 기본 정보 */}
      <CharacterProfileInfo>
        <CharacterProfileName>
          <p>{props.CharacterName}</p>
          <Favorite characterName={props.CharacterName} />
        </CharacterProfileName>
        <CharacterProfileList>
          <CharacterProfileItem>
            {props.ServerName && (
              <CharacterProfileBadge>{props.ServerName}</CharacterProfileBadge>
            )}
            <CharacterProfileBadge>
              {props.CharacterClassName}
            </CharacterProfileBadge>
          </CharacterProfileItem>
          <CharacterProfileItem>
            원정대 : {props.ExpeditionLevel}
          </CharacterProfileItem>
          <CharacterProfileItem>
            아이템 : {props.ItemAvgLevel}
          </CharacterProfileItem>
          <CharacterProfileItem>
            전투 : {props.CharacterLevel}
          </CharacterProfileItem>
          <CharacterProfileItem>
            영지 : {props.TownName} {props.TownLevel}
          </CharacterProfileItem>
          <CharacterProfileItem>
            길드 : {props.GuildName ?? '-'} {props.GuildMemberGrade}
          </CharacterProfileItem>
          <CharacterProfileItem>
            PVP : {props.PvpGradeName}
          </CharacterProfileItem>
        </CharacterProfileList>
      </CharacterProfileInfo>

      {/* 캐릭터 프로필 스탯,성향 정보 */}
      <CharacterProfileInfo>
        {props.Stats && (
          <CharacterProfileStats>
            {props.Stats.map((stat, index) => (
              <CharacterProfileStat key={index}>
                {stat.Type} : {stat.Value}
                <CharacterProfileTooltip className="tooltip">
                  {stat.Tooltip.map((tooltip, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: tooltip }}
                    ></p>
                  ))}
                </CharacterProfileTooltip>
              </CharacterProfileStat>
            ))}
          </CharacterProfileStats>
        )}
        {props.Tendencies && (
          <CharacterProfileTendencies>
            {props.Tendencies.map((stat, index) => (
              <CharacterProfileTendency key={index}>
                {stat.Type} : {stat.Point} / {stat.MaxPoint}
              </CharacterProfileTendency>
            ))}
          </CharacterProfileTendencies>
        )}
      </CharacterProfileInfo>
    </CharacterProfileContainer>
  )
}
