import { useEffect, useState } from "react";

export function useHeadings() {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3")
    ) as HTMLHeadingElement[];

    const newHeadings = elements.map((el) => ({
      id: el.id,
      text: el.innerText,
      level: Number(el.tagName.replace("H", "")),
    }));

    setHeadings(newHeadings);
  }, []);

  return headings;
}