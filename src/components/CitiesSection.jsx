import City from "./City";
export default function CitiesSection() {
  return (
    <div className="mt-12 mx-6 flex flex-col gap-4 xl:max-w-300 xl:mx-auto">
      <div className="font-medium text-[19px]">
        <h3>محبوب ترین شهر های ترکیه</h3>
      </div>
      <div className="overflow-x-auto flex gap-4 scrollbar-hide">
        <City />
        <City />
        <City />
      </div>
    </div>
  );
}
