"use client"
import React, {useEffect, useRef, useState} from 'react';
import {Progress} from "@/components/ui/progress";

export function ProgressBar() {
  const [widthBar, setWidthBar] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;
    let width = 0;

    const timer = setInterval(() => {
      if (width < 100) {
        width += 1;
        width === 100 ? width = 0 : width;
        setWidthBar(width);
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <Progress value={widthBar} className="w-[60px] h-1.5"/>
  );
}
