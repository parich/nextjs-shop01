import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import dynamic from 'next/dynamic';
//import DarkMode from './DarkMode';
const DarkMode = dynamic(() => import('./DarkMode'), { ssr: false });

export default function Layout({ children, title, description }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - NextShop' : 'NextShop'}</title>
        {description && <meta content={description} name="description"></meta>}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between ">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link href="/">
              <a className="text-lg font-bold">NextShop</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/cart">
                <a className="p-2">Logout</a>
              </Link>
              <DarkMode className="p-2" />
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p>Copyright © 2022 NextShop</p>
        </footer>
      </div>
    </>
  );
}
