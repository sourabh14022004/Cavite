const ACCENT_INDIGO = "text-indigo-400";

export function IndividualsSection() {
  return (
    <section className="relative flex min-h-screen shrink-0 snap-start items-center overflow-hidden border-t border-neutral-800 bg-neutral-950 [scroll-snap-stop:always]">
      {/* Background Gradients */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-sky-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-8">
        <div className="max-w-xl">
          <p
            className={`text-xs font-semibold uppercase tracking-widest ${ACCENT_INDIGO}`}
          >
            For Individuals
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Most meaningful work profile.
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            A Cavite profile can be used as a simple resume or a complete
            portfolio to showcase your proof-of-work.
          </p>
        </div>
        <div className="mt-10 flex w-full shrink-0 justify-center lg:mt-0 lg:w-1/2 lg:justify-end">
          <div className="relative w-full max-w-[600px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/50 shadow-2xl shadow-indigo-500/10 transition-transform duration-500 hover:scale-[1.02]">
            <img
              src="/profile-mock2.jpg"
              alt="Cavite Profile Workspace"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
