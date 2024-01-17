import Navbar from '../componentss/Navbar';
import DemoCard from '../componentss/DemoCard';
import { Demos } from '../Constants';
import Joyride from 'react-joyride';
import { useState } from 'react';
import { useMount, useSetState } from 'react-use';

const Homepage = () => {

    const [{ run, steps }, setState] = useSetState({
        run: false,
        steps: [
            {
                content: <h2>Let's begin our journey!</h2>,
                locale: { skip: <strong aria-label="skip">S-K-I-P</strong> },
                placement: 'center',
                target: 'body',
            },
            {
                content: <h2>Sticky elements</h2>,
                floaterProps: {
                    disableAnimation: true,
                },
                spotlightPadding: 20,
                target: '.step-1',
            },
            {
                content: 'These are our super awesome projects!',
                placement: 'bottom',
                styles: {
                    options: {
                        width: 300,
                    },
                },
                target: '.demo__projects h2',
                title: 'Our projects',
            },
            {
                content: (
                    <div>
                        You can render anything!
                        <br />
                        <h3>Like this H3 title</h3>
                    </div>
                ),
                placement: 'top',
                target: '.demo__how-it-works h2',
                title: 'Our Mission',
            },
            {
                content: (
                    <div>
                        <h3>All about us</h3>
                        <svg
                            height="50px"
                            preserveAspectRatio="xMidYMid"
                            viewBox="0 0 96 96"
                            width="50px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g>
                                <path
                                    d="M83.2922435,72.3864207 C69.5357835,69.2103145 56.7313553,66.4262214 62.9315626,54.7138297 C81.812194,19.0646376 67.93573,0 48.0030634,0 C27.6743835,0 14.1459311,19.796662 33.0745641,54.7138297 C39.4627778,66.4942237 26.1743334,69.2783168 12.7138832,72.3864207 C0.421472164,75.2265157 -0.0385432192,81.3307198 0.0014581185,92.0030767 L0.0174586536,96.0032105 L95.9806678,96.0032105 L95.9966684,92.1270809 C96.04467,81.3747213 95.628656,75.2385161 83.2922435,72.3864207 Z"
                                    fill="#000000"
                                />
                            </g>
                        </svg>
                    </div>
                ),
                placement: 'left',
                target: '.demo__about h2',
            },
        ],
    });


    return (
        <>
            <Navbar />
            <section className='px-2  max-w-[1400px] mx-auto '>
                <h1 className='font-bold text-lg md:text-3xl'>Our Popular Designs</h1>
                <div className="flex flex-wrap gap-4 justify-evenly mt-4 pb-9 md:justify-start">
                    {Demos?.map((singledemo, i) => (
                        <DemoCard key={`demo${i}`}
                            id={`tour-step-${i + 1}`}
                            demo={singledemo} />))
                    }
                </div>
            </section>
            {/* <div className="flex gap-2 text-white">
                {
                    [1, 2, 3, 4, 5, 6].map((item) => {
                        return (
                            <div
                                key={item}
                                id={`step-${item}`}
                                className={`step-${item}`}
                                style={{
                                    border: "1px solid white",
                                    width: "100px",
                                    height: "100px",
                                    background: "#0c1d2b",
                                    borderRadius: "8px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {item}
                            </div>
                        )
                    })
                }
            </div> */}
            <Joyride
                // callback={handleJoyrideCallback}
                continuous
                hideCloseButton
                run={run}
                scrollToFirstStep
                showProgress
                showSkipButton
                steps={steps}
                styles={{
                    options: {
                        zIndex: 10000,
                    },
                }}
            />
        </>
    )
}

export default Homepage