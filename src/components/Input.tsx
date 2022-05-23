import { IInput } from '../types/types';

export const Input = ({ text = '', ...props }: IInput) => {
  return (
    <div className='Input'>
      <p className='Input__tag'>{text}</p>
      <input {...props} />
    </div>
  );
}
