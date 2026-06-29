import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, BookOpen, GraduationCap, MapPin, Phone, CheckCircle2, Calendar, ChevronDown, ThumbsUp } from 'lucide-react';

export default function Director() {
  const batches = [
    {
      title: "9th (Foundation)",
      description: "Build a strong foundation early on for future competitive exams and school academics.",
      duration: "12 months",
      price: "₹15,000",
      sale: true,
      popular: true,
      color: "from-blue-600 to-blue-900",
    },
    {
      title: "10th (Foundation)",
      description: "Comprehensive board prep along with early foundation for JEE/NEET.",
      duration: "12 months",
      price: "₹18,000",
      sale: false,
      popular: true,
      color: "from-purple-600 to-purple-900",
    },
    {
      title: "11th Board Batch",
      description: "Dedicated preparation for 11th state board/CBSE curriculum.",
      duration: "12 months",
      price: "₹20,000",
      sale: true,
      popular: false,
      color: "from-emerald-600 to-emerald-900",
    },
    {
      title: "12th Board Batch",
      description: "Intensive board-focused training to maximize your percentage.",
      duration: "12 months",
      price: "₹25,000",
      sale: true,
      popular: true,
      color: "from-orange-500 to-red-600",
    },
    {
      title: "JEE",
      description: "Ultimate combo for engineering aspirants. Learn from expert faculty.",
      duration: "24 months",
      price: "₹45,000",
      sale: true,
      popular: true,
      color: "from-slate-800 to-black",
    },
    {
      title: "NEET",
      description: "Rigorous medical entrance preparation with complete test series.",
      duration: "24 months",
      price: "₹45,000",
      sale: false,
      popular: true,
      color: "from-cyan-600 to-blue-700",
    },
    {
      title: "MH CET",
      description: "State level engineering and pharmacy entrance full year program.",
      duration: "12 months",
      price: "₹20,000",
      sale: true,
      popular: false,
      color: "from-pink-600 to-rose-900",
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfb] text-emerald-900 pb-20">
      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/50 text-emerald-700 text-[10px] font-black uppercase tracking-widest mb-6">
            <Target size={12} />
            <span>Vision & Leadership</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black heading-display tracking-tight text-emerald-950 mb-4">
            Director's <span className="text-primary">Desk</span>
          </h1>
          <p className="text-emerald-900/60 font-medium max-w-2xl mx-auto">
            A Techno Classes Kannad - Empowering the next generation of engineers and visionaries.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl shadow-emerald-900/5 border border-emerald-100 relative overflow-hidden mb-12"
        >
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-50 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="w-48 h-48 rounded-full overflow-hidden shrink-0 border-4 border-white shadow-xl bg-emerald-50 flex items-center justify-center p-2">
               <img src="/atechono.png" alt="Director Logo" className="w-full h-full object-contain drop-shadow-md" />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-black heading-display text-emerald-950 mb-2">
                Prof. Maheshvari Abhishek Lokhande
              </h2>
              <p className="text-emerald-700 font-bold uppercase tracking-widest text-sm mb-6">
                Director, A Techno Classes Kannad
              </p>
              
              <div className="space-y-4 text-emerald-900/70 leading-relaxed font-medium mb-6">
                <p>
                  Welcome to A TECHNO. Our vision at A Techno Classes Kannad has always been to provide unparalleled academic guidance to ambitious students preparing for JEE Mains & Advanced, NEET, and MH CET.
                </p>
                <p>
                  We believe that with the right strategy, precision-engineered practice, and a disciplined approach, every student can unlock their true potential. The A TECHNO platform is built precisely to deliver this rigorous, data-driven preparation environment right to your fingertips.
                </p>
                <p>
                  Stay focused, trust the process, and let your hard work be the foundation of your success.
                </p>
              </div>

              <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-100 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-emerald-900">
                    <span className="font-bold block mb-1">Address:</span>
                    In front of SBI Bank, opposite Honda Showroom, Main Road, Pishor, Taluka-Kannad
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-sm font-medium text-emerald-900">
                    <span className="font-bold block mb-1">Contact:</span>
                    7972528603, 9422323231
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Batch Catalog Store */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="relative z-10 text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-black heading-display text-emerald-950 mb-3">
              Explore Our <span className="text-primary italic">Programs</span>
            </h3>
            <p className="text-gray-600 text-sm font-medium">
              Comprehensive batches designed for every stage of your preparation journey.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-2 gap-3 sm:gap-6">
            {batches.map((batch, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Banner Section */}
                <div className={`relative h-32 sm:h-48 bg-gradient-to-br ${batch.color} flex items-center justify-center p-3 sm:p-6 overflow-hidden`}>
                  {batch.popular && (
                    <div className="absolute top-0 left-0 bg-[#ffb74d] text-black text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-br-lg z-10">
                      Popular
                    </div>
                  )}
                  {batch.sale && (
                    <div className="absolute top-3 -right-12 sm:-right-10 bg-red-600 text-white text-[8px] sm:text-[10px] font-black uppercase tracking-wider px-10 py-1 sm:py-1.5 transform rotate-45 z-10 shadow-md">
                      SALE
                    </div>
                  )}
                  <h4 className="text-white text-xl sm:text-3xl font-black heading-display uppercase text-center drop-shadow-md z-0 leading-tight">
                    {batch.title}
                  </h4>
                </div>

                {/* Content Section */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col">
                  <p className="text-gray-600 text-[10px] sm:text-sm mb-3 sm:mb-6 line-clamp-2 min-h-[30px] sm:min-h-[40px]">
                    "{batch.description}"
                  </p>

                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 gap-1 sm:gap-0">
                    <div className="flex items-center gap-1 sm:gap-2 text-gray-700 text-[10px] sm:text-sm font-medium">
                      <Calendar size={14} className="sm:w-4 sm:h-4" />
                      <span>{batch.duration}</span>
                    </div>
                    <div className="text-sm sm:text-xl font-black text-gray-900">
                      {batch.price}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-auto">
                    <button className="border border-gray-300 text-gray-900 rounded-lg py-1.5 sm:py-2.5 text-[10px] sm:text-sm font-bold hover:bg-gray-50 transition-colors">
                      View Details
                    </button>
                    <button className="bg-[#b91c1c] text-white rounded-lg py-1.5 sm:py-2.5 text-[10px] sm:text-sm font-bold hover:bg-red-800 transition-colors flex items-center justify-center gap-1">
                      Buy Now <ChevronDown size={14} className="sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mt-3 sm:mt-4 text-[9px] sm:text-[10px] font-medium gap-1 sm:gap-0">
                    <div className="flex items-center gap-1 text-[#b91c1c]">
                       {batch.popular ? <><ThumbsUp size={10} className="sm:w-3 sm:h-3" /> <span>Recommended</span></> : <span></span>}
                    </div>
                    <span className="text-[#b91c1c]">{index + 2} options available</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
