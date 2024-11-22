# Cover Letter Generator

A Node.js script that automatically generates personalized PDF cover letters from CSV data using PDFKit.

## Purpose

This script takes the provided CSV file (located in the `csv` folder) containing company and contact information and generates individual PDF cover letters for each entry. 

The cover letter will be in the following format:
```
[Company Name]
[Address]
[City, State Zip]

Dear [Name],

I am writing to express my strong interest in the Programmer position at [Company Name]. With a solid background in programming, I am excited about the opportunity to contribute to your team's success and further develop my career.

Throughout my academic and professional journey, I have honed my skills in JavaScript, which I believe aligns well with the requirements of the Programmer role.

What excites me most about [Company Name] is its reputation for solving complex business problems with technological solutions. I am inspired by your innovative approach, and I am eager to contribute my skills to help [Company Name] achieve its mission.

Thank you for considering my application. I look forward to the possibility of contributing to [Company Name]'s ongoing success. 

Sincerely,

[Your Name]
```


It's useful for:
- Mass creating personalized cover letters
- Maintaining consistent formatting across multiple letters
- Automating the cover letter creation process

## Prerequisites

- Node.js installed on your system
- npm (Node Package Manager)

## Installation

1. Clone or download this repository
2. Install the required dependencies using the following command:
    ```bash
    npm install
    ```

Afterwards, the following dependencies will be installed:

- [PDFKit](https://pdfkit.org/): PDF generation library
- [csv-parse](https://csv.js.org/parse/): CSV parsing library

## Usage

1. Run the script using the following command:
    ```bash
    node script.js
    ```

The script will:
- Create a 'cover_letters' directory if it doesn't exist
- Generate individual PDF files for each company in your CSV
- Name each file based on the company name
- Display progress in the console

## Output

The script generates professional cover letters with:
- Company address block
- Personalized greeting
- Pre-formatted body paragraphs
- Professional signature
- Proper spacing and formatting

This is all part of the pre-formatted cover letter structure mentioned above.

Files are saved in the `cover_letters` directory with filenames based on the company name (sanitized for filesystem compatibility).