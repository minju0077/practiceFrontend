import api from '@/plugins/axiosinterceptor'

const register = async (req) => {
  const res = await api.post('board/register', req)

  return res
}

const read = async (req) => {
  const res = await api.get('/board/read', req)

  return res
}

const list = async (req) => {
  const res = await api.get('/board/list', req)

  return res
}

export default { register, read, list }