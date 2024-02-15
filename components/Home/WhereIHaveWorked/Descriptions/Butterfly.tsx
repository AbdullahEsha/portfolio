import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function EnsVision() {
  const tasks = [
    {
      text:
        'Worked on the development of a matrimonial website using React.js and Redux for the frontend and Laravel 9 for the backend. The website was hosted on Vercel and cPanel. The database was MySql. The website was designed using CSS, HTML, and JavaScript.',
      keywords: [
        'React.js',
        'Redux',
        'Laravel 9',
        'MySql',
        'Vercel',
        'cPanel',
        'CSS',
        'HTML',
        'JavaScript',
      ],
    },
    {
      text:
        'Conducted testing tasks to ensure website functionality and quality. Managed a large user base on the website',
      keywords: ['quality', 'testing tasks', 'user base'],
    },
    {
      text:
        'Collaborated closely with the team in regular meetings to discuss the project and its progress. Designed the UI/UX of the website using Figma.',
      keywords: ['UI/UX', 'Figma'],
    },
  ]

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            A digital platform for{' '}
            <span className="text-AAsecondary">Match making</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            Jul 2022 - Aug 2022
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: '0.6rem' }}
            // set on click to open the website
            onClick={() =>
              window.open('https://butterflymatrimonial.com', '_blank')
            }
          >
            butterflymatrimonial.com
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
