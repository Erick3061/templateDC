import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../../components/Input';
import { Switch } from '../../components/Switch';
import logo from '../../assets/logo.png';
import cover from '../../assets/cover.png';
import { I_LogIn } from '../../interfaces/interfaces';

export const LogInPage = () => {
  const [sw1, setSw1] = useState<boolean>(false);
  const { register, formState: { errors }, handleSubmit, getValues } = useForm<I_LogIn>();

  const onSubmit: SubmitHandler<I_LogIn> = data => {
    console.log(data);
  }

  const nameClass: string = 'container__LogIn';
  return (
    <div className={nameClass}>
      <div className={`${nameClass}_cover`}>
        <img className='image' src={cover} alt="" />
        <h1>Bienvenido</h1>
      </div>

      <div className='container-form'>
        <h2>Inicia sesión</h2>
        <div className='container-logo'>
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input placeholder='Usuario' register={register} type='text' kys='access' errors={errors} />
          <Input placeholder='Contraseña' register={register} type='password' kys='password' errors={errors} />
          <Switch text='Recordar datos de sesión' func={() => setSw1(!sw1)} value={sw1} key='Switch' />
          <div className='container-btn'>
            <button className='btn_LogIn' type="submit">inicia sesión</button>
            {/* <div className='separator'>
              <span className='separator-line separator-line--left'></span>
              <p className='separator-text'>or</p>
              <span className='separator-line separator-line--right'></span>
            </div> */}
          </div>
        </form>
      </div>

      <p className='copyright'>Copyright © 2022 AAAAAA</p>
    </div>
  )
}
