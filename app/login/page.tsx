// `app/login/page.tsx` is the UI for the `/login` URL
import Link from 'next/link'
import Login from './components/Login'

export default function Page() {
    return (
        <main>
            <h1>Login Page</h1>
            <Link href="/">HOME</Link>
            <Login />
        </main>
    )
}