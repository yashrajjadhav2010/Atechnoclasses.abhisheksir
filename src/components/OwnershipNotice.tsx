import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertTriangle, Info, X } from 'lucide-react';

export default function OwnershipNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-lg"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-gray-200"
          >
            <div className="bg-amber-50 border-b border-amber-100 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-amber-800 font-bold">
                <AlertTriangle className="w-5 h-5" />
                <span>Important Legal Notice</span>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-amber-800/60 hover:text-amber-800 transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4 text-sm text-gray-700">
              <p className="font-medium text-gray-900 text-base border-b pb-3">
                <span className="font-bold">A TECHNO</span> is the exclusive property of <span className="font-bold text-emerald-700">Maheshvari Vijay Deore</span>.
              </p>
              
              <ul className="space-y-2 list-disc pl-5 text-gray-600">
                <li>Trademark applied on <span className="font-semibold text-gray-800">26 July 2024</span>.</li>
                <li>Application filed by agent <span className="font-semibold text-gray-800">Mahalle Swapnil Nilkanth</span>.</li>
                <li>Application No: <span className="font-semibold text-gray-800">6545360</span>.</li>
              </ul>
              
              <p className="bg-red-50 text-red-800 p-3 rounded-lg border border-red-100 font-medium">
                This software is NOT owned by the developer. It is strictly the intellectual property of the aforementioned owner.
              </p>

              <div className="bg-gray-50 p-4 rounded-lg flex items-start gap-3 mt-4 border border-gray-100 text-xs text-gray-500">
                <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <p>
                  <strong className="text-gray-700 block mb-1">Demo Version Notice:</strong>
                  This is just an idea or demo version. This demo version will expire in <span className="font-bold text-red-600">10 days</span>.
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end">
              <button
                onClick={() => setIsVisible(false)}
                className="px-6 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-700 transition-colors"
              >
                I Understand
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
