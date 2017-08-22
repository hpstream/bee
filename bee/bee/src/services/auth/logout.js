/**
 * Created by sunday on 04/05/2017.
 */
import { logout } from './../../store/modules/auth/actions'
import { clearPosts } from './../../store/modules/post/actions'

export default () => {
  logout()
  clearPosts()
}

