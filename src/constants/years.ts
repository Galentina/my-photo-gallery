import { MenuProps } from 'antd'
import { ALL_ALBUMS } from './AllAlbumsConstant'

export const YEARS_DATA: MenuProps['items'] = [
  {
    label: '1970 - 1977',
    key: '1970-1977',
    icon: null,
    children: [
      {
        label: '1970 - 1977',
        key: '1970-1977',
      },
    ],
  },
  {
    label: '1978 - 1988',
    key: '1978-1988',
    icon: null,
    children: [
      {
        label: '1978 - 1988',
        key: '1978-1988',
      },
    ],
  },
  {
    label: '1989 - 1995',
    key: '1989-1995',
    icon: null,
    children: [
      {
        label: '1989 - 1995',
        key: '1989-1995',
      },
    ],
  },
]

export const ALL_YEARS = [
  { year: '1970-1977', parent: '1970-1977' },
  { year: '1978-1988', parent: '1978-1988' },
  { year: '1989-1995', parent: '1989-1995' },
]

export const findAlbums = (id: string) => {
  return ALL_ALBUMS.find(el => el.id === id)
}
