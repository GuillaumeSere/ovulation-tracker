import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const metadata: Metadata = {
    title: "Calcul Ovulation & Suivi du Cycle | Fertilité & Grossesse",
    description:
        "Application gratuite pour suivre son cycle menstruel, calculer l'ovulation, connaître la période fertile et augmenter ses chances de grossesse.",
    keywords: [
        "ovulation",
        "calcul ovulation",
        "cycle menstruel",
        "fertilité",
        "calendrier ovulation",
        "suivi cycle femme",
        "période fertile",
        "grossesse"
    ],
    robots: "index, follow",
    openGraph: {
        title: "Suivi du Cycle & Calcul Ovulation",
        description:
            "Découvrez vos jours fertiles grâce à un calendrier intelligent et un score de fertilité.",
        url: "https://ovulation-tracker.vercel.app",
        siteName: "CycleCare",
        locale: "fr_FR",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Calculateur Ovulation",
        description:
            "Suivez votre cycle et découvrez vos jours fertiles facilement."
    },
    verification: {
        google: "nwVPqsKRGvHVh9v-Qn4QoawQzNbN99Sfg6usOSlUEhg"
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const schema = {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        name: "Calcul Ovulation",
        description:
            "Application pour suivre son cycle menstruel et calculer la période fertile.",
        audience: {
            "@type": "PeopleAudience",
            suggestedGender: "female"
        }
    }

    return (
        <html lang="fr">
            <body className="flex flex-col min-h-screen">

                {/* Schema.org SEO */}
                <Script
                    id="schema-org"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />

                {/* Google Translate Widget */}
                <Script
                    src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                    strategy="beforeInteractive"
                />
                <Script id="google-translate-init" strategy="beforeInteractive">
                    {`
                        function googleTranslateElementInit() {
                            new google.translate.TranslateElement(
                                {pageLanguage: 'fr', layout: google.translate.TranslateElement.InlineLayout.SIMPLE},
                                'google_translate_element'
                            );
                        }
                    `}
                </Script>

                {/* Header */}
                <Header />
                {/* Place du widget de traduction */}
                <div id="google_translate_element" className="ml-auto mr-4 mt-2"></div>

                <main className="grow">
                    {children}
                </main>

                <Footer />

            </body>
        </html>
    )
}