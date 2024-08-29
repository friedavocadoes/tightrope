import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Generator = () => {  
  const { register, handleSubmit, formState: { errors } } = useForm({});
  const navigateTo = useNavigate();

  
  const onSubmit = (data) => {
    navigateTo('/results', { state: { data } });
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl bg-[#606797] bg-opacity-0 lg:bg-opacity-40 md:bg-opacity-40 backdrop-blur-[20px] pb-32 p-10 md:p-20 lg:p-20 rounded-lg shadow-2xl relative z-2 text-center mt-32 mb-20 pt-16">
        <h1 className="text-4xl font-bold text-slate-200 mb-8">Plan Your Vacation</h1>
        

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div className="flex flex-col">
            <label htmlFor="mood" className="text-sm font-medium text-gray-300 mb-2">Mood</label>
            <input
              type="text"
              id="mood"
              {...register('mood')}
              placeholder="How are you feeling today?"
              className="border border-gray-600 bg-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />
            
            {errors.mood && <p className="text-red-500 text-sm mt-2">{errors.mood.message}</p>}
          </div>
          

          <div className="flex flex-col">
            <label htmlFor="budget" className="text-sm font-medium text-gray-300 mb-2">Budget (INR)</label>
            <input
              type="text"
              id="budget"
              {...register('budget')}
              placeholder="Estimated Travel Budget"
              className="border border-gray-600 bg-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />
          
            {errors.budget && <p className="text-red-500 text-sm mt-2">{errors.budget.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="lang" className="text-sm font-medium text-gray-300 mb-2">Languages</label>
            <input
              type="text"
              id="lang"
              {...register('lang')}
              placeholder="The languages you speak (seperate with comma)"
              className="border border-gray-600 bg-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />
          
            {errors.budget && <p className="text-red-500 text-sm mt-2">{errors.budget.message}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="loc" className="text-sm font-medium text-gray-300 mb-2">Starting Location</label>
            <div className="flex items-center mb-4">
              <input
                type="text"
                id="loc"
                {...register('loc', { required: 'Starting location is required' })}
                placeholder="Where are you travelling from?"
                className="border border-gray-600 bg-gray-700 text-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-1"
              />
            </div>
            {errors.location && <p className="text-red-500 text-sm mt-2">{errors.location.message}</p>}
          </div>
          
          <button type="submit" className="w-full bg-[#DFA175] text-white py-3 rounded-lg hover:bg-[#B6B6BF] focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Generate Plans
          </button>
        </form>
      </div>
    </div>
  );
};

export default Generator;
