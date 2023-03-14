export default interface HomeProps {
  className?: string
  noticeList: HomeNoticesProps[]
  eventList: HomeEventsProps[]
}

export interface HomeNoticesProps {
  Date?: string
  Link?: string
  Title?: string
  Type?: string
}

export interface HomeEventsProps {
  StartDate?: string
  EndDate?: string
  RewardDate?: string
  Link?: string
  Title?: string
  Thumbnail?: string
}
