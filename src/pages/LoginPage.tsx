import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { ILogin } from '../types/types';

export const LoginPage = () => {
  const { register, handleSubmit } = useForm<ILogin>();
  // const { register, handleSubmit, watch, formState: { errors } } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = data => console.log(data);

  return (
    <div className='Login'>
      <h1>Start your new lifestyle...</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          text='Email'
          type='text'
          {...register('email')}
        />
        <Input
          text='Password'
          type='password'
          {...register('password')}
        />
        <Button text='Login' />
      </form>
      <p className='Login__link'>Don't you have an account yet? <br /> Create one here.</p>
    </div>
  )
}
