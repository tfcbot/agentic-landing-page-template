'use client';

import { useState } from 'react';

type ActivityHours = {
  ideation: number;
  research: number;
  scripting: number;
  posting: number;
};

export default function PricingCalculator() {
  const [hours, setHours] = useState<ActivityHours>({
    ideation: 5,
    research: 8,
    scripting: 10,
    posting: 4
  });

  const [hourlyValue, setHourlyValue] = useState(50);

  const totalHours = Object.values(hours).reduce((a, b) => a + b, 0);
  const monthlySavings = totalHours * hourlyValue;
  const yearlySavings = monthlySavings * 12;
  const roi = (yearlySavings - 2988) / 2988 * 100; // Based on annual plan price

  const activities = [
    {
      name: 'ideation' as keyof ActivityHours,
      label: 'Content Ideation',
      description: 'Brainstorming topics and content ideas'
    },
    {
      name: 'research' as keyof ActivityHours,
      label: 'Content Research',
      description: 'Gathering data and supporting information'
    },
    {
      name: 'scripting' as keyof ActivityHours,
      label: 'Content Creation',
      description: 'Writing and editing content'
    },
    {
      name: 'posting' as keyof ActivityHours,
      label: 'Content Distribution',
      description: 'Formatting and posting across platforms'
    }
  ];

  return (
    <section className="py-32 bg-[#0A0118] relative overflow-hidden">
      {/* Premium background effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#0A0118] to-[#0A0118]" />
        <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/10 to-transparent top-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            Calculate Your Time Savings
          </h2>
          <p className="text-gray-400 text-lg">
            See how much time our AI agents can save you each month
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <div className="space-y-8">
              <div className="relative p-6 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl">
                <h3 className="text-lg font-medium text-white mb-4">Monthly Hours Spent</h3>
                <div className="space-y-6">
                  {activities.map((activity) => (
                    <div key={activity.name}>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        {activity.label}
                        <span className="block text-xs text-gray-500">{activity.description}</span>
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="40"
                        value={hours[activity.name]}
                        onChange={(e) => setHours({ ...hours, [activity.name]: parseInt(e.target.value) })}
                        className="w-full h-2 bg-purple-500/20 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-sm text-gray-400 mt-1">
                        <span>{hours[activity.name]} hours</span>
                        <span>40 hours</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative p-6 rounded-xl border border-purple-500/10 bg-[#0c0118]/40 backdrop-blur-xl">
                <h3 className="text-lg font-medium text-white mb-4">Value of Your Time</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    How much is an hour worth to you?
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="1000"
                    step="25"
                    value={hourlyValue}
                    onChange={(e) => setHourlyValue(parseInt(e.target.value))}
                    className="w-full h-2 bg-purple-500/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-sm text-gray-400 mt-1">
                    <span>${hourlyValue}/hour</span>
                    <span>$1,000+/hour</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="relative p-8 rounded-xl border border-purple-500/20 bg-[#0c0118]/40 backdrop-blur-xl h-full">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Your Results</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Total Hours Saved Monthly</div>
                      <div className="text-3xl font-medium text-white">{totalHours} hours</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Monthly Value</div>
                      <div className="text-3xl font-medium text-white">${monthlySavings.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Yearly Value</div>
                      <div className="text-3xl font-medium text-white">${yearlySavings.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">ROI on Annual Plan</div>
                      <div className="text-3xl font-medium text-white">{roi.toFixed(0)}%</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-purple-500/10">
                  <a
                    href="#pricing"
                    className="block w-full text-center px-8 py-3 rounded-xl text-sm font-medium 
                      bg-gradient-to-r from-purple-500 to-blue-500 text-white
                      hover:from-purple-600 hover:to-blue-600
                      transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                  >
                    Start Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 