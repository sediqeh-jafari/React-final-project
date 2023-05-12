import './style.css'

function Footer() {

    return (
        <>
            <p className="footer_text">loreCompiled successfully!

                You can now view my-app in the browser.

                Local:            http://localhost:3000
                On Your Network:  http://192.168.24.96:3000

                Note that the development build is not optimized.
                To create a production build, use npm run build.

                webpack compiled successfully</p>

        </>
    )
}

export default Footer