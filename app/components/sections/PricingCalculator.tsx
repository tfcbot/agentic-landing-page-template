'use client';

import { useState } from 'react';

export default function PricingCalculator() {
  const [hourlyRate, setHourlyRate] = useState(150);

  // Estimated development hours for each component
  const developmentHours = {
    auth: 40,
    payments: 20,
    infrastructure: 30,
  };

  // Calculate total development hours
  const totalHours = developmentHours.auth + 
    developmentHours.payments + 
    developmentHours.infrastructure;

  // Calculate costs
  const traditionalCost = totalHours * hourlyRate;

  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden" id="calculator">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Calculate Your Savings
          </h2>
          <p className="text-gray-400 text-lg">
            See how much time and money you'll save by using ATOS instead of building it yourself
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Input Controls */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Hourly Rate (USD)
                </label>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-purple-500/20 rounded-lg appearance-none cursor-pointer"
                />
                <div className="text-white text-lg mt-2">${hourlyRate}/hour</div>
              </div>

              {/* Development Hours Breakdown */}
              <div className="space-y-3">
                <h4 className="text-white text-lg mb-4">Development Hours Breakdown:</h4>
                <div className="flex justify-between text-gray-400">
                  <span>Authentication & User Management</span>
                  <span>{developmentHours.auth}h</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Payment Integration</span>
                  <span>{developmentHours.payments}h</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Infrastructure Setup</span>
                  <span>{developmentHours.infrastructure}h</span>
                </div>
                <div className="flex justify-between text-white font-medium pt-3 border-t border-purple-500/10">
                  <span>Total Development Hours</span>
                  <span>{totalHours}h</span>
                </div>
              </div>
            </div>

            {/* Cost Comparison */}
            <div className="mt-8 pt-8 border-t border-purple-500/10">
              <div className="mx-auto max-w-lg">
                <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10">
                  <h4 className="text-white text-lg mb-2">Time You Buy Back</h4>
                  <div className="text-3xl font-medium text-white">{totalHours} hours</div>
                  <p className="text-gray-400 mt-2">Worth ${traditionalCost.toLocaleString()} at your rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 