'use client';

export default function ContactMap() {
  return (
    <section className="w-full pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-gray-100">
          <iframe
            title="Kassapay / Altius Campus Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.055812345678!2d72.8310607!3d21.1702401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjkiTiA3MsKwNDknNTIuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}