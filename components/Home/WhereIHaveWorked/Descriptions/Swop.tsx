import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function TrouveTavoie() {
  const tasks = [
    {
      text:
        'Swop is a NFC Marketplace that allows users to buy and sell digital assets. The Front-End was built using JavaScript, TypeScript, Next.js/React, Redux, and Express.js. The Back-End was built using Node.js, Express.js, and Stripe. The application was deployed using Vercel and Docker on DigitalOcean. ',
      keywords: [
        'NFC Marketplace',
        'Frond-End',
        'JavaScript',
        'Node.js',
        'Redux',
        'Express.js',
        'Stripe',
        'Vercel',
        'Docker',
        'DigitalOcean',
      ],
    },
    {
      text:
        'Designed the UI/UX of the application using Figma and the NFC token are the main product of the application.',
      keywords: ['UI/UX', 'NFC', 'Marketplace', 'Product', 'Figma'],
    },
  ]

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            A NFC <span className="text-AAsecondary">Marketplace</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Mar 2023 - Jun 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: '0.6rem' }}
            // set on click to open the website
            onClick={() => window.open('https://swopme.co', '_blank')}
          >
            swopme.co
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
