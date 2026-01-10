import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What documents are required for travel?",
    answer:
      "Passengers must possess a valid passport with at least 6 months validity, and appropriate visas for both Pakistan and Iran. We recommend verifying current visa requirements with the respective embassies before booking.",
  },
  {
    question: "What is the duration of the ferry journey?",
    answer:
      "The journey between Karachi and Chabahar takes approximately 12 hours under normal sea conditions. This duration may vary slightly depending on weather and sea conditions.",
  },
  {
    question: "Can I bring my vehicle on the ferry?",
    answer:
      "Yes, the ferry has a dedicated vehicle deck that can accommodate cars, motorcycles, and light commercial vehicles. Additional fees apply for vehicle transport. Vehicle space must be booked in advance.",
  },
  {
    question: "What amenities are available onboard?",
    answer:
      "The ferry offers private and shared cabins, a restaurant serving Pakistani and Iranian cuisine, passenger lounges, satellite communications, and duty-free shopping. All cabins have air conditioning and bathroom facilities.",
  },
  {
    question: "What is the baggage allowance?",
    answer:
      "Each passenger is permitted 2 pieces of checked luggage (up to 25kg each) and 1 carry-on bag (up to 7kg). Additional baggage can be accommodated for an extra fee subject to availability.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Bookings can be cancelled up to 48 hours before departure for a full refund. Cancellations made within 48 hours may incur a cancellation fee. Booking modifications are subject to availability.",
  },
];

export function FAQSection() {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold mb-4 uppercase tracking-wide">
              Help Center
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about ferry travel and booking procedures.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-heading font-semibold hover:no-underline py-5 text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
