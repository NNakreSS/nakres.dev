import React, { ReactNode, useEffect, useRef } from "react";
import ISlide from "../../interfaces/ISlide";

const Slide: React.FC<ISlide> = ({ isOpen, children }): ReactNode => {
  const slideBoxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = slideBoxRef.current!;
    if (isOpen) {
      const scrollHeight: number = element.scrollHeight;
      console.log(scrollHeight);
      element.style.height = scrollHeight + "px";
    } else {
      element.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div
      ref={slideBoxRef}
      className="overflow-hidden transition-[height] ease-in-out duration-1000"
    >
      {children}
    </div>
  );
};

export default Slide;
