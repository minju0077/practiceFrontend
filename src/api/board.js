import api from '@/plugins/axiosinterceptor'

const register = async (req) => {
  const res = await api.post('board/register', req)

  return res
}


export default { register }