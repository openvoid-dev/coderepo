"use client";

import React, { useState } from "react";
import { resourceConfig } from "@/config/resources";
import { Button } from "@/components/ui/button";
import { ResourcesCard } from "./ResourcesCard";

const ResourcesContent = () => {
  const [filterResources, setFilterResources] = useState(
    resourceConfig.resources
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter: { title: string }) => {
    if (filter.title === "All") {
      setFilterResources(resourceConfig.resources);
      setActiveFilter("All");
      return;
    }

    const filteredResources = resourceConfig.resources.filter((project) => {
      if (project.filters.some((f) => f.title === filter.title)) {
        return true;
      }
    });

    setActiveFilter(filter.title);
    setFilterResources(filteredResources);
  };

  return (
    <>
      <div className="flex items-center gap-4 overflow-x-scroll custom-x-scrollbar">
        {resourceConfig.filters.map(({ icon: Icon, ...filter }) => (
          <Button
            key={filter.title}
            variant="outline"
            onClick={() => handleFilterChange({ title: filter.title })}
            className={`  ${activeFilter === filter.title ? "bg-accent" : ""}`}
          >
            <Icon className="mr-2 h-4 w-4" />
            <span className="whitespace-nowrap">{filter.title}</span>
          </Button>
        ))}
      </div>
      {filterResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
          {filterResources.map((project, index) => (
            <ResourcesCard
              key={project.title + "-" + index}
              title={project.title}
              href={project.href}
              description={project.description}
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

export default ResourcesContent;
