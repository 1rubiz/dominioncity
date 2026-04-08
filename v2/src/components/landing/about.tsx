'use client';

import { useState } from 'react';
import { ChevronDown, Eye, EyeOff, NotebookPenIcon } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: string;
  dateFormatted: string;
  icon: React.ReactNode;
}

const EVENTS: Event[] = [
  {
    id: '1',
    title: 'BREAKTHROUGH SUMMIT/ ANNIVERSARY',
    date: 'SAT 16TH - SUNDAY 17TH MAY, 2026',
    dateFormatted: 'MAY 16-17',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
  {
    id: '2',
    title: 'CHILDREN CONVENTION',
    date: 'SAT 20TH - SUN 21ST JUNE, 2026',
    dateFormatted: 'JUN 20-21',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
  {
    id: '3',
    title: "FOUNDER'S DAY CELEBRATION",
    date: '2ND AUGUST, 2026',
    dateFormatted: 'AUG 2',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
  {
    id: '4',
    title: 'BRINGING DOWN HIS GLORY',
    date: 'SUN 23RD AUGUST, 2026',
    dateFormatted: 'AUG 23',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
  {
    id: '5',
    title: 'YOUTH CONVENTION',
    date: 'SAT 19TH- SUN 20TH SEPT, 2026',
    dateFormatted: 'SEP 19-20',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
  {
    id: '6',
    title: 'MEGA CONVENTION',
    date: '23RD-25TH OCT, 2026',
    dateFormatted: 'OCT 23-25',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
  {
    id: '7',
    title: 'ANNUAL THANKSGIVING SERVICE',
    date: '29TH NOV, 2026',
    dateFormatted: 'NOV 29',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
  {
    id: '8',
    title: 'LIBERATION SERVICE',
    date: '27TH DEC, 2026',
    dateFormatted: 'DEC 27',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
  {
    id: '9',
    title: 'CROSS OVER SERVICE',
    date: 'THURS 31ST DEC, 2026',
    dateFormatted: 'DEC 31',
    icon: <NotebookPenIcon className="w-6 h-6" />,
  },
];

function About() {
  const [showEvents, setShowEvents] = useState(true);
  const [expandedEvents, setExpandedEvents] = useState(false);

  const displayedEvents = expandedEvents ? EVENTS : EVENTS.slice(0, 3);

  return (
    <>
      <section className="bg-surface py-32 px-12 text-center border-y border-secondary/20">
        <div className="max-w-4xl mx-auto">
          <div className="h-px w-24 bg-secondary mx-auto mb-16 opacity-50"></div>
          <blockquote className="font-headline italic text-3xl md:text-5xl text-on-surface leading-tight font-light mb-12">
            "We believe that every soul is called to walk in victory. Here, the
            Word is not just heard, but manifested. Welcome to a household of
            dominion."
          </blockquote>
          <p className="font-sans text-xs uppercase tracking-widest font-bold text-on-surface-variant">
            — Pastor Dr, Everson Izekor.
          </p>
          <div className="h-px w-24 bg-secondary mx-auto mt-16 opacity-50"></div>
        </div>
      </section>
      <section className="py-12 px-12 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-8">
              local_fire_department
            </span>
            <h3 className="font-headline text-3xl mb-6 tracking-tight">
              The Presence
            </h3>
            <p className="font-sans text-sm leading-relaxed text-on-primary-container max-w-xs">
              Experience an atmosphere of authentic worship where the presence
              of God is our ultimate pursuit.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-8">
              menu_book
            </span>
            <h3 className="font-headline text-3xl mb-6 tracking-tight">
              The Word
            </h3>
            <p className="font-sans text-sm leading-relaxed text-on-primary-container max-w-xs">
              Uncompromising biblical teaching that empowers you to live a life
              of spiritual authority and purpose.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-secondary text-5xl mb-8">
              groups
            </span>
            <h3 className="font-headline text-3xl mb-6 tracking-tight">
              The Family
            </h3>
            <p className="font-sans text-sm leading-relaxed text-on-primary-container max-w-xs">
              A community of believers committed to walking together in covenant
              love and mutual growth.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-surface-container-low px-12 py-6 md:px-24">
        <div className="flex justify-between items-end mb-20 border-b border-outline-variant pb-8">
          <h2 className="font-headline text-5xl tracking-tighter uppercase text-primary">
            Upcoming Events
          </h2>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setShowEvents(!showEvents)}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-secondary hover:text-primary transition-colors"
              aria-label="Toggle events visibility"
            >
              {showEvents ? (
                <Eye className="w-4 h-4" />
              ) : (
                <EyeOff className="w-4 h-4" />
              )}
              {showEvents ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        {showEvents && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-x border-outline-variant">
              {displayedEvents.map((event, index) => (
                <div
                  key={event.id}
                  className={`p-12 ${index < displayedEvents.length - 1 && displayedEvents.length <= 3 ? 'border-r' : displayedEvents.length > 3 && index % 3 !== 2 ? 'border-r' : ''} ${index >= displayedEvents.length - 3 && displayedEvents.length > 3 ? '' : index < displayedEvents.length - 3 ? 'border-b' : ''} border-outline-variant group hover:bg-surface transition-colors duration-500 cursor-pointer`}
                >
                  <span className="font-headline text-6xl text-secondary block mb-8 font-light">
                    {event.dateFormatted}
                  </span>
                  <h4 className="flex gap-2 font-headline text-2xl mb-4 text-on-surface group-hover:text-secondary transition-colors">
                    {event.icon} {event.title}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant uppercase tracking-widest">
                    {event.date}
                  </p>
                </div>
              ))}
            </div>

            {EVENTS.length > 3 && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setExpandedEvents(!expandedEvents)}
                  className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest font-bold text-secondary hover:text-primary transition-colors py-2 px-6 border border-outline-variant rounded hover:bg-surface/50"
                >
                  {expandedEvents ? 'Show Less' : 'See All Events'}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expandedEvents ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default About;
