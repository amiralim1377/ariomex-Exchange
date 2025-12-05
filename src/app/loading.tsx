"use client";
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[100px]">
      <div className="flex space-x-1">
        <span className="w-2 h-2 bg-mainBrand rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-mainBrand rounded-full animate-bounce delay-150"></span>
        <span className="w-2 h-2 bg-mainBrand rounded-full animate-bounce delay-300"></span>
      </div>
    </div>
  );
}
