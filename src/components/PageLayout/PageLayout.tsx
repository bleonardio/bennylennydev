import React from "react";

type PageLayoutProps = {
  children: React.ReactNode;
  title?: string;
}

const PageLayout = ({ title, children }: PageLayoutProps) => {
  return (
    <section className="container mx-auto my-10 px-4">
      {title && (
        <h1 className="text-3xl font-bold my-4">
          {title}
        </h1>
      )}

      {children}
    </section>
  );
}

export default PageLayout;