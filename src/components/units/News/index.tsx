import Image from 'next/image'
import Link from 'next/link'

import {
  NewsContainer,
  NewsTitle,
  NewsSubTitle,
  NewsRow,
  NewsBox,
  NewsList,
  NewsItem,
  NewsItemTitle,
  NewsItemType,
  NewsItemThumbnail,
  NewsItemDate,
} from '@/pages/Home.styles'
import HomeProps, {
  HomeNoticesProps,
  HomeEventsProps,
} from '@/pages/Home.types'
import { getFormatDate } from '@/lib/commons'

export default function News(props: HomeProps) {
  const { noticeList, eventList } = props

  return (
    <NewsContainer>
      <NewsTitle>새소식</NewsTitle>
      <NewsRow>
        <NewsBox>
          <NewsSubTitle>
            공지사항
            <Link href="/notices">+</Link>
          </NewsSubTitle>
          <NewsList>
            {noticeList.map(
              (notice: HomeNoticesProps, index) =>
                index < 10 && (
                  <NewsItem key={index}>
                    <NewsItemType>[{notice.Type}]</NewsItemType>
                    <a href={`${notice.Link}`} target="_blank" rel="noreferrer">
                      <NewsItemTitle>{notice.Title}</NewsItemTitle>
                    </a>
                  </NewsItem>
                )
            )}
          </NewsList>
        </NewsBox>
        <NewsBox>
          <NewsSubTitle>
            이벤트
            <Link href="/events">+</Link>
          </NewsSubTitle>
          <NewsList>
            {eventList.map(
              (event: HomeEventsProps, index) =>
                index < 4 && (
                  <NewsItem key={index} className="thumbnail">
                    <a href={`${event.Link}`} target="_blank" rel="noreferrer">
                      <NewsItemThumbnail>
                        <Image
                          src={`${event.Thumbnail ?? '/images/temp.jpg'}`}
                          fill
                          priority={true}
                          sizes="100%"
                          alt="캐릭터 이미지"
                        />
                      </NewsItemThumbnail>
                      <NewsItemTitle>
                        {event.Title}
                        <NewsItemDate>
                          {getFormatDate(event.StartDate)} ~{' '}
                          {getFormatDate(event.EndDate)}
                        </NewsItemDate>
                      </NewsItemTitle>
                    </a>
                  </NewsItem>
                )
            )}
          </NewsList>
        </NewsBox>
      </NewsRow>
    </NewsContainer>
  )
}
