import React, { useEffect, useRef } from "react";

const letters = "&1$*01_____";

interface MyComponentProps {
  texy: string;
}

const Text: React.FC<MyComponentProps> = ({ texy }) => {
  const screenRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  let interval: NodeJS.Timeout | null = null;

  useEffect(() => {
    const screen = screenRef.current;
    const name = nameRef.current;

    if (!screen || !name) return;

    const handleMouseEnter = () => {
      let iteration = -1;

      if (interval) {
        clearInterval(interval);
      }

      interval = setInterval(() => {
        const textValue = name.dataset.value; // Get the data-value safely

        if (!textValue) return; // Check if textValue is defined

        name.innerText = textValue
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return textValue[index]; // Use the textValue variable
            }
            return letters[Math.floor(Math.random() * letters.length)]; // Return a random character
          })
          .join("");

        iteration += 1 / 4;

        if (iteration >= textValue.length) {
          clearInterval(interval!);
        }
      }, 16);
    };

    screen.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      screen.removeEventListener("mouseenter", handleMouseEnter);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, []);

  return (
    <div ref={screenRef} className="screen">
      <div ref={nameRef} className="name  h-fit " data-value={texy}>
        {texy}
      </div>
    </div>
  );
};

export default Text;
