import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function SuperBerry() {
  const tasks = [
    {
      text:
        'Designed and Built user-friendly customizable e-commerce platform using Next.js, TailwindCSS, TypeScript, Express.js, MongoDB, Firebase, Redux, JWT, SSL Commerz, AWS EC2, and Vercel etc.',
      keywords: [
        'Next.js',
        'TailwindCSS',
        'TypeScript',
        'Express.js',
        'MongoDB',
        'Firebase',
        'Redux',
        'JWT',
        'SSL Commerz',
        'AWS EC2',
        'Vercel',
      ],
    },
    {
      text:
        'For better SEO, implemented server-side rendering and optimized the website for performance using Next.js.',
      keywords: ['Next.js', 'SEO', 'server-side rendering'],
    },
    {
      text:
        'Provided technical support and troubleshoots errors and/or problems with web based applications.',
      keywords: ['technical support', 'troubleshoots'],
    },
  ]

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            A e-commerce platform for{' '}
            <span className="text-AAsecondary">Women Wear</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            June 2023 - Present
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: '0.6rem' }}
            onClick={() =>
              window.open('https://www.nazaaralifestyle.com', '_blank')
            }
          >
            www.nazaaralifestyle.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={' h-5 w-4 text-AAsecondary flex-none'} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(
                      item.text,
                      item.keywords,
                    ),
                  }}
                ></span>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
