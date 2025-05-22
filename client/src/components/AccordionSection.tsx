import React from 'react';
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from './ui/accordion';
import { FileText } from 'lucide-react';
import Loading from './Loading';


const AccordionSection = ({sections}:AccordionSectionsProps) => {
    if(!sections) return <Loading/>
  return (
    <div>
        <Accordion type="multiple" className='w-full'>
            {sections.map((section)=>(
                <AccordionItem
                  key={section.sectionId}
                  value={section.sectionTitle}
                  className='accordion-section'>
                    <AccordionTrigger className='accordion-section__trigger'>
                        <h5 className="accordion-section__title">{section.sectionTitle}</h5>
                    </AccordionTrigger>
                    <AccordionContent className="accordion-section__content">
                        <ul>
                            {section.chapters.map((chapter)=>(
                                <li key={chapter.chapterId} className="accordion-section__chapter">
                                    <FileText className='mr-2 w-4 h-4'/>
                                    <span className="text-sm">{chapter.title}</span>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
  )
}

export default AccordionSection