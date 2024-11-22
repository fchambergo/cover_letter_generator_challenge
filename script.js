const PDFDocument = require("pdfkit");
const fs = require("fs");
const { parse } = require("csv-parse/sync");

// Read and parse the CSV file
const csvData = fs.readFileSync('csv/Revify_Sample_Leads.csv');
const records = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});

// Your name for the signature. Update this to your name.
const YOUR_NAME = "Frank Chambergo";

// Function to generate cover letter for a single record
function generateCoverLetter(record) {
    const doc = new PDFDocument();
    const fileName = `cover_letters/${record.company.replace(/[^a-z0-9]/gi, '_')}.pdf`;

    // Create output directory if it doesn't exist
    if (!fs.existsSync('cover_letters')) {
        fs.mkdirSync('cover_letters');
    }
    
    // Place the PDF into a file
    doc.pipe(fs.createWriteStream(fileName));  

    // Company Address Block
    doc.fontSize(12)
        .text(record.company)
        .text(record.address)
        .text(`${record.city}, ${record.state} ${record.zip}`)
        .moveDown();

    // Greeting
    doc.text(`Dear ${record.first_name} ${record.last_name},`)
        .moveDown();

    // Cover Letter Body
    const paragraphs = [
        `I am writing to express my strong interest in the Programmer position at ${record.company}. With a solid background in programming, I am excited about the opportunity to contribute to your team's success and further develop my career.`,
        `Throughout my academic and professional journey, I have honed my skills in JavaScript, which I believe aligns well with the requirements of the Programmer role.`,
        `What excites me most about ${record.company} is its reputation for solving complex business problems with technological solutions. I am inspired by your innovative approach, and I am eager to contribute my skills to help ${record.company} achieve its mission.`,
        `Thank you for considering my application. I look forward to the possibility of contributing to ${record.company}'s ongoing success.`
    ];

    // Add paragraphs with proper spacing
    paragraphs.forEach(paragraph => {
        doc.text(paragraph, {
            align: 'justify',
            lineGap: 10
        }).moveDown();
    });

    // Signature
    doc.text('Sincerely,')
        .moveDown()
        .text(YOUR_NAME);


    // Finalize the PDF
    doc.end();
}

// Generate cover letters for all records
records.forEach((record, index) => {
    generateCoverLetter(record);
    console.log(`Generated cover letter ${index + 1} of ${records.length} for ${record.company}`);
});
