import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'
export default function FeverTokens() {
  const tasks = [
    {
      text:
        'Developed a new website for Bayshore Communication, a company that provides a wide range of services including web development, mobile app development, and digital marketing. The website was built using Next.js, TypeScript, and TailwindCSS. ',
      keywords: [
        'TypeScript',
        'Next.js',
        'TailwindCSS',
        'Bayshore Communication',
        'web development',
        'mobile app development',
        'digital marketing',
      ],
    },
    {
      text:
        'Worked with a team of two developers to build a new website for the Bayshore Communication company.',
      keywords: ['team of two developers', 'Bayshore Communication', 'website'],
    },
    {
      text: 'Interacted with the Stripe API to implement a payment system.',
      keywords: ['Stripe', 'API', 'payment', 'system'],
    },
  ]
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            A digital marketing agency{' '}
            <span className="text-AAsecondary">service website</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Feb 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: '0.6rem' }}
            onClick={() =>
              window.open('https://www.bayshorecommunication.com', '_blank')
            }
          >
            www.bayshorecommunication.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
