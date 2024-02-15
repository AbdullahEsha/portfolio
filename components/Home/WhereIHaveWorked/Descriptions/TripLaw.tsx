import React from 'react'
import ArrowIcon from '../../../Icons/ArrowIcon'
import { getTasksTextWithHighlightedKeyword } from './taskAndType'

export default function Fantasia() {
  const tasks = [
    {
      text:
        'Developed a website for a law firm that provides legal services. The website was built using React.js, CSS, and cPanel. The application was deployed using cPanel and the website was integrated with Email.js for the contact form.',
      keywords: ['React.js', 'CSS', 'cPanel', 'Email.js', 'JavaScript', 'HTML'],
    },
    {
      text:
        'Tested the website on different devices and browsers to ensure compatibility and responsiveness. The website was also optimized for performance and SEO.',
      keywords: ['compatibility', 'responsiveness', 'performance', 'SEO'],
    },
  ]
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          A <span className="text-AAsecondary">law firm</span> website for{' '}
          <span className="text-AAsecondary">trip-law</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Nov 2022</span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          // set text size on style attribute
          style={{ fontSize: '0.6rem' }}
          onClick={() => window.open('https://trip-law.com', '_blank')}
        >
          trip-law.com
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
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
  )
}
