import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Next.login',
}

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <nav>Navbar</nav>

            {children}
        </section>
    )
}