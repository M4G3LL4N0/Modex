"use client";

import { useEffect, useRef } from "react";
import * as d3 from "d3";

type Node = {
  id: string;
  label: string;
  type: "current" | "similar";
  similarity?: number;
};

type Link = {
  source: string;
  target: string;
  value: number;
};

type GraphVisualizationProps = {
  nodes: Node[];
  links: Link[];
};

export default function GraphVisualization({ nodes, links }: GraphVisualizationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const width = ref.current.clientWidth;
    const height = ref.current.clientHeight;

    const svg = d3.select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const simulation = d3.forceSimulation<Node>()
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(links).id(d => (d as Node).id).distance(100));

    const link = svg.append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

    const node = svg.append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", d => d.type === "current" ? 12 : 8)
      .attr("fill", d => d.type === "current" ? "#7aa2ff" : "#c39bff");

    const label = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .join("text")
      .text(d => d.label)
      .attr("font-size", 12)
      .attr("dx", 15)
      .attr("dy", 4)
      .attr("fill", "rgba(255,255,255,0.8)");

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as Node).x!)
        .attr("y1", d => (d.source as Node).y!)
        .attr("x2", d => (d.target as Node).x!)
        .attr("y2", d => (d.target as Node).y!);

      node
        .attr("cx", d => d.x!)
        .attr("cy", d => d.y!);

      label
        .attr("x", d => d.x!)
        .attr("y", d => d.y!);
    });

    return () => {
      svg.remove();
    };
  }, [nodes, links]);

  return <div ref={ref} className="w-full h-full" />;
}
