"use client";
import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useCreateUserFeedbackMutation } from "@/redux/service/feedback";
import { useToast } from "@/components/hooks/use-toast";
import { useTheme } from "next-themes";
export default function FeedbackComponent() {
  const { theme } = useTheme();
  const { toast } = useToast();
  const [createUserFeedback, { isSuccess, isError }] =
    useCreateUserFeedbackMutation(); // waitin for test api
  const [feedback, setFeedback] = useState(""); // State to capture feedback

  const handleFeedbackChange = (e: any) => {
    setFeedback(e.target.value); // Update state on textarea change
  };

  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent page refresh on form submit
    setFeedback(""); // Clear the textarea after submission
    toast({
      description: "Thank For FeedBack Our Team Will Review It",
      variant: "success",
    });
    createUserFeedback({ message: feedback });
  };
  return (
    <section className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="p-14 flex flex-col gap-5 bg-text_color_dark dark:bg-card_color_dark rounded-xl">
        {/* Title Section */}
        <div className="inline-block px-5 font-semibold bg-primary_color py-2 rounded-tl-[20px] rounded-br-[20px] w-max">
          <p className="text-text_color_light text-text_title_20">
            Be the first to FeedBack
          </p>
        </div>

        {/* Description */}
        <p className="text-text_body_16 text-text_color_desc_light font-normal">
          Feel Free to Share Your Experience with Us and other Users
        </p>

        {/* Textarea */}
        <Textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={handleFeedbackChange}
          className="h-full"
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="inline-block px-5 font-semibold bg-background_dark_mode py-2 rounded-tl-[20px] rounded-br-[20px] w-max"
        >
          <p className="text-text_color_dark text-text_body_16 font-normal">
            Submit
          </p>
        </button>
      </div>
      <div className="w-[400px] h-[400px] hidden lg:block mx-auto">
        {theme === "dark" ? (
          <img
            className="w-[100%] h-[100%] object-contain"
            src="/images/feedback-white.png"
            alt="feedback"
          />
        ) : (
          <img
            className="w-[100%] h-[100%] object-contain"
            src="/images/feedback.png"
            alt="feedback"
          />
        )}
      </div>
    </section>
  );
}
