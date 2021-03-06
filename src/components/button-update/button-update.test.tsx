import * as Redux from 'react-redux'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import { configureMockStore } from '@jedmao/redux-mock-store'

import ButtonUpdate from './button-update'

const mockStore = configureMockStore()
const store = mockStore()

describe('Component ButtonUpdate', () => {
  it('should render correctly', () => {
    const dispatch = jest.fn()
    const useDispatch = jest.spyOn(Redux, 'useDispatch')
    useDispatch.mockReturnValue(dispatch)

    const buttonText = 'Update'

    render(
      <Provider store={store}>
        <ButtonUpdate cityName={buttonText} textButton={buttonText} />
      </Provider>
    )

    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
    expect(screen.getByText('Update')).toBeInTheDocument()
  })
})
