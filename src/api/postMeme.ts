export const postMeme = async (payload: any) => {
  const response = await fetch("https://api.imgflip.com/caption_image", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ ...payload }),
  })
  const data = response.json()
  return data
}

/*
 */
