import React, { useState } from "react";
import {
  Shield,
  BookOpen,
  Award,
  Check,
  Calendar,
  ArrowRight,
  Star,
  Phone,
  ShoppingCart,
  ShieldCheck,
  Gift,
  Play,
  MapPin,
  Mail,
} from "lucide-react";

const Home = () => {
  const [counters] = useState({
    lessons: 250,
    languages: 8,
    rating: 4.8,
  });

  const heroImage =
    "https://images.pexels.com/photos/14354113/pexels-photo-14354113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formMessage, setFormMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormMessage("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="">
      {/* Hero Section */}
      <section
  id="home"
  className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-0 px-6 sm:px-10 lg:px-20"
>
  <div className="container mx-auto py-12 sm:py-16 md:py-24 ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
      {/* Left Content */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Sow the Seeds of
          <span className="block text-teal-600 dark:text-teal-400 mt-2 animate-pulse">
            Financial Success
          </span>
        </h1>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
          Join thousands of farmers learning to manage money, increase savings,
          and secure their future. Simple lessons in Tamil, with real rewards.
        </p>
        {/* CTA Button */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4">
          <button className="group flex items-center justify-center bg-gradient-to-r from-teal-600 to-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-teal-700 hover:to-green-700 transform hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Start Learning for Free
            <ArrowRight className="ml-2 sm:ml-3 h-5 sm:h-6 w-5 sm:w-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        {/* Features */}
        <div className="mt-6 sm:mt-8 flex flex-wrap justify-center md:justify-start gap-x-4 sm:gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">
            <ShieldCheck className="h-4 w-4 mr-1.5 text-teal-500" />
            Safe & Secure
          </div>
          <div className="flex items-center bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">
            <BookOpen className="h-4 w-4 mr-1.5 text-teal-500" />
            Free Lessons
          </div>
          <div className="flex items-center bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">
            <Gift className="h-4 w-4 mr-1.5 text-teal-500" />
            Get Certificate
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={heroImage}
            alt="A plant sprout growing next to a Bitcoin, symbolizing financial growth"
            className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
        {/* Decorative Blobs */}
        <div className="absolute -top-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-teal-200/50 dark:bg-teal-800/30 rounded-full -z-10 filter blur-2xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-24 sm:w-32 h-24 sm:h-32 bg-green-200/50 dark:bg-green-800/30 rounded-full -z-10 filter blur-2xl animate-pulse delay-300"></div>
      </div>
    </div>
  </div>
</section>


      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Built for <span className="text-teal-600 dark:text-teal-400">Hardworking Farmers</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We saw farmers struggling with rising costs and complex finance. So
              we built something simple - learn finance, grow savings, earn
              rewards. All in your language.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img
                  src="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg"
                  alt="Key Kissan App on phone"
                  className="relative w-[600px] mx-auto rounded-2xl shadow-xl transform group-hover:-translate-y-2 transition duration-500"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <BookOpen className="text-teal-600 dark:text-teal-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Learn Finance in 5-Minute Lessons
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Simple videos in your local language. No complex terms, just
                    practical knowledge you can use immediately.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Shield className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Grow Savings Safely
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Start small, grow steady. Your money is protected and grows
                    better than traditional methods.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <Award className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Get Certificate for Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get certificates for completing lessons and tasks.
                    Extra knowledge for real needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:scale-105 transition duration-300">
              <div className="text-4xl font-bold animate-count">{counters.lessons}+</div>
              <div className="text-xl opacity-90">Video Lessons</div>
              <div className="text-sm opacity-75">Easy 5-minute modules</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:scale-105 transition duration-300">
              <div className="text-4xl font-bold animate-count">{counters.languages}</div>
              <div className="text-xl opacity-90">Languages Supported</div>
              <div className="text-sm opacity-75">Learn in your language</div>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:scale-105 transition duration-300">
              <div className="text-4xl font-bold animate-count">{counters.rating}/5</div>
              <div className="text-xl opacity-90">User Rating</div>
              <div className="text-sm opacity-75">Trusted by farmers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You <span className="text-teal-600 dark:text-teal-400">Need in One App</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple tools designed for farmers, by people who understand your
              needs
            </p>
          </div>

          <div className="space-y-20">
            {/* Classes & Exams */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  <BookOpen size={16} className="mr-2" />
                  Classes & Exams
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Start with Simple Learning
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Watch easy video lessons about money, savings, and farming
                  finance. Take simple quizzes to test your knowledge. All in
                  your local language.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <Check className="text-teal-500 mr-3" size={20} />
                    5-minute lessons that fit your schedule
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Local language support
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Simple quizzes with instant feedback
                  </div>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Learning interface"
                  className="relative rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
                />
              </div>
            </div>

            {/* Events */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative group">
                <div className="absolute -inset-2 bg-gradient-to-r rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Live expert sessions"
                  className="relative rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  <Calendar size={16} className="mr-2" />
                  Live Events
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Join Live Expert Sessions
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Connect with other farmers and finance experts. Ask questions,
                  share experiences, and learn from the community. Build your
                  network while you learn.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Weekly live sessions with experts
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Q&A with real farmers
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Community support network
                  </div>
                </div>
              </div>
            </div>

            {/* Online Crypto Marketplace */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
                  <ShoppingCart size={16} className="mr-2" />
                  Safe & Simple Marketplace
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Buy & Sell Safely
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Start investing with just simple "Buy" and "Sell" buttons.
                  No complex charts or confusing terms. Safe, simple, and
                  designed for beginners.
                </p>
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-teal-600 to-green-600 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-700 hover:to-green-700 transition-colors shadow-md">
                    Buy
                  </button>
                  <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-red-700 hover:to-pink-700 transition-colors shadow-md">
                    Sell
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Start with as little as ₹100 • Fully secure transactions
                </p>
              </div>
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <img
                  src="https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg"
                  alt="Simple crypto wallet interface on a smartphone"
                  className="relative rounded-xl shadow-2xl transform group-hover:-translate-y-2 transition duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have questions or want to partner with us? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 p-3 rounded-full shadow-sm">
                  <MapPin size={24}/>
                </div>
                <div>
                  <div className="w-full h-96">
  <iframe
    src="https://www.google.com/maps/embed?pb=..."
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">123 AgriTech Avenue, Teynampet, Chennai, Tamil Nadu 600018</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300">
               
                <div className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 p-3 rounded-full shadow-sm">
                  <Mail size={24}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">hello@keykissan.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                <div className="bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 p-3 rounded-full shadow-sm">
                  <Phone size={24}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition duration-300">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  id="subject" 
                  required 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  rows="4" 
                  required 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-300"
                ></textarea>
              </div>
              <div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:from-teal-700 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
              {formMessage && (
                <div className="text-center p-3 bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300 rounded-lg animate-pulse">
                  {formMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <section
  id="features"
  className="w-full bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20"
>
  <div className="container mx-auto px-6">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        More Than Just a <span className="text-teal-600 dark:text-teal-400">Learning Platform</span>
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        We've spent years building the best web3 education platform to maximize
        your learning.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/844127/pexels-photo-844127.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
            alt="Interactive Learning"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center mb-3">
            <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
              <BookOpen
                className="text-blue-600 dark:text-blue-400"
                size={20}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Interactive Lessons
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
            Engage with our 5-minute video lessons designed specifically for
            farmers to understand financial concepts easily.
          </p>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-medium hover:from-teal-700 hover:to-green-700 transition-all duration-300 mt-auto">
            Start Learning
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/14354113/pexels-photo-14354113.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
            alt="Community Support"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center mb-3">
            <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
              <ShieldCheck
                className="text-green-600 dark:text-green-400"
                size={20}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Secure Savings
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
            Grow your savings safely with our protected financial tools designed
            for agricultural income cycles.
          </p>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-medium hover:from-teal-700 hover:to-green-700 transition-all duration-300 mt-auto">
            Explore Options
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
        <div className="h-48 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800&h=600"
            alt="Earn Rewards"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center mb-3">
            <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3">
              <Award
                className="text-purple-600 dark:text-purple-400"
                size={20}
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Get Certificate
            </h3>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
            Get certificates for completing lessons and applying financial
            knowledge to your farming business.
          </p>
          <button className="w-full px-4 py-2 bg-gradient-to-r from-teal-600 to-green-600 text-white rounded-lg font-medium hover:from-teal-700 hover:to-green-700 transition-all duration-300 mt-auto">
            Get Certified
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-white rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of farmers who are already learning, growing, and
            earning. Start with just 5 minutes a day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Start My Journey Now
            </button>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;