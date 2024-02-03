import { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Description of item 1",
      filesize: "1 MB", // Size in MB
      close: "true",
      tag: {
        isOpen: "false",
        tagTitle: "Important",
        tagColor: "bg-red-500 text-white", // Tailwind CSS classes
      },
    },
    {
      desc: "Description of item 2",
      filesize: "2 MB", // Size in MB
      close: "false",
      tag: {
        isOpen: "true",
        tagTitle: "Action Required",
        tagColor: "bg-blue-500 text-white", // Tailwind CSS classes
      },
    },
    {
      desc: "Description of item 3",
      filesize: "0.5 MB", // Size in MB
      close: "true",
      tag: {
        isOpen: "false",
        tagTitle: "Pending",
        tagColor: "bg-orange-500 text-white", // Tailwind CSS classes
      },
    },
    {
      desc: "Description of item 4",
      filesize: "5 MB", // Size in MB
      close: "false",
      tag: {
        isOpen: "false",
        tagTitle: "Pending",
        tagColor: "bg-orange-500 text-white", // Tailwind CSS classes
      },
    },
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex flex-wrap gap-10 p-5">
      {data.map((item, index) => (
        <Card data={item} key={index} refrence={ref} />
      ))}
    </div>
  );
};

export default Foreground;
