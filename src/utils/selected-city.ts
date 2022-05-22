const CITY_NAME = 'cityName'

export type SelectedCity = string

export const getCityName = (): SelectedCity => {
  const cityName = localStorage.getItem(CITY_NAME)
  return cityName ?? ''
}

export const saveCityName = (cityName: SelectedCity): void => {
  localStorage.setItem('cityName', cityName)
}
