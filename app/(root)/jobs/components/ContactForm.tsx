'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  company: z.string().min(2, 'Company name is required'),
  goal: z.string().min(2, 'Goal is required'),
  date: z.string().min(2, 'Date is required'),
  budget: z.string().min(1, 'Please select a budget range'),
  email: z.string().email('Invalid email address'),
  details: z.string().optional(),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormData) {
    console.log({ data });
    setSubmitted(true);
  }

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.div
      className="px-4 sm:px-8 md:px-16 space-y-4  pb-16 sm:pb-20 md:pb-24 tracking-tight"
      initial="initial"
      animate="animate"
      variants={{
        animate: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.p {...fadeIn} className="text-base sm:text-lg text-gray-600">
        Fill the form below:
      </motion.p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <motion.div {...fadeIn} className="flex flex-wrap gap-2 items-baseline">
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl">Hi! My name is</span>
          <div className="inline-flex flex-col w-full sm:w-auto sm:flex-grow">
            <input
              {...register('name')}
              placeholder="Enter your name*"
              className="px-2 py-1 w-full sm:min-w-[200px] border-b-2 border-gray-300 bg-transparent placeholder:text-base sm:placeholder:text-xl placeholder:text-center focus:border-gray-900 outline-none transition-colors text-base sm:text-xl"
            />
            {errors.name && (
              <span className="text-sm text-[#ce2d19] mt-1">{errors.name.message}</span>
            )}
          </div>
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl">and I work with</span>
          <div className="inline-flex flex-col w-full sm:w-auto sm:flex-grow">
            <input
              {...register('company')}
              placeholder="Company name type here*"
              className="px-2 py-1 w-full sm:min-w-[200px] border-b-2 border-gray-300 bg-transparent placeholder:text-base sm:placeholder:text-xl placeholder:text-center focus:border-gray-900 outline-none transition-colors text-base sm:text-xl"
            />
            {errors.company && (
              <span className="text-sm text-[#ce2d19] mt-1">{errors.company.message}</span>
            )}
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="flex flex-wrap gap-2 items-baseline">
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl">
            I&#39;m looking for a partner to help me with
          </span>
          <div className="inline-flex flex-col w-full">
            <input
              {...register('goal')}
              placeholder="Your goal type here*"
              className="px-2 py-1 w-full border-b-2 border-gray-300 bg-transparent placeholder:text-base sm:placeholder:text-xl placeholder:text-center focus:border-gray-900 outline-none transition-colors text-base sm:text-xl"
            />
            {errors.goal && (
              <span className="text-sm text-[#ce2d19] mt-1">{errors.goal.message}</span>
            )}
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="flex flex-wrap gap-2 items-baseline">
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl">
            With an idea of having that completed
          </span>
          <div className="inline-flex flex-col w-full sm:w-auto sm:flex-grow">
            <input
              {...register('date')}
              type="date"
              className="px-2 py-1 w-full sm:min-w-[200px] border-b-2 border-gray-300 bg-transparent placeholder:text-base sm:placeholder:text-xl placeholder:text-center focus:border-gray-900 outline-none transition-colors text-base sm:text-xl"
            />
            {errors.date && (
              <span className="text-sm text-[#ce2d19] mt-1">{errors.date.message}</span>
            )}
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="flex flex-wrap gap-2 items-baseline">
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl">
            I am hoping to stay around a budget range of
          </span>
          <div className="inline-flex flex-col w-full sm:w-auto sm:flex-grow">
            <select
              {...register('budget')}
              className="px-2 py-1 w-full sm:min-w-[200px] border-b-2 border-gray-300 bg-transparent placeholder:text-base sm:placeholder:text-xl placeholder:text-center focus:border-gray-900 outline-none transition-colors text-base sm:text-xl"
            >
              <option value="">Select*</option>
              <option value="5000-15000">$5,000 - 15,000</option>
              <option value="15000-25000">$15,000 - 25,000</option>
              <option value="25000-plus">$25,000 - 50,000+</option>
            </select>
            {errors.budget && (
              <span className="text-sm text-[#ce2d19] mt-1">{errors.budget.message}</span>
            )}
          </div>
        </motion.div>

        <motion.div {...fadeIn} className="flex flex-wrap gap-2 items-baseline">
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl">You can reach me at</span>
          <div className="inline-flex flex-col w-full sm:w-auto sm:flex-grow">
            <input
              {...register('email')}
              type="email"
              placeholder="name@example.com"
              className="px-2 py-1 w-full sm:min-w-[250px] border-b-2 border-gray-300 bg-transparent placeholder:text-base sm:placeholder:text-xl placeholder:text-center focus:border-gray-900 outline-none transition-colors text-base sm:text-xl"
            />
            {errors.email && (
              <span className="text-sm text-[#ce2d19] mt-1">{errors.email.message}</span>
            )}
          </div>
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl">
            to start the conversation
          </span>
        </motion.div>

        <motion.div {...fadeIn} className="space-y-2">
          <span className="text-xl sm:text-3xl md:text-5xl lg:text-7xl">
            Optionally, I&#39;m sharing more:
          </span>
          <div className="inline-flex flex-col w-full">
            <textarea
              {...register('details')}
              placeholder="Product details type here"
              className="w-full min-h-[100px] px-2 py-1 border-b-2 border-gray-300 bg-transparent placeholder:text-base sm:placeholder:text-xl placeholder:text-center focus:border-gray-900 outline-none transition-colors text-base sm:text-xl resize-none"
            />
          </div>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 gap-4"
        >
          <div className="flex items-center space-x-2">
            <Checkbox {...register('privacyPolicy')} id="privacy" className="border-gray-300" />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              I agree with the{' '}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.privacyPolicy && (
            <span className="text-sm text-[#ce2d19]">{errors.privacyPolicy.message}</span>
          )}

          <button type="submit" className="inline-block">
            Send Inquiry
          </button>
        </motion.div>
      </form>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg"
        >
          Thank you! Your inquiry has been submitted.
        </motion.div>
      )}
    </motion.div>
  );
}
