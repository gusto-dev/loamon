import { useRecoilValue } from 'recoil'
import Link from 'next/link'

import { favoriteState } from '@/lib/commons/atom'
import {
  SidebarContainer,
  SidebarFavorites,
  SidebarFavoriteItem,
} from '@/components/Layout/Layout.styles'

export default function Sidebar() {
  const favorites = useRecoilValue<string[]>(favoriteState)

  return (
    <SidebarContainer>
      <SidebarFavorites>
        {favorites.map((favorite: string, index) => (
          <SidebarFavoriteItem key={index}>
            <Link href={`/character/${favorite}`}>{favorite}</Link>
          </SidebarFavoriteItem>
        ))}
      </SidebarFavorites>
    </SidebarContainer>
  )
}
