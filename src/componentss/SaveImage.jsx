import html2canvas from 'html2canvas';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { FiDownload } from 'react-icons/fi';
import { FaFileDownload } from 'react-icons/fa';
import { Divider } from './UserMenu';

const SaveImage = ({ screenshotRef }) => {

    const handleScreenshotClick = () => {
        if (screenshotRef.current) {
            let currentdate = new Date()
            let timestamp = `${currentdate.getMinutes()}_${currentdate.getSeconds()}`
            html2canvas(screenshotRef.current, {
                scale: 2, // Increase the scale
                logging: true, // Enable logging for debugging
                dpi: 300, // Set a higher DPI
            }).then((canvas) => {
                // Convert the canvas to a data URL
                const screenshotDataUrl = canvas.toDataURL('image/png');
                // Create a download link
                const link = document.createElement('a');
                link.href = screenshotDataUrl;
                link.download = `bathroom_${timestamp}.png`;
                // Trigger a click event to download the screenshot
                link.click();
            });
        }
    };


    const generateAndDownloadPDF = async () => {
        // const canvas = await html2canvas(screenshotRef.current, {
        let screenshotDataUrl
        let currentdate = new Date();
        let timestamp = `${currentdate.getMinutes()}_${currentdate.getSeconds()}`;
        try {
            html2canvas(screenshotRef.current, {
                scale: 1, // Increase the scale
                logging: true, // Enable logging for debugging
                dpi: 300, // Set a higher DPI
            }).then((canvas) => {
                // Convert the canvas to a data URL
                screenshotDataUrl = canvas.toDataURL('image/png');

                // Define the content of the PDF document
                // Define the content of the PDF document
                const documentDefinition = {
                    content: [
                        'Hello, this is some text!',
                        { text: 'This is a subtitle', fontSize: 14 },
                        {
                            ul: [
                                'Item 1',
                                'Item 2',
                                'Item 3',
                            ],
                        },
                        {
                            columns: [
                                // // Column 1
                                // 'This is some additional text.',
                                // // Column 2 (with the image)
                                { image: screenshotDataUrl, width: 500 },
                            ],
                            // columnGap: 10, // Adjust the gap between columns as needed
                        },
                    ],
                };

                // Create the PDF
                const pdfDoc = pdfMake.createPdf(documentDefinition);

                // Download the PDF
                pdfDoc.download(`example_${timestamp}.pdf`);
            });
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };




    return (
        <div className=' flex items-center gap-3 '>
            <p className=' cursor-pointer select-none capitalize flex gap-1 items-center md:text-base' onClick={handleScreenshotClick}>
                <FiDownload /> save image
            </p>
            <Divider />
            <p className=' cursor-pointer select-none capitalize flex gap-1 items-center md:text-base' onClick={generateAndDownloadPDF}>
                <FaFileDownload /> save pdf
            </p>

        </div>
    )
}
export default SaveImage