const CITI_NAME = 'cityName'

export type SelectedCity = string

export const getCityName = (): SelectedCity => {
  const cityName = localStorage.getItem(CITI_NAME)
  return cityName ?? ''
}

export const saveCityName = (cityName: SelectedCity): void => {
  localStorage.setItem('cityName', cityName)
}
