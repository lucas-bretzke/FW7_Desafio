type IInputLink = {
  code: string
  user_id: number
  description: string
  original_url: string
}

interface ILink {
  link_id: number
  original_url: string
  short_url: string
  description: string
  user_id: number
  is_favorite: boolean
  access_count: number
  created_at: Date
}
