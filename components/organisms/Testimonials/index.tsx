import { testimonials } from "data";
import { TestimonialCard } from "components/molecules/TestimonialCard";
export const Testimonials = () => {
  return (
    <section
      className="px-3 py-8 xs:px-10 xs:py-8 bg-secondary"
      id="testimonials"
    >
      <h2 className="font-bold text-center xs:text-lg text-md">Testimonials</h2>
      <p className="text-center">What our customers are saying</p>
      <div className="flex flex-wrap justify-center gap-6 mx-auto mt-8 max-w-144">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard {...testimonial} key={i} />
        ))}
      </div>
    </section>
  );
};
