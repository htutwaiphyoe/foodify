import { testimonials } from "data";
import { TestimonialCard } from "components/molecules/TestimonialCard";
export const Testimonials = () => {
  return (
    <section className="px-10 py-8 bg-secondary">
      <h2 className="text-lg font-bold">Testimonials</h2>
      <p>What our customers are saying</p>
      <div className="flex flex-wrap justify-between gap-6 mt-5">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard {...testimonial} key={i} />
        ))}
      </div>
    </section>
  );
};
