import AOS from 'aos';

export const aos = () =>
  AOS.init({
    offset: 100,
    duration: 700,
    easing: 'ease-out-quad',
    once: !0,
  });
