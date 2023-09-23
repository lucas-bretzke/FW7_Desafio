const validateTheEmail = (email: any) => {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(email)
}

const urlValidator = (url: string) => {
  const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i
  return regex.test(url)
}

export { validateTheEmail, urlValidator }
