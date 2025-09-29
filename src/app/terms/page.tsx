import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Saumya Kapoor Escort Services Indore',
  description: 'Terms of Service for Saumya Kapoor escort services in Indore. Read our terms and conditions for using our premium escort services.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://saumyakapoor.in/terms'
  }
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using our website and services, you accept and agree to be bound by 
                the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Age Verification</h2>
              <p className="text-gray-700 mb-4">
                You must be at least 18 years of age to use our services. By using our services, 
                you represent and warrant that you are at least 18 years old.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 mb-4">
                We provide companionship and escort services in Indore. Our services are strictly 
                for companionship, entertainment, and social activities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Booking and Payment</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All bookings must be made in advance</li>
                <li>Payment is required at the time of booking</li>
                <li>Cancellations must be made at least 2 hours in advance</li>
                <li>No refunds for late cancellations or no-shows</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Client Responsibilities</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Treat our companions with respect and courtesy</li>
                <li>Maintain personal hygiene and cleanliness</li>
                <li>Respect boundaries and limitations</li>
                <li>No recording or photography without consent</li>
                <li>Follow all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Privacy and Discretion</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality regarding all client information. We expect 
                the same level of discretion from our clients regarding our companions and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prohibited Activities</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Any illegal activities</li>
                <li>Harassment or abusive behavior</li>
                <li>Substance abuse during appointments</li>
                <li>Attempting to contact companions directly outside our agency</li>
                <li>Violating any local, state, or federal laws</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Our liability is limited to the amount paid for services. We are not liable for 
                any indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to terminate services and refuse bookings at our discretion, 
                especially in cases of inappropriate behavior or violation of these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <ul className="list-none text-gray-700">
                <li>📞 Phone: +91 9372662471</li>
                <li>🌐 Website: https://saumyakapoor.in</li>
                <li>⏰ Available 24/7</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}