import { IButton } from '../types/interfaces'

export const Button = ({ text }: IButton) => {
  return (
    <button className='Button' onClick={() => console.log('CLicked...')}>
      {text}
    </button>
  )
}
