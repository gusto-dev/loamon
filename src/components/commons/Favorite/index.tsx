import { useState, useEffect } from 'react'
import { MdStarOutline, MdOutlineStar } from 'react-icons/md'
import { useRecoilState } from 'recoil'

import { favoriteState } from '@/lib/commons/atom'
import { FavoriteStar } from '@/components/commons/Favorite/Favorite.styles'

interface IProps {
  characterName: string
}
export default function Favorite({ characterName }: IProps) {
  const [favorites, setFavorites] = useRecoilState<string[]>(favoriteState)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favoriteCharacters = localStorage.getItem('favoriteCharacters')
      if (!favoriteCharacters)
        localStorage.setItem('favoriteCharacters', JSON.stringify([]))
      const favoriteCharactersArray = JSON.parse(favoriteCharacters || '[]')

      setFavorites(favoriteCharactersArray)
    }
  }, [setFavorites])

  const handleClickFavorite = () => {
    const isFavourited = favorites.includes(characterName)
    let favoriteCharactersArray: string[] = []

    if (isFavourited) {
      favoriteCharactersArray = favorites.filter(
        (character: string) => character !== characterName
      )
    } else {
      if (favorites.length >= 10) {
        alert('즐겨찾기는 10개까지만 가능합니다.')
        return
      }
      favoriteCharactersArray = [...favorites, characterName]
    }

    setFavorites(favoriteCharactersArray)
    localStorage.setItem(
      'favoriteCharacters',
      JSON.stringify(favoriteCharactersArray)
    )
  }

  return (
    <FavoriteStar onClick={handleClickFavorite}>
      {favorites.includes(characterName) ? (
        <MdOutlineStar />
      ) : (
        <MdStarOutline />
      )}
    </FavoriteStar>
  )
}
