import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <html lang='en'>
            <body>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )

}
export default Layout;