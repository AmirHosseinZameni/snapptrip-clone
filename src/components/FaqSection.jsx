import { useEffect, useState } from "react";
import Faq from "./Faq";
export default function FaqSection() {
  const [faqs, setFaqs] = useState([]);

  useEffect(function () {
    async function fetchFaqs() {
      const res = await fetch(
        "https://snapptrip-json-server.vercel.app/api/faqs",
      );
      const data = await res.json();
      console.log(data);
      setFaqs(data);
    }
    fetchFaqs();
  }, []);
  return (
    <div className="mx-6 mt-12 flex flex-col gap-4 xl:max-w-300 xl:mx-auto">
      <div className="flex gap-2">
        <img src="/assets/helpoutline.svg" alt="help" />
        <h3>سوالات متداول</h3>
      </div>

      <div className="flex flex-col gap-4">
        {faqs.map((faq) => (
          <Faq question={faq.question} answer={faq.answer} id={faq.id} />
        ))}
      </div>
    </div>
  );
}
