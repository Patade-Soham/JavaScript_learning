const express = require('express');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const PDFMerger = require('pdf-merger-js');

const app = express();
const port = 3000;

/* -----------------------------
   Ensure uploads folder exists
------------------------------*/
const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

/* -----------------------------
   Multer Config
------------------------------*/
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + "-" + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        if (file.mimetype !== "application/pdf") {
            return cb(new Error("Only PDF files are allowed"));
        }
        cb(null, true);
    }
});

/* -----------------------------
   Serve Static Files
------------------------------*/
app.use(express.static(path.join(__dirname, 'templates')));

/* -----------------------------
   Routes
------------------------------*/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.post('/merge', upload.array('pdfs', 20), async (req, res) => {

    if (!req.files || req.files.length < 2) {
        return res.status(400).send("Please upload at least 2 PDF files.");
    }

    const merger = new PDFMerger();

    try {

        // Add files in selected order
        for (let file of req.files) {
            await merger.add(file.path);
        }

        const mergedFilePath = path.join(uploadDir, `merged-${Date.now()}.pdf`);
        await merger.save(mergedFilePath);

        // Delete original uploaded files
        req.files.forEach(file => {
            fs.unlinkSync(file.path);
        });

        // Send merged file for download
        res.download(mergedFilePath, "merged.pdf", () => {
            fs.unlinkSync(mergedFilePath);
        });

    } catch (error) {
        console.error(error);

        // Cleanup if error
        if (req.files) {
            req.files.forEach(file => {
                if (fs.existsSync(file.path)) {
                    fs.unlinkSync(file.path);
                }
            });
        }

        res.status(500).send("Something went wrong while merging PDFs.");
    }
});

/* -----------------------------
   Start Server
------------------------------*/
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
