"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";

interface RequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  problem: string;
  goals: string[];
  productStatus: string;
  timeline: string;
  budget: string;
}

export function RequestForm({ isOpen, onClose }: RequestFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    problem: "",
    goals: [],
    productStatus: "",
    timeline: "",
    budget: "",
  });

  const totalSteps = 7;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Here you would normally send the form data to a backend
    console.log("Form submitted:", formData);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setCurrentStep(1);
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        problem: "",
        goals: [],
        productStatus: "",
        timeline: "",
        budget: "",
      });
    }, 300);
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const goalOptions = [
    "Automate manual processes",
    "Build an MVP",
    "Improve user experience",
    "Scale existing product",
    "Replace outdated system",
    "Other",
  ];

  const productStatusOptions = [
    "Just an idea",
    "Early prototype",
    "Working product",
    "Needs improvement",
  ];

  const timelineOptions = ["ASAP", "1-2 months", "3-6 months", "Flexible"];

  const budgetOptions = [
    "Under $5k",
    "$5k - $15k",
    "$15k - $30k",
    "$30k+",
    "Not sure yet",
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-6 h-6" style={{ color: "#5F6B7A" }} />
            </button>

            {/* Progress Bar */}
            {!isSubmitted && (
              <div className="px-8 pt-8 pb-6">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#5F6B7A" }}
                  >
                    Step {currentStep} of {totalSteps}
                  </span>
                  <span
                    className="text-sm font-medium"
                    style={{ color: "#5F6B7A" }}
                  >
                    {Math.round((currentStep / totalSteps) * 100)}%
                  </span>
                </div>
                <div
                  className="h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: "#E5E7EB" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: "#084168" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            )}

            {/* Form Content */}
            <div className="px-8 pb-8 overflow-y-auto max-h-[calc(90vh-180px)]">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="text-center py-12"
                  >
                    <div
                      className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                      style={{ backgroundColor: "#084168" }}
                    >
                      <Check className="w-10 h-10 text-white" />
                    </div>
                    <h3
                      className="text-3xl font-bold mb-4"
                      style={{ color: "#0B0F14" }}
                    >
                      Request Received!
                    </h3>
                    <p className="text-lg mb-8" style={{ color: "#5F6B7A" }}>
                      Thank you for sharing your problem. I'll review your
                      information and get back to you within 24–48 hours with
                      clear next steps.
                    </p>
                    <button
                      onClick={handleClose}
                      className="px-8 py-3 rounded-xl text-white font-medium"
                      style={{ backgroundColor: "#084168" }}
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <>
                    {/* Step 1: Basic Info */}
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#0B0F14" }}
                        >
                          Let's start with the basics
                        </h3>

                        <div className="space-y-4">
                          <div>
                            <label
                              className="block text-sm font-medium mb-2"
                              style={{ color: "#0B0F14" }}
                            >
                              Your name *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                              style={{
                                borderColor: "#E5E7EB",
                              }}
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label
                              className="block text-sm font-medium mb-2"
                              style={{ color: "#0B0F14" }}
                            >
                              Email address *
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                              style={{ borderColor: "#E5E7EB" }}
                              placeholder="john@company.com"
                            />
                          </div>

                          <div>
                            <label
                              className="block text-sm font-medium mb-2"
                              style={{ color: "#0B0F14" }}
                            >
                              Company name (optional)
                            </label>
                            <input
                              type="text"
                              value={formData.company}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  company: e.target.value,
                                })
                              }
                              className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all"
                              style={{ borderColor: "#E5E7EB" }}
                              placeholder="Acme Inc."
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 2: Problem Description */}
                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#0B0F14" }}
                        >
                          Tell me about your problem
                        </h3>

                        <div>
                          <label
                            className="block text-sm font-medium mb-2"
                            style={{ color: "#0B0F14" }}
                          >
                            Describe what you're trying to fix, improve, or
                            build *
                          </label>
                          <textarea
                            value={formData.problem}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                problem: e.target.value,
                              })
                            }
                            rows={8}
                            className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all resize-none"
                            style={{ borderColor: "#E5E7EB" }}
                            placeholder="Describe your challenge in your own words. What's broken? What's frustrating? What do you wish existed?"
                          />
                          <p
                            className="text-sm mt-2"
                            style={{ color: "#5F6B7A" }}
                          >
                            No technical jargon needed — just explain the
                            situation.
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {/* Step 3: Goals */}
                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#0B0F14" }}
                        >
                          What are your main goals?
                        </h3>

                        <div className="space-y-3">
                          {goalOptions.map((goal) => (
                            <button
                              key={goal}
                              onClick={() => toggleGoal(goal)}
                              className="w-full px-4 py-3 rounded-lg border text-left flex items-center gap-3 hover:shadow-md transition-all"
                              style={{
                                borderColor: formData.goals.includes(goal)
                                  ? "#084168"
                                  : "#E5E7EB",
                                backgroundColor: formData.goals.includes(goal)
                                  ? "#F7F8FA"
                                  : "white",
                              }}
                            >
                              <div
                                className="w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0"
                                style={{
                                  borderColor: formData.goals.includes(goal)
                                    ? "#084168"
                                    : "#E5E7EB",
                                  backgroundColor: formData.goals.includes(goal)
                                    ? "#084168"
                                    : "white",
                                }}
                              >
                                {formData.goals.includes(goal) && (
                                  <Check className="w-3 h-3 text-white" />
                                )}
                              </div>
                              <span style={{ color: "#0B0F14" }}>{goal}</span>
                            </button>
                          ))}
                        </div>

                        <p className="text-sm" style={{ color: "#5F6B7A" }}>
                          Select all that apply
                        </p>
                      </motion.div>
                    )}

                    {/* Step 4: Product Status */}
                    {currentStep === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#0B0F14" }}
                        >
                          Where are you starting from?
                        </h3>

                        <div className="space-y-3">
                          {productStatusOptions.map((status) => (
                            <button
                              key={status}
                              onClick={() =>
                                setFormData({
                                  ...formData,
                                  productStatus: status,
                                })
                              }
                              className="w-full px-4 py-3 rounded-lg border text-left hover:shadow-md transition-all"
                              style={{
                                borderColor:
                                  formData.productStatus === status
                                    ? "#084168"
                                    : "#E5E7EB",
                                backgroundColor:
                                  formData.productStatus === status
                                    ? "#F7F8FA"
                                    : "white",
                                color: "#0B0F14",
                              }}
                            >
                              {status}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 5: Timeline */}
                    {currentStep === 5 && (
                      <motion.div
                        key="step5"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#0B0F14" }}
                        >
                          What's your timeline?
                        </h3>

                        <div className="space-y-3">
                          {timelineOptions.map((timeline) => (
                            <button
                              key={timeline}
                              onClick={() =>
                                setFormData({ ...formData, timeline })
                              }
                              className="w-full px-4 py-3 rounded-lg border text-left hover:shadow-md transition-all"
                              style={{
                                borderColor:
                                  formData.timeline === timeline
                                    ? "#084168"
                                    : "#E5E7EB",
                                backgroundColor:
                                  formData.timeline === timeline
                                    ? "#F7F8FA"
                                    : "white",
                                color: "#0B0F14",
                              }}
                            >
                              {timeline}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Step 6: Budget */}
                    {currentStep === 6 && (
                      <motion.div
                        key="step6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#0B0F14" }}
                        >
                          What's your budget range?
                        </h3>

                        <div className="space-y-3">
                          {budgetOptions.map((budget) => (
                            <button
                              key={budget}
                              onClick={() =>
                                setFormData({ ...formData, budget })
                              }
                              className="w-full px-4 py-3 rounded-lg border text-left hover:shadow-md transition-all"
                              style={{
                                borderColor:
                                  formData.budget === budget
                                    ? "#084168"
                                    : "#E5E7EB",
                                backgroundColor:
                                  formData.budget === budget
                                    ? "#F7F8FA"
                                    : "white",
                                color: "#0B0F14",
                              }}
                            >
                              {budget}
                            </button>
                          ))}
                        </div>

                        <p className="text-sm" style={{ color: "#5F6B7A" }}>
                          This helps me understand scope and provide relevant
                          recommendations.
                        </p>
                      </motion.div>
                    )}

                    {/* Step 7: Review */}
                    {currentStep === 7 && (
                      <motion.div
                        key="step7"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                      >
                        <h3
                          className="text-2xl font-bold"
                          style={{ color: "#0B0F14" }}
                        >
                          Ready to submit?
                        </h3>

                        <div
                          className="space-y-4 p-6 rounded-lg"
                          style={{ backgroundColor: "#F7F8FA" }}
                        >
                          <div>
                            <p
                              className="text-sm font-medium mb-1"
                              style={{ color: "#5F6B7A" }}
                            >
                              Name
                            </p>
                            <p style={{ color: "#0B0F14" }}>{formData.name}</p>
                          </div>

                          <div>
                            <p
                              className="text-sm font-medium mb-1"
                              style={{ color: "#5F6B7A" }}
                            >
                              Email
                            </p>
                            <p style={{ color: "#0B0F14" }}>{formData.email}</p>
                          </div>

                          {formData.company && (
                            <div>
                              <p
                                className="text-sm font-medium mb-1"
                                style={{ color: "#5F6B7A" }}
                              >
                                Company
                              </p>
                              <p style={{ color: "#0B0F14" }}>
                                {formData.company}
                              </p>
                            </div>
                          )}

                          <div>
                            <p
                              className="text-sm font-medium mb-1"
                              style={{ color: "#5F6B7A" }}
                            >
                              Problem
                            </p>
                            <p style={{ color: "#0B0F14" }}>
                              {formData.problem}
                            </p>
                          </div>

                          {formData.goals.length > 0 && (
                            <div>
                              <p
                                className="text-sm font-medium mb-1"
                                style={{ color: "#5F6B7A" }}
                              >
                                Goals
                              </p>
                              <p style={{ color: "#0B0F14" }}>
                                {formData.goals.join(", ")}
                              </p>
                            </div>
                          )}

                          {formData.productStatus && (
                            <div>
                              <p
                                className="text-sm font-medium mb-1"
                                style={{ color: "#5F6B7A" }}
                              >
                                Status
                              </p>
                              <p style={{ color: "#0B0F14" }}>
                                {formData.productStatus}
                              </p>
                            </div>
                          )}

                          {formData.timeline && (
                            <div>
                              <p
                                className="text-sm font-medium mb-1"
                                style={{ color: "#5F6B7A" }}
                              >
                                Timeline
                              </p>
                              <p style={{ color: "#0B0F14" }}>
                                {formData.timeline}
                              </p>
                            </div>
                          )}

                          {formData.budget && (
                            <div>
                              <p
                                className="text-sm font-medium mb-1"
                                style={{ color: "#5F6B7A" }}
                              >
                                Budget
                              </p>
                              <p style={{ color: "#0B0F14" }}>
                                {formData.budget}
                              </p>
                            </div>
                          )}
                        </div>

                        <p className="text-sm" style={{ color: "#5F6B7A" }}>
                          I'll review your information and respond within 24–48
                          hours with next steps.
                        </p>
                      </motion.div>
                    )}
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            {!isSubmitted && (
              <div
                className="px-8 py-6 border-t flex items-center justify-between"
                style={{ borderColor: "#E5E7EB" }}
              >
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className="px-6 py-3 rounded-xl font-medium flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-100 transition-all"
                  style={{ color: "#084168" }}
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>

                {currentStep < totalSteps ? (
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl text-white font-medium flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#084168" }}
                  >
                    Continue
                    <ChevronRight className="w-5 h-5" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-6 py-3 rounded-xl text-white font-medium shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                    style={{ backgroundColor: "#084168" }}
                  >
                    Submit Request
                  </button>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
