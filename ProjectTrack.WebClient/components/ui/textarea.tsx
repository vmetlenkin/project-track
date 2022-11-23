import React, { useEffect, useRef, useState} from 'react';

const Textarea = ({ ...etc }) => {
  const textareaRef = useRef(null);
  const [currentValue, setCurrentValue ] = useState('22');

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [currentValue]);

  return (
    <textarea
      ref={textareaRef}
      className="block overflow-hidden resize-none w-full outline-none font-medium"
      {...etc}
      value={currentValue}

      onChange={e=>{
        setCurrentValue(e.target.value);
      }}
    />
  );
};

export default Textarea;