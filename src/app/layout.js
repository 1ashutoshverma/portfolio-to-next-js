// app/layout.js
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Images/hero.jpg" type="image/jpeg" />
        <title>Ashutosh Verma (Porfolio)</title>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
