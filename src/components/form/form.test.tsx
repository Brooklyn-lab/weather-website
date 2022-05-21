import { Provider } from 'react-redux'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { configureMockStore } from '@jedmao/redux-mock-store'

import Form from './form'

const mockStore = configureMockStore()

describe('Component Form', () => {
  it('should render correctly', () => {
    const store = mockStore({
      cities: [],
    })

    render(
      <Provider store={store}>
        <Form />
      </Provider>
    )

    const input = screen.getByPlaceholderText('Enter location')
    expect(screen.getByTestId('input')).toContainHTML('')
    fireEvent.input(input, {
      target: { value: '12345' },
    })
    expect(screen.getByTestId('input')).toContainHTML('12345')
  })
})
