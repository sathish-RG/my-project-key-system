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
    <div>
      <section id="home" className="w-full bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight">
                Sow the Seeds of
                <span className="block text-teal-600 dark:text-teal-400 mt-2">
                  Financial Success
                </span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
                Join thousands of farmers learning to manage money, increase
                savings, and secure their future. Simple lessons in Tamil, with
                real rewards.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button className="group flex items-center justify-center bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-700 transform hover:-translate-y-1 transition-all duration-300 shadow-xl">
                  Start Learning for Free
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-2 text-teal-500" />
                  Safe & Secure
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-2 text-teal-500" />
                  Free Lessons
                </div>
                <div className="flex items-center">
                  <Gift className="h-4 w-4 mr-2 text-teal-500" />
                  Earn Rewards
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="A plant sprout growing next to a Bitcoin, symbolizing financial growth"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-teal-200/50 dark:bg-teal-800/30 rounded-full -z-10 filter blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-200/50 dark:bg-green-800/30 rounded-full -z-10 filter blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Built for Hardworking Farmers
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We saw farmers struggling with rising costs and complex finance. So
              we built something simple - learn finance, grow savings, earn
              rewards. All in your language.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Key Kissan App on phone"
                  className="w-80 mx-auto"
                />
                
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-teal-600" size={24} />
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
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="text-blue-600" size={24} />
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
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Earn Rewards for Learning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get real money rewards for completing lessons and tasks.
                    Extra income for real needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">{counters.lessons}+</div>
              <div className="text-xl opacity-90">Video Lessons</div>
              <div className="text-sm opacity-75">Easy 5-minute modules</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">{counters.languages}</div>
              <div className="text-xl opacity-90">Languages Supported</div>
              <div className="text-sm opacity-75">Learn in your language</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">{counters.rating}/5</div>
              <div className="text-xl opacity-90">User Rating</div>
              <div className="text-sm opacity-75">Trusted by farmers</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          {/* ... Features section content ... */}
           {/* Section 2.2: Real Numbers Counter */}
      

      {/* Section 3: Product Features Tour */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need in One App
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple tools designed for farmers, by people who understand your
              needs
            </p>
          </div>

          <div className="space-y-20">
            {/* 3.1 Classes & Exams */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full text-sm font-semibold">
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
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Check className="text-teal-500 mr-3" size={20} />
                    5-minute lessons that fit your schedule
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Local language support
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Simple quizzes with instant feedback
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Learning interface"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>

            {/* 3.2 Events */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Live expert sessions"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold">
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
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Weekly live sessions with experts
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Q&A with real farmers
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Check className="text-teal-500 mr-3" size={20} />
                    Community support network
                  </div>
                </div>
              </div>
            </div>

            {/* 3.3 Online Crypto Marketplace */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold">
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
                  <button className="bg-teal-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors">
                    Buy
                  </button>
                  <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Sell
                  </button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Start with as little as ₹100 • Fully secure transactions
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1639755243883-6964b2b7324c?q=80&w=1887&auto=format&fit=crop"
                  alt="Simple crypto wallet interface on a smartphone"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>

            {/* 3.4 Learn-to-Earn Tasks */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
                  <div className="text-center space-y-8">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                        <BookOpen className="text-teal-600" size={24} />
                      </div>
                      <ArrowRight className="text-gray-400" size={24} />
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                        <Check className="text-blue-600" size={24} />
                      </div>
                      <ArrowRight className="text-gray-400" size={24} />
                      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                        <Award className="text-purple-600" size={24} />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                     
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <div className="inline-flex items-center bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-semibold">
                  <Award size={16} className="mr-2" />
                  Learn-to-Earn Tasks
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Earn While You Learn
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Simple 3-step process: Watch a lesson, take a quiz, earn
                  rewards. Get real money for building your financial
                  knowledge. Extra income for your real needs.
                </p>
                <div className="bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg border border-teal-200 dark:border-teal-700">
                  <p className="text-teal-700 dark:text-teal-400 font-semibold">
                    Learn & Earn
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          {/* ... Testimonials section content ... */}
           {/* Section 4: Testimonials - Real People */}
      <section id="testimonials" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Real Farmers, Real Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Hear from farmers who transformed their financial lives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl relative">
              <div className="relative mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=300&h=200&fit=crop&crop=face"
                  alt="Ramesh Kumar testimonial video"
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                  <button className="bg-white/90 text-teal-600 p-3 rounded-full hover:bg-white transition-all">
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                "In 6 months, I learned more about money than in 20 years of
                farming. Now I earn ₹1500 extra every month!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
                  alt="Ramesh Kumar"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Ramesh Kumar
                  </div>
                  <div className="text-sm text-gray-500">
                    Wheat Farmer, Haryana
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "Started with ₹500, now my savings grew to ₹25,000. The Hindi
                lessons made everything so easy to understand!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
                  alt="Priya Devi"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Priya Devi
                  </div>
                  <div className="text-sm text-gray-500">
                    Rice Farmer, Punjab
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                "My family was worried about new technology, but Key Kissan made
                it so simple. Now we all use it!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=100&h=100&fit=crop&crop=face"
                  alt="Suresh Patel"
                  className="w-12 h-12 rounded-full mr-3"
                />
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Suresh Patel
                  </div>
                  <div className="text-sm text-gray-500">
                    Cotton Farmer, Gujarat
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Have questions or want to partner with us? We'd love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 dark:bg-teal-900 text-teal-600 p-3 rounded-full">
                  <MapPin size={24}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Our Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">123 AgriTech Avenue, Teynampet, Chennai, Tamil Nadu 600018</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="bg-teal-100 dark:bg-teal-900 text-teal-600 p-3 rounded-full">
                  <Mail size={24}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">hello@keykissan.com</p>
                </div>
              </div>
               <div className="flex items-start space-x-4">
                <div className="bg-teal-100 dark:bg-teal-900 text-teal-600 p-3 rounded-full">
                  <Phone size={24}/>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">+91 98765 43210</p>
                </div>
              </div>
            </div>
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <div>
                <label htmlFor="name" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
                <input type="email" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500"/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Subject</label>
                <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-left text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea name="message" id="message" rows="4" required value={formData.message} onChange={handleInputChange} className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-teal-500 focus:border-teal-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-teal-600 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-teal-700 transition-all duration-300 shadow-md">
                  Send Message
                </button>
              </div>
              {formMessage && <p className="text-center text-teal-600 dark:text-teal-400">{formMessage}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
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
            <p className="text-sm opacity-75">
              ✓ Free to start • ✓ Learn in your language • ✓ Earn while you
              learn
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;