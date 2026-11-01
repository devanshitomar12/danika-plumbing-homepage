"use client";

import { useState } from "react";
import { Phone, X, Check } from "lucide-react";
import { useDrawer } from "@/context/DrawerContext";
import { BUSINESS_INFO } from "@/data/siteData";

export default function ContactDrawer() {
  const { isDrawerOpen, closeDrawer } = useDrawer();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setFormStatus("error");
      return;
    }
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 700);
  };

  return (
    <>
      {/* 1. SEMI-TRANSPARENT DARK OVERLAY */}
      <div
        onClick={closeDrawer}
        aria-hidden="true"
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 backdrop-blur-[2px] ${
          isDrawerOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* 2. SLIDING WHITE DRAWER */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Get Help NOW Contact Form Drawer"
        className={`fixed top-0 right-0 h-full w-full sm:w-[460px] md:w-[490px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Header / Actions Bar */}
        <div className="p-4 sm:p-5 border-b border-neutral-100 flex items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-xs text-neutral-500 font-semibold mb-1">
              Need Help Now? Call us!
            </p>
            {/* Clickable Phone Button */}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              id="drawer-phone-cta"
              className="inline-flex items-center gap-2.5 bg-[#d94c3d] hover:bg-[#c43f31] text-white text-base sm:text-lg font-bold py-2 px-5 rounded-md shadow-sm transition-all duration-150"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>(425) 374-1557</span>
            </a>
          </div>

          {/* Close button with square border matching original */}
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close Contact Drawer"
            className="p-1 border border-neutral-800 text-neutral-800 hover:bg-neutral-100 rounded-sm transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>

        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#8f3328] tracking-tight">
            Get Help NOW
          </h2>

          {formStatus === "success" ? (
            <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900">Request Received!</h3>
              <p className="text-sm text-neutral-600">
                Thank you, {formData.firstName}. An Everett service coordinator will call you back at{" "}
                <span className="font-bold text-[#8f3328]">{formData.phone}</span> promptly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setFormStatus("idle");
                  setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
                }}
                className="mt-2 text-xs underline font-semibold text-[#8f3328]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5" noValidate>
              {formStatus === "error" && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200 font-medium">
                  Please provide your name, phone number, and email.
                </div>
              )}

              {/* First Name */}
              <div>
                <label htmlFor="drawer-firstName" className="sr-only">
                  First Name
                </label>
                <input
                  type="text"
                  id="drawer-firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#8f3328] focus:border-[#8f3328]"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="drawer-lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  type="text"
                  id="drawer-lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#8f3328] focus:border-[#8f3328]"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="drawer-phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="tel"
                  id="drawer-phone"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#8f3328] focus:border-[#8f3328]"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="drawer-email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="drawer-email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#8f3328] focus:border-[#8f3328]"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="drawer-message" className="sr-only">
                  How can we help?
                </label>
                <textarea
                  id="drawer-message"
                  name="message"
                  rows={4}
                  placeholder="How can we help?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-white text-neutral-800 placeholder-neutral-400 rounded border border-neutral-300 text-sm focus:outline-none focus:ring-1 focus:ring-[#8f3328] focus:border-[#8f3328] resize-y"
                />
              </div>

              {/* Original Consent Notice */}
              <p className="text-[12px] leading-relaxed text-neutral-600 pt-2">
                Once you submit our form, we may reach out to you via phone, email, or text to
                communicate service details, which you can opt out of at any time. This form consent is
                not a condition of purchase. Message/data rates apply.{" "}
                <a href="#faq" onClick={closeDrawer} className="underline text-[#8f3328] hover:text-[#d94c3d]">
                  Terms and Conditions
                </a>{" "}
                |{" "}
                <a href="#faq" onClick={closeDrawer} className="underline text-[#8f3328] hover:text-[#d94c3d]">
                  Privacy Policy
                </a>
                .
              </p>

              {/* Coral-Red Submit Button */}
              <button
                type="submit"
                disabled={formStatus === "submitting"}
                id="drawer-submit-btn"
                className="w-full bg-[#d94c3d] hover:bg-[#c43f31] text-white font-extrabold py-3.5 px-6 rounded text-sm sm:text-base uppercase tracking-wider shadow-md hover:shadow-lg transition-colors cursor-pointer mt-4"
              >
                {formStatus === "submitting" ? "Submitting..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
