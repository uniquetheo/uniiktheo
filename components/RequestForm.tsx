"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X, Loader2 } from "lucide-react";

interface RequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestForm({ isOpen, onClose }: RequestFormProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    problem: "",
    goals: [] as string[],
    productStatus: "",
    timeline: "",
    budget: "",
  });

  const goalOptions = [
    "Increase revenue",
    "Improve efficiency",
    "Automate workflows",
    "Enhance user experience",
    "Scale operations",
    "Other",
  ];

  const productStatusOptions = [
    "Just an idea",
    "Early development",
    "Existing product to improve",
    "MVP built, need polish",
  ];

  const timelineOptions = [
    "ASAP (1-2 weeks)",
    "Short (1-2 months)",
    "Medium (3-6 months)",
    "Flexible",
  ];

  const budgetOptions = [
    "Under $5K",
    "$5K - $15K",
    "$15K - $50K",
    "$50K+",
    "Not sure yet",
  ];

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal: string) => {
    setFormData((prev) => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter((g) => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send request");
      }

      setIsSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
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
    onClose();
  };

  const isStepValid = () => {
    if (step === 1) return formData.name && formData.email;
    if (step === 2) return formData.problem.length >= 10;
    if (step === 3) return formData.productStatus && formData.timeline;
    return true;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(11, 15, 20, 0.6)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            <div className="flex items-center justify-between p-6 pb-0">
              <h2
                className="text-xl font-bold"
                style={{ color: "#0B0F14" }}
              >
                {isSubmitted
                  ? "Thank you!"
                  : "Request a Solution"}
              </h2>
              <button
                onClick={resetForm}
                className="p-2 rounded-lg hover:opacity-70 transition-opacity"
                style={{ color: "#5F6B7A" }}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="p-6 text-center space-y-4">
                <p className="text-lg" style={{ color: "#0B0F14" }}>
                  Your request has been sent successfully.
                </p>
                <p style={{ color: "#5F6B7A" }}>
                  I'll review your project details and get back to you
                  within 24-48 hours.
                </p>
                <button
                  onClick={resetForm}
                  className="px-8 py-3 rounded-xl text-white font-medium shadow-lg hover:shadow-2xl transition-all duration-300"
                  style={{ backgroundColor: "#084168" }}
                >
                  Done
                </button>
              </div>
            ) : (
              <div className="p-6 space-y-6">
                <div className="flex gap-1.5">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className="h-1 flex-1 rounded-full transition-colors duration-300"
                      style={{
                        backgroundColor:
                          s <= step ? "#084168" : "#E5E7EB",
                      }}
                    />
                  ))}
                </div>

                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#0B0F14" }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          updateField("name", e.target.value)
                        }
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border outline-none transition-colors"
                        style={{
                          borderColor: "#E5E7EB",
                          color: "#0B0F14",
                          backgroundColor: "#F7F8FA",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#0B0F14" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          updateField("email", e.target.value)
                        }
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border outline-none transition-colors"
                        style={{
                          borderColor: "#E5E7EB",
                          color: "#0B0F14",
                          backgroundColor: "#F7F8FA",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#0B0F14" }}
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          updateField("company", e.target.value)
                        }
                        placeholder="Company name (optional)"
                        className="w-full px-4 py-3 rounded-xl border outline-none transition-colors"
                        style={{
                          borderColor: "#E5E7EB",
                          color: "#0B0F14",
                          backgroundColor: "#F7F8FA",
                        }}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#0B0F14" }}
                      >
                        Describe your problem or idea *
                      </label>
                      <textarea
                        value={formData.problem}
                        onChange={(e) =>
                          updateField("problem", e.target.value)
                        }
                        rows={4}
                        placeholder="What's not working? What would you like to build?"
                        className="w-full px-4 py-3 rounded-xl border outline-none transition-colors resize-none"
                        style={{
                          borderColor: "#E5E7EB",
                          color: "#0B0F14",
                          backgroundColor: "#F7F8FA",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#0B0F14" }}
                      >
                        What are your goals?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {goalOptions.map((goal) => (
                          <button
                            key={goal}
                            onClick={() => toggleGoal(goal)}
                            className="px-3 py-1.5 rounded-lg text-sm border transition-all duration-200"
                            style={{
                              borderColor: formData.goals.includes(goal)
                                ? "#084168"
                                : "#E5E7EB",
                              backgroundColor: formData.goals.includes(goal)
                                ? "rgba(8, 65, 104, 0.08)"
                                : "transparent",
                              color: formData.goals.includes(goal)
                                ? "#084168"
                                : "#5F6B7A",
                            }}
                          >
                            {goal}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#0B0F14" }}
                      >
                        Product Status *
                      </label>
                      <div className="space-y-2">
                        {productStatusOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() =>
                              updateField("productStatus", option)
                            }
                            className="w-full text-left px-4 py-3 rounded-xl border transition-all duration-200"
                            style={{
                              borderColor:
                                formData.productStatus === option
                                  ? "#084168"
                                  : "#E5E7EB",
                              backgroundColor:
                                formData.productStatus === option
                                  ? "rgba(8, 65, 104, 0.08)"
                                  : "#F7F8FA",
                              color: "#0B0F14",
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#0B0F14" }}
                      >
                        Timeline *
                      </label>
                      <div className="space-y-2">
                        {timelineOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() =>
                              updateField("timeline", option)
                            }
                            className="w-full text-left px-4 py-3 rounded-xl border transition-all duration-200"
                            style={{
                              borderColor:
                                formData.timeline === option
                                  ? "#084168"
                                  : "#E5E7EB",
                              backgroundColor:
                                formData.timeline === option
                                  ? "rgba(8, 65, 104, 0.08)"
                                  : "#F7F8FA",
                              color: "#0B0F14",
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <div>
                      <label
                        className="block text-sm font-medium mb-1.5"
                        style={{ color: "#0B0F14" }}
                      >
                        Budget Range
                      </label>
                      <div className="space-y-2">
                        {budgetOptions.map((option) => (
                          <button
                            key={option}
                            onClick={() =>
                              updateField("budget", option)
                            }
                            className="w-full text-left px-4 py-3 rounded-xl border transition-all duration-200"
                            style={{
                              borderColor:
                                formData.budget === option
                                  ? "#084168"
                                  : "#E5E7EB",
                              backgroundColor:
                                formData.budget === option
                                  ? "rgba(8, 65, 104, 0.08)"
                                  : "#F7F8FA",
                              color: "#0B0F14",
                            }}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  {step > 1 && (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="flex-1 px-6 py-3 rounded-xl font-medium transition-all duration-300"
                      style={{
                        backgroundColor: "#F7F8FA",
                        color: "#5F6B7A",
                      }}
                    >
                      Back
                    </button>
                  )}
                  {step < 4 ? (
                    <button
                      onClick={() => setStep(step + 1)}
                      disabled={!isStepValid()}
                      className="flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50"
                      style={{
                        backgroundColor: "#084168",
                      }}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                      style={{
                        backgroundColor: "#084168",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
