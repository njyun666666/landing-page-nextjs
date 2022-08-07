export const Particle = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="particle">
      <div className="particle-move-up d-none d-lg-block particle-move-up-1 text-light z-index-n1 opacity-60">
        {children}
      </div>
      <div className="particle-move-up particle-move-up-2 text-light z-index-n1 opacity-60">{children}</div>
      <div className="particle-move-up d-none d-sm-block particle-move-up-3 text-light z-index-n1 opacity-60">
        {children}
      </div>
      <div className="particle-move-up d-none d-xl-block particle-move-up-4 text-light z-index-n1 opacity-60">
        {children}
      </div>
      <div className="particle-move-up d-none d-sm-block particle-move-up-5 text-light z-index-n1 opacity-60">
        {children}
      </div>
      <div className="particle-move-up border-success text-light particle-move-up-6 z-index-n1 opacity-60">
        {children}
      </div>
      <div className="particle-move-up particle-move-up-7 z-index-n1 text-light opacity-60">{children}</div>
      <div className="particle-move-up particle-move-up-8 z-index-n1 text-light opacity-60">{children}</div>
      <div className="particle-move-up particle-move-up-9 z-index-n1 text-light opacity-60">{children}</div>
    </div>
  );
};
