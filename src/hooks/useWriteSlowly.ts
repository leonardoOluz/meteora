import { useEffect, useState } from "react";

const useWriteSlowly = (title: string) => {
   const [writeTitle, setWriteTitle] = useState("");
  
    useEffect(() => {
      if (writeTitle.length < title.length) {
        setInterval(() => {
          setWriteTitle(
            (prev) => prev + title.slice(prev.length, writeTitle.length + 1)
          );
        }, 50);
      }
    }, [writeTitle, title]);
  return writeTitle
}

export default useWriteSlowly