"use client";

import { examplesConfig } from "@/config/examples";
import { Button } from "@/components/ui/button";
import { ExampleProjectCard } from "@/components/ExampleProjectCard";
import { useState } from "react";

const ExamplesContent = () => {
  const [filterProjects, setFilterProjects] = useState(examplesConfig.projects);
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter: { title: string }) => {
    if (filter.title === "All") {
      setFilterProjects(examplesConfig.projects);
      setActiveFilter("All");
      return;
    }

    const filteredProjects = examplesConfig.projects.filter((project) => {
      if (project.filters.some((f) => f.title === filter.title)) {
        return true;
      }
    });

    setActiveFilter(filter.title);
    setFilterProjects(filteredProjects);
  };

  return (
    <>
      <div className="flex items-center gap-4 overflow-x-scroll custom-x-scrollbar">
        {examplesConfig.filters.map(({ icon: Icon, ...filter }) => (
          <Button
            variant="outline"
            onClick={() => handleFilterChange({ title: filter.title })}
            className={`  ${activeFilter === filter.title ? "bg-accent" : ""}`}
          >
            <Icon className="mr-2 h-4 w-4" />
            <span className="whitespace-nowrap">{filter.title}</span>
          </Button>
        ))}
      </div>
      {filterProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {filterProjects.map((project, index) => (
            <ExampleProjectCard
              key={project.title + "-" + index}
              title={project.title}
              href={project.href}
              description={project.description}
              github={project.github}
              filters={project.filters}
            />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mt-6">No projects found</h2>
        </div>
      )}
    </>
  );
};

export default ExamplesContent;
