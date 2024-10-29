export default function EmailField() {
  return (
    <div className="flex flex-col gap-2 md:gap-4 md:flex-row md:justify-center md:px-24 lg:px-80">
      <form className="w-full">
        <input
          className="w-full py-3 px-4 md:py-4 md:px-6 items-center bg-white rounded-lg shadow border border-[#cfd4dc] text-[#667084] text-base font-normal leading-normal"
          type="email"
          placeholder="Enter your email"
        />
      </form>
    </div>
  );
}
