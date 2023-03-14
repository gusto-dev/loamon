export default interface ICharacterProps {
  className?: string
  data: {
    Profiles: ICharacterProfiles
    Avatars: ICharacterAvatars[]
    Equipment: ICharacterEquipment[]
    CombatSkills: ICharacterCombatSkills[]
    Engravings: ICharacterEngravings
    Cards: ICharacterCards
    Gems: ICharacterGems
    Colosseums?: ICharacterColosseums
    Collectibles: ICharacterCollectibles[]
    Siblings: ICharacterSiblings[]
  }
}

// 프로필
export interface ICharacterProfiles {
  CharacterClassName: string
  CharacterImage?: string
  CharacterLevel: number
  CharacterName: string
  ExpeditionLevel: number
  GuildMemberGrade?: string
  GuildName?: string
  ItemAvgLevel: string
  ItemMaxLevel: string
  PvpGradeName?: string
  ServerName: string
  TownLevel?: number
  TownName?: string
  Stats: CharacterProfileStats[]
  Tendencies: CharacterProfileTendencies[]
}
interface CharacterProfileStats {
  Type: string
  Value: string
  Tooltip: string[]
}
interface CharacterProfileTendencies {
  Type: string
  Point: number
  MaxPoint: number
}

// 장비
export interface ICharacterEquipment {
  Grade?: string
  Icon?: string
  Name?: string
  Tooltip?: string[]
  Type?: string
}

// 아바타
export interface ICharacterAvatars extends ICharacterEquipment {
  IsInner?: boolean
  IsSet?: boolean
}

// 전투기술
export interface ICharacterCombatSkills {
  Icon?: string
  IsAwakening?: boolean
  Level?: number
  Name?: string
  Rune?: string
  Tooltip?: string[]
  Type?: string
  Tripods?: CharacterCombatSkillsTripods[]
}
interface CharacterCombatSkillsTripods {
  Icon?: string
  IsSelected?: boolean
  Level?: number
  Name?: string
  Slot?: number
  Tier?: number
  Tooltip?: string[]
}

// 각인
export interface ICharacterEngravings {
  Effects: CharacterEngravingsEffects[]
  Engravings: CharacterEngravingsEngravings[]
}
interface CharacterEngravingsEffects {
  Name?: string
  Description?: string
}
interface CharacterEngravingsEngravings {
  Icon?: string
  Name?: string
  Slot?: number
  Tooltip?: string[]
}

// 카드
export interface ICharacterCards {
  Cards: CharacterCardsCards[]
  Effects: CharacterCardsEffects[]
}
interface CharacterCardsCards {
  AwakeCount?: number
  AwakeTotal?: number
  Grade?: string
  Icon?: string
  Name?: string
  Slot?: number
  Tooltip?: string[]
}
interface CharacterCardsEffects {
  Index?: number
  CardSlots?: number[]
  Items?: CharacterCardsEffectsItems[]
}
interface CharacterCardsEffectsItems {
  Name?: string
  Description?: string
}

// 보석
export interface ICharacterGems {
  Effects: CharacterGemsEffects[]
  Gems: CharacterGemsGems[]
}
interface CharacterGemsEffects {
  Name?: string
  Description?: string
  GemSlot?: number
  Icon?: string
  Tooltip?: string[]
}
interface CharacterGemsGems {
  Grade?: string
  Level: number
  Icon?: string
  Name?: string
  Slot?: number
  Tooltip?: string[]
}

// PVP
export interface ICharacterColosseums {
  Rank?: number
  PreRank?: number
  Exp?: number
  Colosseums?: CharacterColosseumsColosseums[]
}
interface CharacterColosseumsColosseums {
  CoOpBattle?: string
  Competitive?: string
  Deathmatch?: string
  SeasonName?: string
  TeamDeathmatch?: string
  TeamElimination?: string
}

// 수집품
export interface ICharacterCollectibles {
  Icon?: string
  Point?: number
  MaxPoint?: number
  Type?: string
  CollectiblePoints: CharacterCollectiblesCollectiblePoints[]
}
interface CharacterCollectiblesCollectiblePoints {
  PointName?: string
  Point?: number
  MaxPoint?: number
}

// 보유 캐릭터
export interface ICharacterSiblings {
  ServerName?: string
  CharacterName?: string
  CharacterLevel: number
  CharacterClassName?: string
  ItemAvgLevel: string
  ItemMaxLevel: string
}
