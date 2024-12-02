import { useEffect, useState } from "react";
import { AccordionItem } from "./AccordionItem";

interface AccordionProps { 
    items: { id: number; title: string; content: string,videoLink?: string ; }[]; 
    defaultOpenId?: number| null; 
  } 
   
  export default function Accordion2({ items, defaultOpenId }: AccordionProps) { 
   
    if (!Array.isArray(items)) { 
      console.error("items is not an array", items); 
      return null; 
    } 
   
    const [openItemId, setOpenItemId] = useState<number | null>( 
      defaultOpenId || null 
    ); 
   
    const handleToggle = (id: number) => { 
      setOpenItemId((prevId) => (prevId === id ? null : id)); 
    }; 
   
    useEffect(() => { 
      if (defaultOpenId !== undefined) { 
        setOpenItemId(defaultOpenId); 
      } 
    }, [defaultOpenId]); 
   
    return ( 
      <div className="accordion w-full  mx-auto my-4"> 
        {items.map((item) => ( 
          <AccordionItem 
            key={item.id} 
            id={item.id} 
            title={item.title} 
            content={item.content} 
            videoLink={item.videoLink}
            isOpen={openItemId === item.id} 
            onToggle={handleToggle} 
          /> 
        ))} 
      </div> 
    ); 
  }