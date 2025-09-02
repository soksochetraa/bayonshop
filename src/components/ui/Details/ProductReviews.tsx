import { useState } from "react";
import FAQItem from "@/src/components/ui/Details/FAQs";
import { FaStar } from "react-icons/fa";

type Review = {
  id: number;
  author: string;
  rating: number;
  date: Date;
  comment: string;
};

export default function ProductReviews({ reviews }: { reviews: Review[] }) {
  const [rating, setRating] = useState<number>(0);
  const [nickname, setNickname] = useState("");
  const [summary, setSummary] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nickname || !summary || !comment || rating === 0) {
      alert("Please fill all fields and select a rating.");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      author: nickname,
      rating,
      date: new Date(),
      comment,
    };

    console.log("Review Submitted:", newReview);

    // reset form
    setNickname("");
    setSummary("");
    setComment("");
    setRating(0);
  };

  return (
    <FAQItem title="Reviews">
      <div className="space-y-6">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-lg ${
                      i < review.rating ? "text-[#F90]" : "text-[#D3D3D3]"
                    }`}
                  />
                ))}
                <span className="text-gray-600 text-sm">{review.author}</span>
              </div>
              <p className="text-gray-700 mt-1">{review.comment}</p>
              <span className="text-gray-400 text-xs">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-sm">No reviews yet.</p>
        )}

        <div className="mt-6">
          <h4 className="font-semibold text-md text-[#212121] mb-2">
            Write a Review
          </h4>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#212121]">Your Rating:</span>
              {Array.from({ length: 5 }).map((_, i) => (
                <button type="button" key={i} onClick={() => setRating(i + 1)}>
                  <FaStar
                    className={`text-2xl cursor-pointer ${
                      i < rating ? "text-[#F90]" : "text-[#D3D3D3]"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Nickname */}
            <input
              type="text"
              placeholder="Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm"
            />

            {/* Summary */}
            <input
              type="text"
              placeholder="Summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm"
            />

            {/* Review */}
            <textarea
              placeholder="Write your review"
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 text-sm resize-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-2 bg-[#7DB800] text-white font-bold text-sm hover:bg-[#6aa100] transition cursor-pointer"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </FAQItem>
  );
}
