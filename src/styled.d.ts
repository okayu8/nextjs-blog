import 'styled-components'
import Const from './const'

declare module 'styled-components' {
  export interface DefaultTheme {
    COLOR: typeof Const.LIGHT_THEME | typeof Const.DARK_THEME
    SIZE: typeof Const.SIZE
  }
}
