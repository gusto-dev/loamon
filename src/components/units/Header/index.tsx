import { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { MdLightMode, MdDarkMode, MdSearch } from 'react-icons/md'

import {
  HeaderContainer,
  HeaderRow,
  HeaderLogo,
  HeaderSearch,
  HeaderSearchRow,
  HeaderSearchInput,
  HeaderSearchButton,
  HeaderActions,
  HeaderActionsThemeButton,
  HeaderMenu,
} from '@/components/Layout/Layout.styles'

export default function Header() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  const handleClick = async () => {
    if (!name) return
    router.push(`/character/${name}`)
    setName('')
  }

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <HeaderContainer>
      <HeaderRow className="spaceBetween">
        <HeaderLogo>
          <Link href="/">LOAMON</Link>
        </HeaderLogo>
        <HeaderSearch>
          <HeaderSearchRow>
            <HeaderSearchInput
              type="text"
              placeholder="캐릭터 검색"
              value={name}
              onChange={handleChange}
              onKeyUp={handleKeyUp}
            />
            <HeaderSearchButton onClick={handleClick}>
              <MdSearch title="찾기" />
            </HeaderSearchButton>
          </HeaderSearchRow>
        </HeaderSearch>
        <HeaderActions>
          <HeaderActionsThemeButton onClick={handleThemeChange}>
            {theme === 'dark' ? (
              <MdLightMode title="라이트 모드" />
            ) : (
              <MdDarkMode title="다크 모드" />
            )}
          </HeaderActionsThemeButton>
        </HeaderActions>
      </HeaderRow>

      <HeaderMenu>
        <Link href="/">홈</Link>
        <Link href="/auctions">경매장</Link>
        <Link href="/markets">거래소</Link>
        <Link href="/guilds">길드</Link>
      </HeaderMenu>
    </HeaderContainer>
  )
}
