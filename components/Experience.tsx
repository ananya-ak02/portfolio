"use client";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-text-primary tracking-tight">
          Experience
        </h2>
      </div>

      <div className="w-full max-w-3xl bg-bg-card border border-border rounded-xl p-8 hover:border-border/80 transition-colors">
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 border border-border">
              <div className="text-[#FF6B35] font-bold text-2xl font-sans italic tracking-tighter mt-1">
                f
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-text-primary tracking-tight">
                Software Development Engineer Intern
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <span className="text-text-secondary font-medium">
                  Flipkart · Core Platform
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center shrink-0">
            <span className="text-text-secondary text-xs font-medium px-3 py-1 rounded bg-bg-secondary border border-border">
              May 2026 – July 2026
            </span>
          </div>
        </div>

        <p className="text-sm text-text-secondary mb-6 leading-relaxed">
          Working on large-scale production data infrastructure within
          Flipkart&apos;s Core Platform team, contributing to data processing
          reliability, cluster migration, and internal data observability.
        </p>

        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">
              Watermark Management
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Developed and maintained watermark update configurations for
              Euclid and TCDM jobs to track the latest processed-data timestamp
              and determine processing progress.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">
              Cluster Migration
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Worked on data crop hydration as part of migration from legacy
              clusters to Google Cloud Platform (GCP), supporting reliable data
              availability during cluster modernization.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">
              Data Observability
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Built and updated an internal data-team dashboard displaying
              as-of timestamps and job execution status, enabling teams to
              identify stale data, failed jobs, and successfully processed
              data.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs font-medium text-text-secondary bg-bg-secondary rounded border border-border">
            Data Infrastructure
          </span>

          <span className="px-3 py-1 text-xs font-medium text-text-secondary bg-bg-secondary rounded border border-border">
            GCP
          </span>

          <span className="px-3 py-1 text-xs font-medium text-text-secondary bg-bg-secondary rounded border border-border">
            Production Systems
          </span>
        </div>
      </div>
    </section>
  );
}