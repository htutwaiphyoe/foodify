import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  head: {
    title: string;
    description: string;
  };
}
export const Layout = ({ children, head }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{head.title}</title>
        <meta name="description" content={head.description} />
      </Head>
      {children}
    </>
  );
};
