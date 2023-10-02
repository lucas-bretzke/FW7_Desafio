const urlValidator = (url: string) => {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return regex.test(url)
}

function generateRandomString(length: number) {
  let newChart = ''
  const chart = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  for (let i = 0; i < length; i++) {
    newChart += chart.charAt(Math.floor(Math.random() * chart.length))
  }
  return newChart
}

export { urlValidator, generateRandomString }
