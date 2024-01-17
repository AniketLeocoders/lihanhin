import { Modal } from 'flowbite-react';
import { useState } from 'react';
import CustumeBtn from './CustumeBtn';
import { HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';
import CustumeModal, { ModalBody, ModalHeader } from './CustumeModal';

const FlowbiteComp = () => {
    const [openModal, setOpenModal] = useState(true)
    return (
        <div className=' p-10'>
            <div className="">
                <CustumeBtn className='mt-5 bg-red-500' onClick={() => setOpenModal('default')}>Buy now</CustumeBtn>
                <Modal show={openModal === 'default'} onClose={() => setOpenModal(undefined)}>
                    <Modal.Header className=' p-0 border-none'></Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                                companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
                                ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
                                possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

            <CustumeBtn className=' bg-yellow-200 hover:bg-yellow-300'>
                <HiShoppingCart className="h-5 w-5" />
                <p>Buy now</p>
            </CustumeBtn>



            <CustumeBtn className='mt-5 bg-red-500 hover:bg-red-700' onClick={() => setOpenModal(true)}>CustomModal</CustumeBtn>
            <CustumeModal size='3xl' show={openModal} >
                <ModalHeader onClose={() => setOpenModal(pre => { return !pre })}>Welcome to website</ModalHeader>
                <ModalBody>
                    <div className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus doloribus perferendis laborum, magni labore exercitationem voluptatum excepturi eius? Nobis itaque magnam voluptatibus dolores sit consectetur sapiente! Ex expedita totam cupiditate illo temporibus facere nihil. Laboriosam mollitia, saepe dolore laudantium inventore blanditiis rerum ut dicta, perspiciatis libero explicabo sequi quisquam quaerat.
                    </div>
                </ModalBody>
            </CustumeModal>

            <select className=' text-lg rounded-lg border-2 focus:ring-gray-500 focus:border-gray-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '>
                <option  className=' cursor-pointer'>Choose countries</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>


            {/* <LayoutSidebar/> */}
        </div>
    )
}

export default FlowbiteComp