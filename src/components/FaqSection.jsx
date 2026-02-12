import Faq from "./Faq";
export default function FaqSection() {
  return (
    <div className="mx-6 mt-12 flex flex-col gap-4">
      <div className="flex gap-2">
        <img src="/assets/helpoutline.svg" alt="help" />
        <h3>سوالات متداول</h3>
      </div>

      <div className="flex flex-col gap-4">
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
        <Faq/>
      </div>
    </div>
  );
}
