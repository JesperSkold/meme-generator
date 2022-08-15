export const postMeme = async (payload: any) => {
  // const testload:any = {
  //         "template_id": payload.id,
  //     "text0": payload.text0,
  //     "text1": payload.text1,
  //     "username": payload.username,
  //     "password": payload.password
  // }
// export const postMeme = async (payload: { id: string; text0: string; text1: string; username: string; password: string }) => {
  console.log(payload);
const response = await fetch("https://api.imgflip.com/caption_image", {
    method:"POST",
    headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({...payload
      // "template_id": payload.id,
      // "text0": payload.text0,
      // "text1": payload.text1,
      // "username": payload.username,
      // "password": payload.password
    })
  })
  
  const data = response.json()
  return data
}

/*
 */
