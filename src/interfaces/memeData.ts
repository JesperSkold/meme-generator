export interface MemeData {
  success: boolean
  data: {
    memes: Meme[]
  }
}

export interface Meme {
  id: string
  name: string
  url: string
  width: number
  height: number
  "box_count": number
}

export interface NewMeme {
  success: boolean
  data: {
    url: string,
    page_url: string
  } 
  error_message?: string
}
