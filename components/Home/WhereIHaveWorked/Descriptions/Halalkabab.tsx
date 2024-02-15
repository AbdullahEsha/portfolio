import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function IdealFresh() {
  const tasks = [
    {
      text:
        'A website for a restaurant that provides online food ordering. The website was built using Next.js, JavaScript, and BootStrap. The application was deployed using Vercel and the database was managed using MongoDB. The payment system was implemented using PayPal and the Google Maps API was used to show the location of the restaurant.',
      keywords: [
        'Next.js',
        'BootStrap',
        'MongoDB',
        'PayPal',
        'Google Maps',
        'JavaScript',
        'Vercel',
      ],
    },
    {
      text:
        'Creating a script to automate the process of updating the menu and the prices of the restaurant.',
      keywords: ['scripts', 'menu', 'prices'],
    },
    {
      text:
        'Interacted with the Google Maps API to show the location of the restaurant.',
      keywords: ['Google Maps', 'API', 'location', 'restaurant'],
    },
  ]
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            An <span className="text-AAsecondary">e-commerce</span> website for
            a <span className="text-AAsecondary">restaurant</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Apr 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: '0.6rem' }}
            onClick={() =>
              window.open('https://www.halalkababncurry.com', '_blank')
            }
          >
            www.halalkababncurry.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={'h-5 w-4 text-AAsecondary flex-none'} />
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
