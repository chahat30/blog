import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { useDispatch, useSelector} from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../../services/index/users';
import ProfilePicture from '../../components/ProfilePicture';

export default function ProfilePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

    const {data: profileData, isLoading: profileIsLoading, error: profileError} = useQuery({
        queryFn : () => {
            return getUserProfile({ token: userState.userInfo.token});
        },
        queryKey: ['profile']   //if key is same in another page ,it uses cached data in our browser
    })

    useEffect( () => {
      if(!userState.userInfo){
        navigate('/');
      }
    },[navigate , userState.userInfo]);

    const {register, handleSubmit, formState:{errors, isValid}} = useForm({
        defaultValues:{
            name:"",
            email:"",
            password:"",
        },
        values:{
            name: profileIsLoading? "" : profileData.name,
            email: profileIsLoading? "" : profileData.email,
        },
        mode:"onChange"
    })
    const submitHandler = (data) =>{
        
    };
    

  return (
    <MainLayout>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <ProfilePicture avatar={profileData?.avatar}/>    
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="name"
                className="text-[#5a7184] font-semibold block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name",{           //validation rules
                    minLength:{
                        value:1,
                        message:"Name length must be atleast 1 character"
                    },
                    required:{
                        value:true,
                        message:"Name is required"
                    }
                 })}
                placeholder="Enter name"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9] ${errors.name? "border-red-500": "border-[#c3cad9]"}`}
              />
              {errors.name?.message && (
                <p className='text-red-500 text-xs mt-1'>{errors.name?.message}</p>
              )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email",{           //validation rules
                    pattern:{
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Enter a valid email',
                    },
                    required:{
                        value:true,
                        message:"email is required"
                    }
                 })}
                placeholder="Enter email"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9] ${errors.email? "border-red-500": "border-[#c3cad9]"}`} />
                {errors.email?.message && (
                    <p className='text-red-500 text-xs mt-1'>{errors.email?.message}</p>
                  )}
            </div>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password",{
                    required:{
                        value:true,
                        message:"Password is required"
                    },
                    minLength:{
                        value:6,
                        message:"Password length must be atleast 6 character"
                    }
                })}
                placeholder="Enter password"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border border-[#c3cad9] ${errors.password? "border-red-500": "border-[#c3cad9]"}`} />
                {errors.password?.message && (
                <p className='text-red-500 text-xs mt-1'>{errors.password?.message}</p>
              )}
            </div>
           
            <button type='submit' disabled={!isValid || profileIsLoading} className='bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 disabled:opacity-70 disabled:cursor-not-allowed'>Register</button>
            </form>
        </div>
      </section>
    </MainLayout>
  );
}
