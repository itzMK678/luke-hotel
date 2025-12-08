export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground pt-12 pb-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">LUXE Hotel</h3>
            <p className="text-sm opacity-90">Experience luxury redefined with world-class hospitality</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#rooms" className="hover:opacity-80">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#amenities" className="hover:opacity-80">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-80">
                  Reservations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>+1 (555) 123-4567</li>
              <li>info@luxehotel.com</li>
              <li>123 Luxury Ave, City</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:opacity-80">
                Facebook
              </a>
              <a href="#" className="hover:opacity-80">
                Instagram
              </a>
              <a href="#" className="hover:opacity-80">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-2 text-center text-[10px] opacity-80">
          <p>&copy; 2025 LUXE Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
