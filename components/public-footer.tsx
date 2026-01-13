'use client';
import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const container = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref);

  const variants = {
    visible: {
      translateY: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
    hidden: { translateY: 100, opacity: 0 },
  };

  return (
    <footer
      className='relative h-full sm:pt-20 pt-12 bg-[#f7f7f7] dark:bg-zinc-950/40 text-black dark:text-white border-t border-gray-200 dark:border-zinc-800'
      ref={container}
    >
      <div className='container max-w-7xl px-4 mx-auto'>
        <div className='md:flex justify-between w-full gap-12 items-start'>
          <div className='flex-1'>
            <h1 className='md:text-5xl text-3xl font-bold tracking-tight mb-4'>
              Let&lsquo;s do great work together
            </h1>
            <div className='pt-2 pb-6 md:max-w-md'>
              <p className='md:text-xl text-lg text-gray-600 dark:text-zinc-400 mb-8'>
                Organize your digital world beautifully with Trove.
              </p>
              
              <Link 
                href="/register"
                className='hover-button relative bg-black dark:bg-white flex justify-between items-center overflow-hidden rounded-lg text-white dark:text-black hover:bg-zinc-900 dark:hover:bg-zinc-200 transition-all duration-300 group h-16 w-full sm:w-80'
              >
                <span className='pl-8 font-bold text-lg'>
                  Get Started
                </span>
                <div className='bg-white dark:bg-black size-14 rounded-lg flex items-center justify-center mr-1 text-black dark:text-white group-hover:scale-95 transition-transform'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M5 12H19M19 12L12 5M19 12L12 19'
                      stroke='currentColor'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          <div className='flex gap-16 md:mt-4 mt-12'>
            <ul className='space-y-4'>
              <li className='text-sm font-bold tracking-[0.2em] uppercase text-gray-400 dark:text-zinc-500 mb-2'>
                SITEMAP
              </li>
              <li className='text-lg font-medium'>
                <Link href='/' className='hover:text-primary transition-colors'>Home</Link>
              </li>
              <li className='text-lg font-medium'>
                <Link href='/roadmap' className='hover:text-primary transition-colors'>Roadmap</Link>
              </li>
              <li className='text-lg font-medium'>
                <Link href='/register' className='hover:text-primary transition-colors'>Register</Link>
              </li>
            </ul>
            <ul className='space-y-4'>
              <li className='text-sm font-bold tracking-[0.2em] uppercase text-gray-400 dark:text-zinc-500 mb-2'>
                SOCIAL
              </li>
              <li className='text-lg font-medium underline underline-offset-4 decoration-current/30 hover:decoration-primary transition-all'>
                <a
                  href='https://github.com/kevinkenfack/trove'
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className='text-lg font-medium underline underline-offset-4 decoration-current/30 hover:decoration-primary transition-all'>
                <a
                  href='#'
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='mt-24 mb-12 flex flex-col items-center gap-16 overflow-hidden' ref={ref}>
          <div className='w-full border-t border-gray-200 dark:border-zinc-800' />
          
          <motion.div 
            variants={variants}
            initial='hidden'
            animate={isInView ? 'visible' : 'hidden'}
            className='w-full max-w-sm px-4'
          >
            <Image
              src='/logo-light.svg'
              alt='Trove Logo'
              width={400}
              height={100}
              className='w-full h-auto object-contain opacity-90 dark:hidden'
            />
            <Image
              src='/logo-dark.svg'
              alt='Trove Logo'
              width={400}
              height={100}
              className='w-full h-auto object-contain opacity-90 hidden dark:block'
            />
          </motion.div>

          <div className='w-full flex md:flex-row flex-col-reverse gap-6 justify-between items-center py-4 border-t border-gray-100 dark:border-zinc-900'>
            <span className='text-sm font-medium text-gray-500 dark:text-zinc-500'>
              &copy; {new Date().getFullYear()} Trove. Designed for focus.
            </span>
            <div className='flex gap-8'>
              <Link href='/privacy' className='text-sm font-semibold text-gray-700 dark:text-zinc-300 hover:text-primary transition-colors'>
                Privacy Policy
              </Link>
              <Link href='/terms' className='text-sm font-semibold text-gray-700 dark:text-zinc-300 hover:text-primary transition-colors'>
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
