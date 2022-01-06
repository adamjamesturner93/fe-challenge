import Link from 'next/link'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
    <div className="w-full flex flex-col h-screen bg-gray-200">
        <header className="px-8 flex justify-between h-16 items-center bg-gray-700 text-gray-50">
          <strong>Qogita</strong>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/">
                  <a className="underline">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <a className="underline">Your Cart</a>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="px-8">
          {children}
        </main>
    </div>

)

export default Layout
