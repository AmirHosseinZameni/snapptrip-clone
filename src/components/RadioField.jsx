export default function RadioField({
  id,
  name,
  label,
  value,
  handleSetTripType,
  tripType,
  
}) {
  return (
    <div className="flex gap-3 items-center">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={value === tripType}
        onClick={(e) => handleSetTripType(e.target.value)}
        className="appearance-none w-3 h-3 rounded-full border checked:border-blue-500 checked:bg-blue-500 checked:p-0.5 checked:bg-clip-content "
      />
      <label htmlFor={id} className="w-full">{label}</label>
    </div>
  );
}
