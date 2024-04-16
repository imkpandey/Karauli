/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from "@react-three/fiber";
import "./App.scss";
import Experience from "./components/Experience";
import {
  Suspense,
  useDeferredValue,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  Environment,
  Html,
  OrbitControls,
  ScrollControls,
  useScroll,
} from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { easing } from "maath";
import ReactLenis from "@studio-freight/react-lenis";
import tunnel from "tunnel-rat";
import Lights from "./components/Lights";
import Effects from "./components/Effects";
import TestimonialModal from "./components/TestimonialModal";
import Navbar from "./components/Navbar";

const t = tunnel();
const t2 = tunnel();
const t3 = tunnel();
const t4 = tunnel();
const t5 = tunnel();
const t6 = tunnel();
const t7 = tunnel();

const HawanBackground = () => {
  const ref = useRef();
  const mandalaRef = useRef();
  const textRef = useRef();
  const scroll = useScroll();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  useFrame((state, delta) => {
    easing.damp(
      ref.current.style,
      "display",
      scroll.offset > 0.5 && scroll.offset < 0.88 ? "block" : "none",
      0.2,
      delta
    );

    easing.damp(
      ref.current.style,
      "opacity",
      scroll.offset > 0.78 && scroll.offset < 0.85 ? 1 : 0,
      0.2,
      delta
    );

    if (scroll.offset > 0.78) {
      easing.damp(
        mandalaRef.current.style,
        "transform",
        "scale(2.5) rotate(90deg)",
        0.2,
        delta
      );

      easing.damp(
        textRef.current.style,
        "transform",
        "translateY(-60%)",
        0.2,
        delta
      );
    } else {
      easing.damp(
        mandalaRef.current.style,
        "transform",
        "scale(1.5)",
        0.2,
        delta
      );
      easing.damp(
        textRef.current.style,
        "transform",
        "translateY(0)",
        0.2,
        delta
      );
    }
  });
  return (
    <t5.In>
      <div ref={ref} className="hawan-background">
        <div className="hawan-bg">
          <img src="hawan-bg.png" alt="Hawan Background" />
        </div>
        <div className="bg-cut">
          <img src="hawan-cut.png" alt="Hawan Cut" />
        </div>
        <div className="mandala-bg">
          <img ref={mandalaRef} src="mandala.png" alt="Mandala Background" />
        </div>
        <div ref={textRef} className="havan-text-wrapper">
          <div className="havan-text">
            HAVAN <br />
            <span>Karauli Dham</span>
          </div>
          <div className="havan-subtext">
            A blend of spiritual cleansing and holistic healing
          </div>
          <div className="havan-button">
            <button onClick={openModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM10.6219 8.41459C10.5562 8.37078 10.479 8.34741 10.4 8.34741C10.1791 8.34741 10 8.52649 10 8.74741V15.2526C10 15.3316 10.0234 15.4088 10.0672 15.4745C10.1897 15.6583 10.4381 15.708 10.6219 15.5854L15.5008 12.3328C15.5447 12.3035 15.5824 12.2658 15.6117 12.2219C15.7343 12.0381 15.6846 11.7897 15.5008 11.6672L10.6219 8.41459Z"></path>
              </svg>
              Virtual Havan
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div ref={modalRef} className="modal-content">
            <div className="close-btn" onClick={closeModal}>
              &#10005;
            </div>
          </div>
        </div>
      )}
    </t5.In>
  );
};

const ShaktiBackground = () => {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    easing.damp(
      ref.current.style,
      "opacity",
      scroll.offset > 0.22 && scroll.offset < 0.3
        ? 0.2
        : scroll.offset >= 0.3 && scroll.offset < 0.5
        ? 1
        : 0,
      0.2,
      delta
    );
  });
  return (
    <t3.In>
      <div ref={ref} className="shakti-background">
        <img src="shiva-2mb.jpg" alt="Shakti Background" />
      </div>
    </t3.In>
  );
};

const Testimonials = () => {
  const ref = useRef();
  const mandalaRef = useRef();
  const wheelRef = useRef();
  const [modalOpen, setModalOpen] = useState(null);
  const scroll = useScroll();

  const openModal = (index) => {
    setModalOpen(index);
  };

  const closeModal = () => {
    setModalOpen(null);
  };
  useFrame((state, delta) => {
    easing.damp(
      ref.current.style,
      "display",
      scroll.offset > 0.85 ? "block" : "none",
      0.2,
      delta
    );

    easing.damp(
      ref.current.style,
      "opacity",
      scroll.offset > 0.95 ? 1 : 0,
      0.2,
      delta
    );

    easing.damp(
      mandalaRef.current.style,
      "transform",
      scroll.offset > 0.95 ? "scale(2.4) rotate(90deg)" : "scale(1.5)",
      0.2,
      delta
    );

    easing.damp(
      wheelRef.current.style,
      "transform",
      scroll.offset > 0.95
        ? "translateY(0%) scale(1)"
        : "translateY(300%) scale(0.5)",
      0.2,
      delta
    );
  });
  return (
    <t6.In>
      <div ref={ref} className="testimonials">
        <div className="testimonials-bg">
          <img ref={mandalaRef} src="mandala.png" alt="mandala" />
        </div>
        <div className="testimonials-text">
          <p>Testimonial</p>
        </div>
        <div ref={wheelRef} className="wheel">
          <img src="wheel.png" alt="wheel-testimonial" className="wheel-bg" />
          <img
            src="t-one.png"
            alt="testimonial-one"
            className="testimonial-one"
            onClick={() => openModal(1)}
          />
          <img
            src="t-two.png"
            alt="testimonial-two"
            className="testimonial-two"
            onClick={() => openModal(2)}
          />
          <img
            src="t-three.png"
            alt="testimonial-three"
            className="testimonial-three"
            onClick={() => openModal(3)}
          />
          <img
            src="t-four.png"
            alt="testimonial-four"
            className="testimonial-four"
            onClick={() => openModal(4)}
          />
          <img
            src="t-five.png"
            alt="testimonial-five"
            className="testimonial-five"
            onClick={() => openModal(5)}
          />
        </div>
      </div>
      {modalOpen === 1 && (
        <TestimonialModal index={modalOpen} onClose={closeModal} />
      )}
      {modalOpen === 2 && (
        <TestimonialModal index={modalOpen} onClose={closeModal} />
      )}
      {modalOpen === 3 && (
        <TestimonialModal index={modalOpen} onClose={closeModal} />
      )}
      {modalOpen === 4 && (
        <TestimonialModal index={modalOpen} onClose={closeModal} />
      )}
      {modalOpen === 5 && (
        <TestimonialModal index={modalOpen} s onClose={closeModal} />
      )}
    </t6.In>
  );
};

const SubContent = () => {
  const ref = useRef();
  const refTwo = useRef();
  const refThree = useRef();
  const refFour = useRef();
  const refFive = useRef();
  const refSix = useRef();
  const refSeven = useRef();
  const refEight = useRef();
  const scroll = useScroll();

  useFrame((state, delta) => {
    easing.damp(
      ref.current.style,
      "transform",
      scroll.offset > 0.1 && scroll.offset < 0.16
        ? "translateY(0%)"
        : scroll.offset >= 0.16
        ? "translateY(-200%)"
        : "",
      0.2,
      delta
    );

    easing.damp(
      refTwo.current.style,
      "transform",
      scroll.offset > 0.1 && scroll.offset < 0.16
        ? "translateY(20%)"
        : scroll.offset >= 0.16
        ? "translateY(-370%)"
        : "",
      0.2,
      delta
    );

    easing.damp(
      refThree.current.style,
      "transform",
      scroll.offset > 0.16 && scroll.offset < 0.22
        ? "translateY(0%)"
        : scroll.offset >= 0.22
        ? "translateY(-200%)"
        : "",
      0.2,
      delta
    );

    easing.damp(
      refFour.current.style,
      "transform",
      scroll.offset > 0.16 && scroll.offset < 0.22
        ? "translateY(0%)"
        : scroll.offset >= 0.22
        ? "translateY(-200%)"
        : "",
      0.2,
      delta
    );

    easing.damp(
      refFive.current.style,
      "opacity",
      scroll.offset > 0.22 && scroll.offset <= 0.5 ? 1 : 0,
      0.2,
      delta
    );

    easing.damp(
      refFive.current.style,
      "transform",
      scroll.offset > 0.4 ? "translate(-50%, -50%) scale(0.5)" : "",
      0.2,
      delta
    );

    easing.damp(
      refSix.current.style,
      "color",
      scroll.offset > 0.4 ? "black" : "",
      0.2,
      delta
    );

    easing.damp(
      refSeven.current.style,
      "transform",
      scroll.offset > 0.53 ? "translate(-50%, -50%)" : "",
      0.2,
      delta
    );

    easing.damp(
      refEight.current.style,
      "transform",
      scroll.offset > 0.53 ? "translate(-50%, -50%)" : "",
      0.2,
      delta
    );

    easing.damp(
      refSeven.current.style,
      "opacity",
      scroll.offset > 0.53 && scroll.offset < 0.55 ? "1" : "0",
      0.2,
      delta
    );

    easing.damp(
      refEight.current.style,
      "opacity",
      scroll.offset > 0.73 && scroll.offset < 0.78 ? "1" : "0",
      0.2,
      delta
    );
  });
  return (
    <t4.In>
      <div className="sub-content">
        <div className="left-block">
          <div ref={ref} className="left-block-one">
            <p className="sub-text-one">
              After many generations of <br />
              <span>vedic learning</span>, <span>practice </span>&
              <span> experimentation</span>,
            </p>
            <p className="sub-text-two">
              <span>Guruji</span> created this program
            </p>
            <p>
              for the current turbulent times faced by humanity. Having its
              roots in the Vedas and Upanishads, the process is implemented with
              the precision of a mathematical formula.
            </p>
          </div>
          <div ref={refThree} className="left-block-two">
            <p className="top-text">
              With a clear understanding of the scientific processes behind
              Vedic practice, <span>Guruji has devised the process of</span>{" "}
              <span className="orange-text">&quot;Guru Kripa&quot;</span>{" "}
            </p>
            <hr />
            <p>
              In simple terms, this is a top down approach, similar to how a
              parent provides specific needs to a child in order to make them
              realize their full potential.
            </p>
          </div>
        </div>
        <div className="right-block">
          <div ref={refTwo} className="right-block-one">
            <p>
              This process has been very carefully studied similar to{" "}
              <span className="bg-text">scientific research</span>
              <span> & is calibrated every</span>
              <span className="bg-text"> Amavashya</span>{" "}
              <span>
                or new moon day with the help of Shakti or positive energy.
              </span>
            </p>
          </div>
          <div ref={refFour} className="right-block-two">
            <p className="top-text">
              This process removes the layers of accumulated negativity,
              allowing an individual to connect to their true{" "}
              <span>&quot;DHARMA&quot;</span>
            </p>{" "}
            <hr />
            <p>
              This process is a rebirth. You consciously decide to peel off the
              layers of time to discover your true potential and purpose in this
              lifetime.
            </p>
          </div>
        </div>
      </div>
      <div ref={refFive} className="unity-text">
        <p className="top-text">UNITING</p>
        <div ref={refSix} className="shivtext">
          <p className="shiv-shakti">
            <span className="main-text">Shiv</span> &{" "}
            <span className="main-text">Shakti</span>
          </p>
          <p className="bottom-text">FOR BETTER LIVING</p>
        </div>
      </div>
      <div ref={refSeven} className="text-one-bg">
        <img src="text-one.png" alt="text-one" />
      </div>
      <div ref={refEight} className="text-two-bg">
        <img src="text-two.png" alt="text-two" />
      </div>
    </t4.In>
  );
};

const HeroHeading = () => {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    easing.damp(
      ref.current.style,
      "display",
      scroll.offset > 0.1 ? "none" : "block",
      0.2,
      delta
    );
  });
  return (
    <t2.In>
      <div ref={ref}>
        <div className="text-small">
          <p>
            Welcome To <br /> KARAULI SHANKAR
          </p>
        </div>
        <h1 className="text-heading">MAHADEV DHAM</h1>
      </div>
    </t2.In>
  );
};

const HeroContent = () => {
  const ref = useRef();
  const scroll = useScroll();
  useFrame((state, delta) => {
    easing.damp(
      ref.current.style,
      "transform",
      scroll.offset > 0.1 ? "perspective(100px)" : "",
      0.2,
      delta
    );
  });
  return (
    <t.In>
      <div>
        <div ref={ref} className="video-container">
          <video autoPlay loop muted>
            <source src="/earth-alpha.webm" type="video/webm" />
          </video>
        </div>
        {/* <div className="video-two-container">
          <video autoPlay loop muted>
            <source src="/alpha-shiv.webm" type="video/webm" />
          </video>
        </div> */}
      </div>
    </t.In>
  );
};

function App() {
  const appRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tlIntro = gsap.timeline({ delay: 1 });
      const tlHero = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tlIntro.fromTo(
        ".text-block",
        {
          scale: 0.8,
        },
        {
          top: -65,
          scale: 1,
          duration: 5,
          ease: "power4.out",
        }
      );
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="app">
      <img src="nebula-bg.png" alt="bg" className="nebula-bg" />
      <Navbar />
      <div className="hero-heading">
        <div className="text-block">
          <t2.Out />
        </div>
      </div>
      <div className="overlay"></div>
      <t3.Out />
      <div className="center-block">
        <t5.Out />
        <t4.Out />
      </div>
      <t6.Out />

      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 70,
          near: 1,
          far: 1000,
        }}
      >
        {/* <OrbitControls makeDefault /> */}
        {/* <color attach="background" args={["#000"]} /> */}
        <ScrollControls damping={0.2} pages={25}>
          <Suspense fallback={null}>
            <Experience />
            <ShaktiBackground />
            <HawanBackground />
            <SubContent />
            <Testimonials />
            <Environment
              files={["nebula.webp", "nebula-gainmap.webp", "nebula.json"]}
            />
            {/* <HeroContent /> */}
            {/* <HeroHeading /> */}
            {/* <OrbitControls /> */}
          </Suspense>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
