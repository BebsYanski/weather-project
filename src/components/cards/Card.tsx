import React from "react";

type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function Card({ children, title }: Props) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 m-4 w-full max-w-4xl flex flex-col gap-4">
      {title && <h2 className="text-2xl font-semibold mb-2">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}
