import { redirect } from "next/navigation"

export default function AdminPage() {
	// Redirect to the actual admin page
	redirect("/admin/index.html")
}
