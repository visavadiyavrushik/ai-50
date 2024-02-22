import DashboardLayout from "../../layout/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      {/* Your page content goes here */}
      <div className="p-4">
        <h1 className="text-2xl font-bold">Hello, World!</h1>
        <p className="mt-2">This is a sample page content.</p>
      </div>
    </DashboardLayout>
  );
}
