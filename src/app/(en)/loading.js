import { getDictionary } from "../../lib/i18n";

export default function Loading() {
  const { loading } = getDictionary("en");

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-500 mx-auto mb-4" />
        <h2 className="text-xl font-semibold">{loading.title}</h2>
        <p className="text-[#ADB7BE] mt-2">{loading.description}</p>
      </div>
    </div>
  );
}
