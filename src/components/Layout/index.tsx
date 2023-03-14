import Header from '@/components/units/Header'
import Footer from '@/components/units/Footer'
import Sidebar from '@/components/units/Sidebar'
import { Wrapper, Main } from './Layout.styles'

type AppLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: AppLayoutProps) {
  return (
    <Wrapper>
      <Header />
      <Main>
        {children}
        <Sidebar />
      </Main>
      <Footer />
    </Wrapper>
  )
}
