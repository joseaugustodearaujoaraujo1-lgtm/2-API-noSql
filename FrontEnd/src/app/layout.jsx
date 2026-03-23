import "./styleGlobal.css"

export default function RootLayout({ children }){
    return(
        <html>
            <body>
                {children}
            </body>
        </html>
    )
}