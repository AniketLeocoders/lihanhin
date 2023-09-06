import { useState } from 'react';
import { BiShareAlt } from 'react-icons/bi';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';



const ShareDemo = () => {
    const [setshareOptions, setSetshareOptions] = useState(false)
    return (
        <div className=' relative'>
            <p className=' md:text-base capitalize flex gap-1 items-center select-none cursor-pointer'
                onClick={() => setSetshareOptions(pre => { return !pre })}
            ><BiShareAlt /> share</p>
            <div className={` ${setshareOptions ? "block" : "hidden"} absolute top-[170%] left-[30%]  px-2 py-1 bg-white rounded-md flex flex-col gap-1 justify-center transition-all`}>
                <FacebookShareButton url={`aniket`} title="facebook" summary="" source="Afisado.com"
                > <FacebookIcon size={30} round={true} />
                </FacebookShareButton>

                <WhatsappShareButton url={`https://youtu.be/5FluFGFa6xE?si=X37v-hF_4q2wNURq`} title="Mahamrityunjaya Mantra | Sonu Nigam" summary="lxuhsuxhsuhx xsuxhsuhxuhsx xsuhxuhsuxhsx sjuhxushxuhsxuh" source="Afisado.com"
                > <WhatsappIcon size={30} round={true} />
                </WhatsappShareButton>
            </div>
        </div>
    )
}

export default ShareDemo