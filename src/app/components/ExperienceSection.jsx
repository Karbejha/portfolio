import React from "react";

const ExperienceSection = ({ content, direction }) => {
  const textAlignClass = direction === "rtl" ? "text-right" : "text-left";

  return (
    <section
      id="experience"
      className="py-8 text-white sm:py-16"
      aria-labelledby="experience-heading"
    >
      <div className="rounded-2xl border border-[#33353F] bg-[#181818]/60 px-5 py-6 sm:px-8 sm:py-8 xl:px-12">
        <div className={`max-w-3xl ${textAlignClass}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-300">
            {content.eyebrow}
          </p>
          <h2 id="experience-heading" className="mb-4 text-3xl font-bold sm:text-4xl">
            {content.heading}
          </h2>
          <p className="text-base leading-7 text-[#ADB7BE] sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {content.items.map((item) => (
            <article
              key={item.title}
              className={`rounded-xl border border-white/10 bg-[#121212] p-4 ${textAlignClass}`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <div>
                  <p className="mb-1 text-xs font-medium text-primary-300">{item.label}</p>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-xs text-slate-400">{item.organization}</p>
              </div>
              <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#ADB7BE]">{item.description}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={item.tagsLabel}>
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-[#33353F] px-2.5 py-1 text-[11px] text-slate-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
