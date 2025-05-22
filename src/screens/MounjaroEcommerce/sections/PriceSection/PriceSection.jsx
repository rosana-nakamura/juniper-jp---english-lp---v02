import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";

export const PriceSection = () => {
  const [selectedDose, setSelectedDose] = React.useState(1);

  // Dose options data
  const doseOptions = [
    {
      id: 1,
      dose: "2.5mg",
      pens: 4,
      image: "https://c.animaapp.com/mayvnfyjH5O03h/img/mounjaro2-5mg.png",
      price: 29200,
    },
    {
      id: 2,
      dose: "5mg",
      pens: 4,
      image: "https://c.animaapp.com/mayvnfyjH5O03h/img/mounjaro5mg.png",
      price: 48800,
    },
    {
      id: 3,
      dose: "7.5mg",
      pens: 4,
      image: "https://c.animaapp.com/mayvnfyjH5O03h/img/mounjaro7-5mg.png",
      price: 68800,
    },
    {
      id: 4,
      dose: "10mg",
      pens: 4,
      image: "https://c.animaapp.com/mayvnfyjH5O03h/img/mounjaro2-5mg-1.png",
      price: 88800,
    },
  ];

  const handleDoseSelection = (id) => {
    setSelectedDose(id);
  };

  const selectedDoseOption = doseOptions.find(option => option.id === selectedDose);

  // Benefits data
  const benefits = [
    {
      id: 1,
      title: "Increased insulin secretion",
      description:
        "Helps lower blood sugar levels, so your body can use glucose more effectively for energy",
      icon: "https://c.animaapp.com/mayvnfyjH5O03h/img/body-part-pictograms-2.svg",
    },
    {
      id: 2,
      title: "Reduced glucagon levels",
      description:
        "Prevents excessive glucose production, stabilizing blood sugar, so you avoid energy crashes and sugar spikes",
      icon: "https://c.animaapp.com/mayvnfyjH5O03h/img/body-part-pictograms-1.svg",
    },
    {
      id: 3,
      title: "Slower gastric emptying",
      description:
        "Keeps you feeling full longer, reducing appetite, so you naturally eat less without feeling deprived",
      icon: "https://c.animaapp.com/mayvnfyjH5O03h/img/body-part-pictograms-3.svg",
    },
    {
      id: 4,
      title: "Enhanced metabolic efficiency",
      description:
        "Activates both GLP-1 and GIP pathways, making it the most effective GLP-1 option for weight loss and metabolic health",
      icon: "https://c.animaapp.com/mayvnfyjH5O03h/img/body-part-pictograms.svg",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah",
      weightLoss: "10kg",
      quote:
        "\"Juniper's just given me my confidence back. My friends are saying, 'You've got your sparkle back', which I know I'd lost.\"",
      image:
        "https://c.animaapp.com/mayvnfyjH5O03h/img/screenshot-2024-02-02-at-14-32-1.png",
    },
    {
      id: 2,
      name: "Rosie",
      weightLoss: "27kg",
      quote:
        "\"Juniper helped me realised I wasn't eating enough protein. I now know it's not just about getting the number down, but it's how to be sustainable in the long-term.\"",
      image:
        "https://c.animaapp.com/mayvnfyjH5O03h/img/screenshot-2024-01-29-at-1-20-2.png",
    },
    {
      id: 3,
      name: "Cherelle D",
      weightLoss: "19kg",
      quote:
        '"Before Juniper, I was considering gastric surgery. Now I feel so confident and I love shopping for new clothes."',
      image:
        "https://c.animaapp.com/mayvnfyjH5O03h/img/screenshot-2024-01-29-at-1-20-2-1.png",
    },
    {
      id: 4,
      name: "Jacqueline",
      weightLoss: "10.4kg",
      quote:
        "\"I was at the end of my menopause and I could not lose the weight. Now I'm healthier, I've got more mobility, and my mental health is just amazing.\"",
      image:
        "https://c.animaapp.com/mayvnfyjH5O03h/img/screenshot-2024-02-02-at-14-32-1-1.png",
    },
  ];

  // FAQ data
  const faqItems = [
    { id: 1, question: "Can I consult with an English-speaking doctor?" },
    { id: 2, question: "How does the treatment delivery work?" },
    { id: 3, question: "How do the treatments work?" },
    { id: 4, question: "Are the GLP-1 treatments authentic?" },
    { id: 5, question: "Can I travel abroad with my treatment?" },
    { id: 6, question: "Do you offer ongoing support for weight loss?" },
    { id: 7, question: "What happens when I stop the treatment?" },
    { id: 8, question: "What are the side effects of the treatments?" },
    { id: 9, question: "How does the 30-day money-back guarantee work?" },
    { id: 10, question: "How Does the Month-to-Month Plan Work?" },
  ];

  return (
<section className="flex flex-col md:flex-row gap-2.5 px-6 py-12 md:px-[120px] md:py-[50px] bg-white">
  <div className="w-full md:w-1/2 mb-8 md:mb-0">
    <img
      className="w-full h-auto object-cover"
      alt="Mounjaro medication pens"
      src="https://c.animaapp.com/mayvnfyjH5O03h/img/frame-7511.png"
    />
  </div>

      <div className="flex flex-col w-full md:w-1/2 items-start gap-14">
        {/* Header Section */}
        <div className="flex flex-col w-full items-start gap-[26px]">
          <div className="flex flex-col w-full items-start gap-[9px]">
            <h3 className="self-stretch [font-family:'Atlas_Grotesk-Medium',Helvetica] font-medium text-[#133f26] text-lg leading-[27px]">
              MEDICATION
            </h3>
            <h1 className="self-stretch font-desktop-40-heading-XL-bold font-[number:var(--desktop-40-heading-XL-bold-font-weight)] text-[#133f26] text-[length:var(--desktop-40-heading-XL-bold-font-size)] tracking-[var(--desktop-40-heading-XL-bold-letter-spacing)] leading-[var(--desktop-40-heading-XL-bold-line-height)] [font-style:var(--desktop-40-heading-XL-bold-font-style)]">
              Mounjaro
            </h1>
            <h2 className="self-stretch font-desktop-24-heading-m-bold font-[number:var(--desktop-24-heading-m-bold-font-weight)] text-[#133f26] text-[length:var(--desktop-24-heading-m-bold-font-size)] tracking-[var(--desktop-24-heading-m-bold-letter-spacing)] leading-[var(--desktop-24-heading-m-bold-line-height)] [font-style:var(--desktop-24-heading-m-bold-font-style)]">
              GIP/GLP-1 users can lose up to 20% of their weight
            </h2>
          </div>

          <div className="flex flex-col w-full gap-[13.5px]">
            <p className="font-all-devices-18-paragraph-l-regular font-[number:var(--all-devices-18-paragraph-l-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-18-paragraph-l-regular-font-size)] tracking-[var(--all-devices-18-paragraph-l-regular-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-regular-line-height)] [font-style:var(--all-devices-18-paragraph-l-regular-font-style)]">
              Free, discreet, delivery to your door
            </p>
            <p className="font-all-devices-18-paragraph-l-regular font-[number:var(--all-devices-18-paragraph-l-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-18-paragraph-l-regular-font-size)] tracking-[var(--all-devices-18-paragraph-l-regular-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-regular-line-height)] [font-style:var(--all-devices-18-paragraph-l-regular-font-style)]">
              English-speaking doctors &amp; dietitians
            </p>
            <p className="font-all-devices-18-paragraph-l-regular font-[number:var(--all-devices-18-paragraph-l-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-18-paragraph-l-regular-font-size)] tracking-[var(--all-devices-18-paragraph-l-regular-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-regular-line-height)] [font-style:var(--all-devices-18-paragraph-l-regular-font-style)]">
              24-hour online support
            </p>
          </div>
        </div>

        {/* Dose Selection */}
        <div className="flex flex-col w-full items-start gap-[7px]">
          <p className="font-all-devices-18-paragraph-l-regular font-[number:var(--all-devices-18-paragraph-l-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-18-paragraph-l-regular-font-size)] tracking-[var(--all-devices-18-paragraph-l-regular-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-regular-line-height)] [font-style:var(--all-devices-18-paragraph-l-regular-font-style)]">
            Select dose:
          </p>
          <div className="flex flex-wrap items-center gap-5 w-full">
            {doseOptions.map((option) => (
              <div
                key={option.id}
                className="flex flex-col w-[100px] items-center gap-[7px] cursor-pointer"
                onClick={() => handleDoseSelection(option.id)}
              >
                <div className="w-full h-[79px]">
                  <div
                    className={`w-full h-[79px] bg-white rounded-[1.61px] border-[0.4px] border-solid border-[#a7c1a0] ${selectedDose === option.id ? "border-2" : "border-[0.4px]"}`}
                  >
                    <img
                      className="mx-auto mt-7"
                      alt={`Mounjaro ${option.dose}`}
                      src={option.image}
                    />
                  </div>
                </div>
                <p className="text-center font-all-devices-12-small-text-bold font-[number:var(--all-devices-12-small-text-bold-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-12-small-text-bold-font-size)] tracking-[var(--all-devices-12-small-text-bold-letter-spacing)] leading-[var(--all-devices-12-small-text-bold-line-height)] [font-style:var(--all-devices-12-small-text-bold-font-style)]">
                  {option.dose} x {option.pens} pens
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Price Section */}
        <div className="flex flex-col w-full items-start gap-[21px]">
          <div className="flex w-full items-end gap-2.5">
            <p className="font-all-devices-18-paragraph-l-regular font-[number:var(--all-devices-18-paragraph-l-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-18-paragraph-l-regular-font-size)] tracking-[var(--all-devices-18-paragraph-l-regular-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-regular-line-height)] [font-style:var(--all-devices-18-paragraph-l-regular-font-style)]">
              Tax included:
            </p>
            <div className="[font-family:'Noto_Sans_JP',Helvetica]">
              <span className="font-bold text-[#133f26]">￥</span>
              <span className="font-bold text-[#133f26] text-4xl leading-[26.2px]">
                {selectedDoseOption.price.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex w-full items-start gap-2.5">
            <div className="flex items-center gap-[15px] w-full">
              <p className="font-all-devices-18-paragraph-l-regular font-[number:var(--all-devices-18-paragraph-l-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-18-paragraph-l-regular-font-size)] tracking-[var(--all-devices-18-paragraph-l-regular-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-regular-line-height)] [font-style:var(--all-devices-18-paragraph-l-regular-font-style)]">
                Dose:
              </p>
              <p className="[font-family:'Atlas_Grotesk-Medium',Helvetica] font-medium text-[#1a1a1a] text-lg leading-[27px]">
                Mounjaro - {selectedDoseOption.dose} x {selectedDoseOption.pens} pens
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-0.5 w-full">
          <Button className="w-full h-12 bg-primarygreen-500 text-tertiarycream rounded" onClick={() => window.open("https://app.myjuniper.jp/start/signup", "_blank")}>
            <span className="[font-family:'Atlas_Grotesk-Medium',Helvetica] font-medium text-lg">
              Book your free doctor consult today
            </span>
          </Button>

          <div className="flex items-center h-6 mt-1">
            <div className="w-[19px] h-5 relative">
              <img
                className="absolute w-[17px] h-[19px] top-0 left-0"
                alt="Money back guarantee icon"
                src="https://c.animaapp.com/mayvnfyjH5O03h/img/vector.svg"
              />
              <div className="absolute w-2 h-[11px] top-1 left-1.5 bg-[#acff6a] rounded-[4px/5.5px]" />
              <div className="absolute top-0.5 left-1 [font-family:'Atlas_Grotesk-Bold',Helvetica] font-bold text-[#133f26] text-[11px] leading-[16.5px]">
                ￥
              </div>
            </div>
            <p className="ml-2 [font-family:'Atlas_Grotesk-LightItalic',Helvetica] font-light italic text-[#133f26] text-base leading-6">
              30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="font-all-devices-18-paragraph-l-regular font-[number:var(--all-devices-18-paragraph-l-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-18-paragraph-l-regular-font-size)] tracking-[var(--all-devices-18-paragraph-l-regular-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-regular-line-height)] [font-style:var(--all-devices-18-paragraph-l-regular-font-style)]">
            Mounjaro contains tirzepatide, a dual-acting GLP-1 and GIP receptor
            agonist, that mimics the effects of both GLP-1 and GIP hormones,
            helping regulate blood sugar and support weight loss.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="flex flex-col w-full items-start gap-[30px]">
          <h3 className="font-desktop-20-heading-s-bold font-[number:var(--desktop-20-heading-s-bold-font-weight)] text-[#133f26] text-[length:var(--desktop-20-heading-s-bold-font-size)] tracking-[var(--desktop-20-heading-s-bold-letter-spacing)] leading-[var(--desktop-20-heading-s-bold-line-height)] [font-style:var(--desktop-20-heading-s-bold-font-style)]">
            It promotes:
          </h3>

          <ScrollArea className="w-full h-[388px]">
            <div className="flex flex-col gap-6 pr-4">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-4 w-full">
                  <Card className="w-[100px] h-[79px] rounded-[1.61px] border-[0.4px] border-solid border-[#aab9a6]">
                    <CardContent className="p-0 flex items-center justify-center h-full">
                      <img
                        className="w-auto h-auto max-w-[66px] max-h-[63px]"
                        alt={benefit.title}
                        src={benefit.icon}
                      />
                    </CardContent>
                  </Card>
                  <div className="flex flex-col items-start flex-1">
                    <h4 className="[font-family:'Atlas_Grotesk-Medium',Helvetica] font-medium text-[#133f26] text-lg leading-[27px]">
                      {benefit.title}
                    </h4>
                    <p className="font-all-devices-16-paragraph-m-regular font-[number:var(--all-devices-16-paragraph-m-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-16-paragraph-m-regular-font-size)] tracking-[var(--all-devices-16-paragraph-m-regular-letter-spacing)] leading-[var(--all-devices-16-paragraph-m-regular-line-height)] [font-style:var(--all-devices-16-paragraph-m-regular-font-style)]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* How Juniper Program Works */}
        <div className="flex flex-col w-full items-start gap-[30px]">
          <h3 className="font-desktop-20-heading-s-bold font-[number:var(--desktop-20-heading-s-bold-font-weight)] text-[#133f26] text-[length:var(--desktop-20-heading-s-bold-font-size)] tracking-[var(--desktop-20-heading-s-bold-letter-spacing)] leading-[var(--desktop-20-heading-s-bold-line-height)] [font-style:var(--desktop-20-heading-s-bold-font-style)]">
            How Juniper Program works:
          </h3>

          <div className="flex flex-col w-full items-start gap-4">
            <div className="w-full">
              <div className="[font-family:'Noto_Sans_JP',Helvetica] text-[#133f26] text-lg leading-[18px]">
                <span className="font-all-devices-18-paragraph-l-bold font-[number:var(--all-devices-18-paragraph-l-bold-font-weight)] leading-[var(--all-devices-18-paragraph-l-bold-line-height)] [font-style:var(--all-devices-18-paragraph-l-bold-font-style)] tracking-[var(--all-devices-18-paragraph-l-bold-letter-spacing)] text-[length:var(--all-devices-18-paragraph-l-bold-font-size)]">
                  Step 1:{" "}
                </span>
                <a
                  href="https://www.myjuniper.jp/en/book"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-all-devices-18-paragraph-l-bold font-[number:var(--all-devices-18-paragraph-l-bold-font-weight)] leading-[var(--all-devices-18-paragraph-l-bold-line-height)] underline [font-style:var(--all-devices-18-paragraph-l-bold-font-style)] tracking-[var(--all-devices-18-paragraph-l-bold-letter-spacing)] text-[length:var(--all-devices-18-paragraph-l-bold-font-size)]"
                >
                  Book your consultation
                </a>
              </div>

              <div className="flex flex-col gap-3 mt-2">
                <p className="font-all-devices-16-paragraph-m-regular font-[number:var(--all-devices-16-paragraph-m-regular-font-weight)] text-[#1a1a1a] leading-[var(--all-devices-16-paragraph-m-regular-line-height)] [font-style:var(--all-devices-16-paragraph-m-regular-font-style)] tracking-[var(--all-devices-16-paragraph-m-regular-letter-spacing)] text-[length:var(--all-devices-16-paragraph-m-regular-font-size)]">
                  <a
                    href="https://www.myjuniper.jp/en/book"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Book your free online consultation
                  </a>{" "}
                  with an English-speaking doctor.
                </p>
                <p className="font-all-devices-16-paragraph-m-regular font-[number:var(--all-devices-16-paragraph-m-regular-font-weight)] text-[#1a1a1a] leading-[var(--all-devices-16-paragraph-m-regular-line-height)] [font-style:var(--all-devices-16-paragraph-m-regular-font-style)] tracking-[var(--all-devices-16-paragraph-m-regular-letter-spacing)] text-[length:var(--all-devices-16-paragraph-m-regular-font-size)]">
                  Fill out a short online questionnaire.
                </p>
                <p className="font-light text-[#1a1a1a] leading-6">
                  Attend your online consultation. (Approval of a treatment
                  request are at the doctor's discretion.)
                </p>
              </div>
            </div>

            <div className="w-full">
              <h4 className="font-all-devices-18-paragraph-l-bold font-[number:var(--all-devices-18-paragraph-l-bold-font-weight)] text-[#133f26] text-[length:var(--all-devices-18-paragraph-l-bold-font-size)] tracking-[var(--all-devices-18-paragraph-l-bold-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-bold-line-height)] [font-style:var(--all-devices-18-paragraph-l-bold-font-style)]">
                Step 2: Receive treatment
              </h4>
              <p className="font-all-devices-16-paragraph-m-regular font-[number:var(--all-devices-16-paragraph-m-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-16-paragraph-m-regular-font-size)] tracking-[var(--all-devices-16-paragraph-m-regular-letter-spacing)] leading-[var(--all-devices-16-paragraph-m-regular-line-height)] [font-style:var(--all-devices-16-paragraph-m-regular-font-style)]">
                Receive your medication with free delivery to your address in
                Japan.
              </p>
            </div>

            <div className="w-full">
              <h4 className="font-all-devices-18-paragraph-l-bold font-[number:var(--all-devices-18-paragraph-l-bold-font-weight)] text-[#133f26] text-[length:var(--all-devices-18-paragraph-l-bold-font-size)] tracking-[var(--all-devices-18-paragraph-l-bold-letter-spacing)] leading-[var(--all-devices-18-paragraph-l-bold-line-height)] [font-style:var(--all-devices-18-paragraph-l-bold-font-style)]">
                Step 3: Ongoing Medical Support and Health Coaching
              </h4>
              <div className="flex flex-col gap-3 mt-2">
                <p className="font-all-devices-16-paragraph-m-regular font-[number:var(--all-devices-16-paragraph-m-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-16-paragraph-m-regular-font-size)] tracking-[var(--all-devices-16-paragraph-m-regular-letter-spacing)] leading-[var(--all-devices-16-paragraph-m-regular-line-height)] [font-style:var(--all-devices-16-paragraph-m-regular-font-style)]">
                  Nurses and pharmacists are here to guide you on treatment,
                  dosage, and side effect management.
                </p>
                <p className="font-all-devices-16-paragraph-m-regular font-[number:var(--all-devices-16-paragraph-m-regular-font-weight)] text-[#1a1a1a] text-[length:var(--all-devices-16-paragraph-m-regular-font-size)] tracking-[var(--all-devices-16-paragraph-m-regular-letter-spacing)] leading-[var(--all-devices-16-paragraph-m-regular-line-height)] [font-style:var(--all-devices-16-paragraph-m-regular-font-style)]">
                  Your health coach offers personalized advice on nutrition,
                  exercise, and lifestyle to keep you on track.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second CTA Button */}
        <div className="flex flex-col items-center gap-0.5 w-full">
          <Button className="w-full h-12 bg-primarygreen-500 text-tertiarycream rounded" onClick={() => window.open("https://app.myjuniper.jp/start/signup", "_blank")}>
            <span className="[font-family:'Atlas_Grotesk-Medium',Helvetica] font-medium text-lg">
              Book your free doctor consult today
            </span>
          </Button>

          <div className="flex items-center h-6 mt-1">
            <div className="w-[19px] h-5 relative">
              <img
                className="absolute w-[17px] h-[19px] top-0 left-0"
                alt="Money back guarantee icon"
                src="https://c.animaapp.com/mayvnfyjH5O03h/img/vector.svg"
              />
              <div className="absolute w-2 h-[11px] top-1 left-1.5 bg-[#c5ff47] rounded-[4px/5.5px]" />
              <div className="absolute top-0.5 left-1 [font-family:'Atlas_Grotesk-Bold',Helvetica] font-bold text-[#133f26] text-[11px] leading-[16.5px]">
                ￥
              </div>
            </div>
            <p className="ml-2 [font-family:'Atlas_Grotesk-Light',Helvetica] font-light text-[#133f26] text-base leading-6">
              30-day money-back guarantee
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="flex flex-col w-full items-start gap-[30px]">
          <h3 className="font-desktop-20-heading-s-bold font-[number:var(--desktop-20-heading-s-bold-font-weight)] text-[#133f26] text-[length:var(--desktop-20-heading-s-bold-font-size)] tracking-[var(--desktop-20-heading-s-bold-letter-spacing)] leading-[var(--desktop-20-heading-s-bold-line-height)] [font-style:var(--desktop-20-heading-s-bold-font-style)]">
            Lose weight, gain strengh:
          </h3>

          <div className="flex flex-col w-full gap-3.5">
            {testimonials.map((testimonial) => (
              <Card
                key={testimonial.id}
                className="w-full p-4 bg-white rounded-lg border border-solid border-[#d0d8bc]"
              >
                <CardContent className="p-0 flex gap-2.5">
                  <img
                    className="w-[94px] h-[108px] object-cover"
                    alt={`${testimonial.name}'s transformation`}
                    src={testimonial.image}
                  />
                  <div className="flex flex-col gap-2.5 flex-1">
                    <div className="flex items-center gap-4 w-full">
                      <div className="font-all-devices-16-paragraph-m-bold font-[number:var(--all-devices-16-paragraph-m-bold-font-weight)] text-primarygreen-500 text-[length:var(--all-devices-16-paragraph-m-bold-font-size)] tracking-[var(--all-devices-16-paragraph-m-bold-letter-spacing)] leading-[var(--all-devices-16-paragraph-m-bold-line-height)] [font-style:var(--all-devices-16-paragraph-m-bold-font-style)]">
                        {testimonial.name}
                      </div>
                      <Badge className="flex items-center gap-1 px-2 py-1 bg-secondarylime-200 rounded">
                        <img
                          className="w-[7.79px] h-[7.5px]"
                          alt="Weight loss indicator"
                          src="https://c.animaapp.com/mayvnfyjH5O03h/img/polygon-1.svg"
                        />
                        <span className="font-all-devices-12-small-text-bold font-[number:var(--all-devices-12-small-text-bold-font-weight)] text-primarygreen-500 text-[length:var(--all-devices-12-small-text-bold-font-size)] text-right tracking-[var(--all-devices-12-small-text-bold-letter-spacing)] leading-[var(--all-devices-12-small-text-bold-line-height)] [font-style:var(--all-devices-12-small-text-bold-font-style)]">
                          {testimonial.weightLoss}
                        </span>
                      </Badge>
                    </div>
                    <p className="font-all-devices-16-paragraph-m-regular font-[number:var(--all-devices-16-paragraph-m-regular-font-weight)] text-[#133f26] text-[length:var(--all-devices-16-paragraph-m-regular-font-size)] tracking-[var(--all-devices-16-paragraph-m-regular-letter-spacing)] leading-[var(--all-devices-16-paragraph-m-regular-line-height)] [font-style:var(--all-devices-16-paragraph-m-regular-font-style)]">
                      {testimonial.quote}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Money-Back Guarantee Section */}
        <div className="flex flex-col w-full items-start gap-[30px]">
          <h3 className="font-desktop-20-heading-s-bold font-[number:var(--desktop-20-heading-s-bold-font-weight)] text-[#133f26] text-[length:var(--desktop-20-heading-s-bold-font-size)] tracking-[var(--desktop-20-heading-s-bold-letter-spacing)] leading-[var(--desktop-20-heading-s-bold-line-height)] [font-style:var(--desktop-20-heading-s-bold-font-style)]">
            Risk-Free Trial: 30-Day Money-Back Guarantee
          </h3>

          <div className="flex flex-col gap-3">
            <p className="font-medium text-[#1a1a1a] leading-5">
              We're confident our program can help you achieve your weight
              goals.
            </p>
            <p className="[font-family:'Atlas_Grotesk-Regular',Helvetica] text-[#1a1a1a] leading-5">
              You can cancel your month-to-month subscription anytime within 30
              days of receiving your first order and we'll refund you the full
              amount.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="flex flex-col w-full items-start gap-[30px]">
          <h3 className="font-desktop-20-heading-s-bold font-[number:var(--desktop-20-heading-s-bold-font-weight)] text-[#133f26] text-[length:var(--desktop-20-heading-s-bold-font-size)] tracking-[var(--desktop-20-heading-s-bold-letter-spacing)] leading-[var(--desktop-20-heading-s-bold-line-height)] [font-style:var(--desktop-20-heading-s-bold-font-style)]">
            Have Questions?
          </h3>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={`item-${item.id}`}>
                <AccordionTrigger className="py-4 px-2 font-all-devices-14-paragraph-s-bold font-[number:var(--all-devices-14-paragraph-s-bold-font-weight)] text-primarygreen-500 text-[length:var(--all-devices-14-paragraph-s-bold-font-size)] tracking-[var(--all-devices-14-paragraph-s-bold-letter-spacing)] leading-[var(--all-devices-14-paragraph-s-bold-line-height)] [font-style:var(--all-devices-14-paragraph-s-bold-font-style)]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="px-2 pb-4 text-[#1a1a1a]">
                    {/* Content would be populated with actual answers */}
                  </p>
                </AccordionContent>
                <Separator />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
