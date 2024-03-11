import React, { ReactNode, useEffect, useRef } from "react";
import ISlide from "../../interfaces/ISlide";

const Slide: React.FC<ISlide> = ({ isOpen, children }): ReactNode => {
  const slideBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = slideBoxRef.current!;
    const scrollHeight: number = element.scrollHeight;
    console.log("Scroll height: " + scrollHeight);
    element.style.height = scrollHeight + "px";
  }, [isOpen]);

  return (
    <div ref={slideBoxRef} className="overflow-hidden transition-[height_0.5s]">
      {children}
    </div>
  );
};

export default Slide;
