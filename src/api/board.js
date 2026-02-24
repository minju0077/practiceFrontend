import api from '@/plugins/axiosinterceptor'

const register = async (req) => {
  const res = await api.post('board/register', req)

  return res
}

const list = async () => {
  const res = await api.get('board/list')
  return res
}


export default { register, list }