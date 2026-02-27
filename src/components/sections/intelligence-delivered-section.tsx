import { SectionWithMockup } from "./section-with-mockup";

const exampleData1 = {
  title: (
    <>
      Hiring,
      <br />
      without the chaos.
    </>
  ),
  description: (
    <>
      No more resume tweaking.
      <br />
      No more cold outreach.
      <br />
      Cavite simplifies the process end to end —
      <br />
      so your time goes where it truly matters.
    </>
  ),
  primaryImageSrc:
    "https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png",
  secondaryImageSrc:
    "https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png",
};

export function IntelligenceDeliveredSection() {
  return (
    <SectionWithMockup
      title={exampleData1.title}
      description={exampleData1.description}
      primaryImageSrc={exampleData1.primaryImageSrc}
      secondaryImageSrc={exampleData1.secondaryImageSrc}
    />
  );
}
