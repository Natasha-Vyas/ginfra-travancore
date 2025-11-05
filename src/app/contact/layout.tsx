import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Contact GInfra Travancore | Defense Manufacturing Partner India",
  description: "Get in touch with GInfra Travancore Pvt. Ltd. for defense manufacturing, fuze systems, and aerospace component inquiries. Connect with our business development and technical teams for pilot trials or ToT discussions.",
  keywords: "contact GInfra Travancore, defense manufacturing partner, fuze systems inquiry, aerospace components, business development, technical teams, pilot trials, ToT discussions, India defense contractor",
  openGraph: {
    title: "Contact GInfra Travancore | Defense Manufacturing Partner India",
    description: "Get in touch with GInfra Travancore Pvt. Ltd. for defense manufacturing, fuze systems, and aerospace component inquiries. Connect with our business development and technical teams for pilot trials or ToT discussions.",
    url: "https://ginfratravancore.com/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://ginfratravancore.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}