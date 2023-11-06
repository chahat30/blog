import multer from 'multer';
import path from 'path';    //library available in nodejs environment,no need to install 

const storage = multer.diskStorage({    //specifies where our files will be saved
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploadPicture = multer({
    storage: storage,
    limits: {
        fileSize: 1*1000000     //1MB
    },
    fileFilter: function (req, file, cb) {
        let ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
          return cb(new Error("Only images are allowed"));
        }
        cb(null, true);
      },
});

export {uploadPicture};