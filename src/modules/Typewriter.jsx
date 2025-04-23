import { Typewriter } from 'react-simple-typewriter';


function WriteEffect({dataset}) {
  return (
    
      <Typewriter
        words={dataset}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1500}
      />

  );
}
export default WriteEffect;
