export const getMemes = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes")
  const memes = response.json()
  return memes
}