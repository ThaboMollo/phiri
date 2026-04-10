"use client";

import { useState } from "react";
import Image from "next/image";

const trustStats = [
  "Trusted by 250K+ clients",
  "4.9 average satisfaction",
];

const serviceCards = [
  {
    title: "Budget Setup & Spending Analysis",
    description:
      "Build a practical plan for monthly income, expenses, and debt priorities.",
  },
  {
    title: "Debt & Financial Goal Planning",
    description:
      "Clear strategy for debt reduction, accountability check-ins, and long-term milestones.",
  },
];

const reasons = [
  "Expert team",
  "Tailored solutions",
  "Transparency",
  "Practical and accountable process",
];

export default function HomePage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="page">
      <section className="heroSection">
        <div className="shell hero">
          <div className="heroLeft">
            <p className="eyebrow">FINANCIAL PLANNING FOR REAL LIFE</p>
            <h1>Build confidence with every money decision.</h1>
            <p className="heroCopy">
              Practical guidance, transparent products, and smart tools designed to help you save,
              invest, and plan with clarity.
            </p>
            <div className="ctaRow">
              <button className="primaryButton" onClick={() => setOpen(true)}>
                Get Started
              </button>
              <p>No hidden fees. No pressure.</p>
            </div>
            <div className="trustRow" aria-label="Trust indicators">
              {trustStats.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <div className="heroRight">
            <div className="portraitFrame" aria-hidden>
              <Image
                src="/hero-portrait.png"
                alt="Financial adviser standing in an office"
                width={525}
                height={760}
                className="portraitImage"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="contentSection">
        <div className="shell contentFlow">
          <div className="featureGrid">
            <article className="card dark largeCard">
              <h2>Your Partner in Financial Success</h2>
              <p>
                At Phiri, we help you take control of your money through simple and practical
                budgeting strategies. We focus on reducing financial stress and helping you build a
                future with confidence.
              </p>
            </article>
            <article className="card darkAlt aboutCard">
              <h2>About Us</h2>
              <p>
                We create practical budgeting systems for individuals and families who want
                consistent progress, not complicated finance jargon.
              </p>
              <strong>Control your money. Build your future.</strong>
            </article>
          </div>

          <section className="services">
            <h2 className="sectionHeading">Our Services</h2>
            <div className="serviceGrid">
              {serviceCards.map((service) => (
                <article className="card light serviceCard" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="card dark why">
            <h2>Why Choose Us</h2>
            <ul>
              {reasons.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
          </section>

          <section className="card darkAlt contact">
            <div className="contactInfo">
              <h2>Contact</h2>
              <p>067 963 6487</p>
              <p>RMTbudgets@gmail.com</p>
            </div>
            <button className="secondaryButton" onClick={() => setOpen(true)}>
              Book a Consultation
            </button>
          </section>
        </div>
      </section>

      {open && (
        <div
          className="modalOverlay"
          role="dialog"
          aria-modal="true"
          aria-label="Book a consultation"
        >
          <div className="modal">
            <div className="modalHeader">
              <h3>Book a Consultation</h3>
              <button className="close" onClick={() => setOpen(false)} aria-label="Close modal">
                ×
              </button>
            </div>
            <p>Tell us about your goals and we will contact you to schedule your session.</p>
            <form className="form" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Full Name" />
              <input placeholder="Phone Number" />
              <input placeholder="Email Address" type="email" />
              <textarea placeholder="How can we help you?" rows={4} />
              <div className="formRow">
                <span>We respond within 1 business day.</span>
                <button type="submit">Send Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
