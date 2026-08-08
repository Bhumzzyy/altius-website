export default function ContactForm() {
  return (
    <form className="space-y-4 bg-white p-8 rounded-2xl shadow-lg">
      <div>
        <label className="block text-sm font-medium mb-1 text-altiusNavy">Full Name</label>
        <input type="text" placeholder="John Doe" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-altiusBlue" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-altiusNavy">Email Address</label>
        <input type="email" placeholder="john@example.com" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-altiusBlue" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-altiusNavy">Course Interest</label>
        <input type="text" placeholder="e.g. Foundation Batch" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-altiusBlue" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1 text-altiusNavy">Message</label>
        <textarea rows={4} placeholder="How can we help you?" className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-altiusBlue"></textarea>
      </div>
      <button type="submit" className="w-full bg-altiusBlue text-white py-3 rounded-lg font-semibold hover:bg-altiusNavy transition">Send Message</button>
    </form>
  );
}