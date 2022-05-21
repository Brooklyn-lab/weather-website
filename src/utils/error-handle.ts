import request from 'axios'
import { toast } from 'react-toastify'
import { HttpCode } from '../constants'
import { ErrorType } from '../types/error'

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error
  }

  const { response } = error

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        break
      case HttpCode.NOT_FOUND:
        toast.error('city not found')
        break
    }
  }
}
