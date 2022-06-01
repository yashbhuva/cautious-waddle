/* eslint-disable react/prop-types */
import '../styles/globals.css';
import '../styles/main.css';
import Nav from '../src/components/nav';
// import Foot from '../src/components/foot';

function MyApp({ Component, pageProps }) {
    return (
        <div className="flex flex-col h-screen">
            <Nav />
            <main className="flex-1 overflow-y-auto p-5">
                <Component {...pageProps} />
            </main>
        </div>
    );
}

export default MyApp;
