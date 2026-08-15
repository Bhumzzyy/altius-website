'use client';

export default function ContactInfoCard() {
  return (
    <div className="space-y-8 pr-0 lg:pr-6">
      <div>
        <h2 className="font-serif text-2xl font-bold text-altiusNavy mb-2">Get in touch</h2>
        <p className="text-gray-600 text-xs leading-relaxed">
          Sociosqu viverra lectus placerat sem efficitur molestie vehicula cubilia leo etiam nam.
        </p>
      </div>

      {/* Info Items with SVGs */}
      <div className="space-y-6">
        
        {/* Head Office */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-md bg-altiusNavy text-altiusGold flex items-center justify-center shrink-0 shadow-sm border border-altiusGold/20">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-altiusNavy">Head Office</h4>
            <p className="text-gray-600 text-xs mt-0.5 leading-relaxed">Jalan Cempaka Wangi No 22<br />Jakarta - Indonesia</p>
          </div>
        </div>

        {/* Email Us */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-md bg-altiusNavy text-altiusGold flex items-center justify-center shrink-0 shadow-sm border border-altiusGold/20">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-altiusNavy">Email Us</h4>
            <p className="text-gray-600 text-xs mt-0.5">support@yourdomain.tld<br />hello@yourdomain.tld</p>
          </div>
        </div>

        {/* Call Us */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-md bg-altiusNavy text-altiusGold flex items-center justify-center shrink-0 shadow-sm border border-altiusGold/20">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-sm text-altiusNavy">Call Us</h4>
            <p className="text-gray-600 text-xs mt-0.5">Phone : +6221.2002.2012<br />Fax : +6221.2002.2013</p>
          </div>
        </div>

      </div>

      {/* Social Media Links */}
      <div className="pt-4">
        <h4 className="font-bold text-xs text-altiusNavy mb-3">Follow our social media</h4>
        <div className="flex items-center gap-3">
          {['f', 'in', 't', 'y'].map((social, i) => (
            <div key={i} className="w-8 h-8 rounded-md bg-altiusNavy text-altiusGold flex items-center justify-center text-xs font-bold hover:bg-altiusBlue hover:text-white transition cursor-pointer shadow-sm">
              {social}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}