import React from 'react'

export default function Contact({ id = 'contact' }) {
  const email = 'nareshdewasi021@gmail.com'
  const x = 'https://x.com/NareshDewa26000'
  const github = 'https://github.com/nares10'
    return (
      <section id={id} className="container max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-3xl font-bold">Contact</h1>

      <div className="mt-6">
        <div className="flex flex-row items-center gap-4">
          <a
            className="icon-btn nav-btn cta-btn w-44 h-10 flex items-center justify-center text-sm"
            href={`mailto:${email}`}
            title={`Email — ${email}`}
            aria-label={`Email ${email}`}
          >
            <span className="icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7.5L12 13l9-5.5" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>Email</span>
          </a>

          <a
            className="icon-btn nav-btn cta-btn w-44 h-10 flex items-center justify-center text-sm"
            href={x}
            target="_blank"
            rel="noopener noreferrer"
            title={`X — @${x.split('/').pop()}`}
            aria-label={`X profile`}
          >
            <span className="icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 12c2-2.5 5-4 8-4 3 0 6 1.5 8 4-2 2.5-5 4-8 4-3 0-6-1.5-8-4z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8l2 2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>X</span>
          </a>

          <a
            className="icon-btn nav-btn cta-btn w-44 h-10 flex items-center justify-center text-sm"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            title={`GitHub — ${github.split('/').pop()}`}
            aria-label={`GitHub profile`}
          >
            <span className="icon" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2c-5 0-9 4-9 9 0 4 3 7 6 8 0 0 .5.1.5-.3v-1c-2 .4-2.5-1-2.5-1-.3-.8-.8-1-1-1-.8-.6 0-.6 0-.6.9 0 1.3.9 1.3.9.8 1.3 2 1 2.5.8.1-.6.3-1 .6-1.2-1.6-.2-3.3-.8-3.3-3.6 0-.8.3-1.5.8-2-.1-.2-.3-1 .1-2 0 0 .6-.2 2 .8.6-.2 1.2-.3 1.8-.3s1.2.1 1.8.3c1.4-1 2-.8 2-.8.4 1.1.2 1.8.1 2 .5.5.8 1.2.8 2 0 2.8-1.7 3.4-3.3 3.6.3.3.6.9.6 1.8v2.7c0 .4.4.4.5.3 3-1 6-4 6-8 0-5-4-9-9-9z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}
