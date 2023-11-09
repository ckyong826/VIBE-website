import { useState, useRef, useEffect } from "react";
import { MutableRefObject } from "react";

export default function useIntersectionObserver(){
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref:MutableRefObject<any> = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("section").forEach((el:any) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("section").forEach((el:any) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);
}
  