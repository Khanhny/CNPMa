export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">
        Intern Management System
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hello, Admin</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="avatar"
          className="rounded-full w-10 h-10"
        />
        {/* 🔹 Logout button */}
        <button
          onClick={() => {
            localStorage.removeItem("isAuthenticated");
            window.location.href = "/login";
          }}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
