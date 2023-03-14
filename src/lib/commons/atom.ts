import { atom } from 'recoil'
import { v1 } from 'uuid'

export const favoriteState = atom<string[]>({
  key: `favorites/${v1()}`, // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
})
