/**
 * Created by sunday on 04/05/2017.
 */
import { login, logout } from './../../store/modules/auth/actions'

export default (data) => {
  logout()
  login(data.token)
}
