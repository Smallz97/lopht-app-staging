export default function FeaturesSectionNavigationBar() {
  return (
    <div className="lg:px-64" id="features-navbar">
      <div className="bg-slate-50 rounded-full flex lg:gap-0.5">
        <div className="py-5 rounded-full border border-green-600 justify-center items-center grow shrink basis-0 flex">
          <div className="text-black text-xs md:text-lg font-medium leading-none">
            Administrators
          </div>
        </div>
        <div className="py-5 rounded-full justify-center items-center grow shrink basis-0 flex">
          <div className="text-black text-xs md:text-lg font-normal leading-none">
            Communities
          </div>
        </div>
        <div className="py-5 rounded-full justify-center items-center grow shrink basis-0 flex">
          <div className="text-black text-xs md:text-lg font-normal leading-none">
            Events
          </div>
        </div>
      </div>
    </div>
  );
}
