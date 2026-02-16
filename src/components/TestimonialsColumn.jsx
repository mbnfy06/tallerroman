import React from "react";
import { motion } from "framer-motion";
import { Star } from 'lucide-react';

export const TestimonialsColumn = ({
    className,
    testimonials,
    duration = 10,
}) => {
    return (
        <div className={className}>
            <motion.div
                animate={{
                    y: "-50%",
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6"
            >
                {/* Double array for seamless loop */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <div
                        key={`${testimonial.id}-${index}`}
                        className="p-6 rounded-2xl border border-brand-border bg-brand-card shadow-lg hover:border-brand-accent/30 transition-colors duration-300"
                    >
                        {/* Stars */}
                        <div className="flex gap-0.5 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < testimonial.rating
                                            ? "text-yellow-500 fill-yellow-500"
                                            : "text-brand-border"
                                        }`}
                                />
                            ))}
                        </div>

                        <p className="text-brand-muted text-sm leading-relaxed mb-4 line-clamp-4">
                            "{testimonial.text}"
                        </p>

                        <div className="flex items-center gap-3">
                            {testimonial.image ? (
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover border border-brand-border"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-brand-accent-subtle flex items-center justify-center border border-brand-border shrink-0">
                                    <span className="text-brand-accent font-bold text-sm">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                            )}

                            <div className="flex flex-col min-w-0">
                                <span className="font-heading font-semibold text-brand-text text-sm truncate">
                                    {testimonial.name}
                                </span>
                                <span className="text-xs text-brand-muted truncate">
                                    {testimonial.service}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
