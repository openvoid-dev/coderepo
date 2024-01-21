import ResourceCategories from "@/app/profile/admin/resources/ResourceCategories";
import Resources from "@/app/profile/admin/resources/Resources";

export default function AdminResourcesPage() {
    return (
        <main className="">
            {/* <h1 className="font-bold font-heading text-center text-3xl md:text-3xl">
                Edit Resources
            </h1> */}

            {/* Resource Categories */}
            <ResourceCategories />

            {/* Resources */}
            <Resources />
        </main>
    );
}
