import React from "react"
import Sidebar from "../../components/Sidebar"
import DashboardContent from "../../components/DashboardContent"

const AdminDashboard = () => {
    return(
        <div className="flex">
            <Sidebar/>
            <main className="ml-64 w-full bg-gray-100 min-h-screen p-4">
                <DashboardContent />
            </main>
        </div>
    )
}

export default AdminDashboard;