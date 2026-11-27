
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Statistics from "./components/Statistics";
import Products from "./components/Products";
import Certifications from "./components/Certifications";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

    const [company, setCompany] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch("/api/company")
            .then(response => {

                if (!response.ok) {

                    throw new Error(
                        "Java backend connection failed"
                    );

                }

                return response.json();

            })
            .then(data => setCompany(data))
            .catch(error => setError(error.message));

    }, []);

    return (

        <div className="relative w-full">

            <Header />

            <main>

                <Hero company={company} />

                <About company={company} />

                <Statistics />

                <Products />

                <Certifications />

                <WhyChooseUs />

                <Testimonials />

                <Blog />

                <Contact />

                {error && (

                    <p className="bg-red-50 text-red-600 text-center p-3">
                        {error}
                    </p>

                )}

            </main>

            <Footer />

        </div>

    );
}

export default App;
