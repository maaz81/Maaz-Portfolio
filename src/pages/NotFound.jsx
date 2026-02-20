import { Link } from "react-router-dom";

import SEO from "../components/SEO";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-white">
            <SEO title="404 - Page Not Found" />
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-gray-400 mb-6">Page not found</p>
            <Link
                to="/"
                className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700"
            >
                Back to Home
            </Link>
        </div>
    );
}
