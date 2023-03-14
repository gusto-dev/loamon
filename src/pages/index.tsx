import axios from 'axios'

import { Wrapper } from './Home.styles'
import HomeProps from './Home.types'
import News from '@/components/units/News'

const Home = (props: HomeProps) => {
  const { noticeList, eventList } = props

  return noticeList.length !== 0 && eventList.length !== 0 ? (
    <Wrapper>
      <News noticeList={noticeList} eventList={eventList} />
    </Wrapper>
  ) : (
    <div>점검중</div>
  )
}

export async function getServerSideProps() {
  try {
    const noticeRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}//news/notices`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    )
    const eventRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}//news/events`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        },
      }
    )
    return {
      props: { noticeList: noticeRes.data, eventList: eventRes.data },
    }
  } catch (error) {
    console.log(error)
    return {
      props: { noticeList: [], eventList: [] },
    }
  }
}

export default Home
