import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold text-[#92400E]">Contact Us</h1>
          <p className="mt-3 text-zinc-700">Have questions about adoption, foster care, or volunteering? Send us a message.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ContactForm />

          <aside className="space-y-6">
            <div className="rounded-lg border border-zinc-100 p-6 bg-white">
              <h3 className="text-lg font-semibold text-[#92400E]">Get in touch</h3>
              <p className="mt-2 text-sm text-zinc-700">You can also reach us by phone or visit our shelter during opening hours.</p>

              <ul className="mt-4 text-sm text-zinc-700 space-y-2">
                <li><strong>Phone:</strong> (555) 123-4567</li>
                <li><strong>Email:</strong> hello@pawsandhearts.org</li>
                <li><strong>Address:</strong> 123 Pet Lane, Happyville</li>
                <li><strong>Hours:</strong> Mon–Sat, 10am–5pm</li>
              </ul>
            </div>

            <div className="rounded-lg border border-zinc-100 p-6 bg-white">
              <h4 className="font-medium">FAQ</h4>
              <p className="mt-2 text-sm text-zinc-700">For common questions about adoption requirements and our process, check the About page or send us a message and we'll reply quickly.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
