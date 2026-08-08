export default function ContactInfo() {
  return (
    <div className="bg-altiusNavy text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
      <div>
        <h3 className="font-serif text-2xl font-bold mb-4 text-altiusGold">Contact Info</h3>
        <p className="text-sm mb-4 text-gray-300">Reach our center during working hours or drop us an email anytime.</p>
        <div className="space-y-3 text-sm">
          <p>📍 <strong>Location:</strong> Education Hub, Main Street</p>
          <p>📞 <strong>Phone:</strong> +1 (555) 123-4567</p>
          <p>✉️ <strong>Email:</strong> info@altiuseducation.com</p>
        </div>
      </div>
      <div className="mt-8 text-xs text-altiusGold tracking-widest uppercase">
        Learn Higher. Achieve Greater.
      </div>
    </div>
  );
}