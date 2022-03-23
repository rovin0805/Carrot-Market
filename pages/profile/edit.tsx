import type { NextPage } from 'next';
import Button from '@components/button';
import Input from '@components/input';
import Layout from '@components/layout';
import useUser from '@libs/client/useUser';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import useMutation from '@libs/client/useMutation';

interface EditProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  avatar?: FileList;
  formErrors?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
    watch,
  } = useForm<EditProfileForm>();
  const [editProfile, { loading, data }] =
    useMutation<EditProfileResponse>('/api/users/me');
  const avatar = watch('avatar');
  const [avatarPreview, setAvatarPreview] = useState('');

  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreview(previewUrl);
    }
  }, [avatar]);

  useEffect(() => {
    if (user?.name) setValue('name', user.name);
    if (user?.email) setValue('email', user.email);
    if (user?.phone) setValue('phone', user.phone);
  }, [user, setValue]);

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError('formErrors', { message: data.error });
    }
  }, [data, setError]);

  const onValid = async ({ email, phone, name, avatar }: EditProfileForm) => {
    if (loading) return;
    if (email === '' && phone === '' && name === '') {
      return setError('formErrors', {
        message: 'Email OR Phone number are required. You need to choose one.',
      });
    }
    if (avatar && avatar.length > 0) {
      const { id, uploadURL } = await (await fetch(`/api/files`)).json();
      const form = new FormData();
      form.append('file', avatar[0], user?.id + '');
      await fetch(uploadURL, {
        method: 'POST',
        body: form,
      });
      return;
      editProfile({
        email,
        phone,
        name,
        // avatarURL : CF.URL
      });
    } else {
      editProfile({ email, phone, name });
    }
  };

  return (
    <Layout canGoBack title='Edit Profile'>
      <form onSubmit={handleSubmit(onValid)} className='space-y-4 py-10 px-4'>
        <div className='flex items-center space-x-3'>
          {avatarPreview ? (
            <img
              src={avatarPreview}
              className='h-14 w-14 rounded-full bg-slate-500'
            />
          ) : (
            <div className='h-14 w-14 rounded-full bg-slate-500' />
          )}
          <label
            htmlFor='picture'
            className='cursor-pointer rounded-md border border-gray-300 py-2 px-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2'>
            Change
            <input
              {...register('avatar')}
              id='picture'
              type='file'
              className='hidden'
              accept='image/*'
            />
          </label>
        </div>
        <Input
          register={register('name')}
          required={false}
          label='Name'
          name='name'
          type='text'
        />
        <Input
          register={register('email')}
          required={false}
          label='Email address'
          name='email'
          type='email'
        />
        <Input
          register={register('phone')}
          required={false}
          label='Phone number'
          name='phone'
          type='number'
          kind='phone'
        />
        {errors.formErrors ? (
          <span className='my-2 block text-center font-medium text-red-500'>
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button loading={loading} text='Update profile' />
      </form>
    </Layout>
  );
};

export default EditProfile;
