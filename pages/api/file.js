import formidable from "formidable"
import fs from "fs";



export const config = {
    api: {
        bodyParser: false
    }
}

const post = async (req, res) => {
    const form = new formidable.IncomingForm()
    form.parse(req, async function (err, fields, files){
        await saveFile(files.file, res)
    })
}

const saveFile = async (file, res) => {
    if (fs.existsSync(`./public/${file.name}`))
        return res.status(400).json({ error: "File with this name already exists"})
    const data = fs.readFileSync(file.filepath)
    fs.writeFileSync(`./public/${file.originalFilename}`, data)
    fs.unlinkSync(file.filepath)
    return res.status(201).send("")
}


export default function (req, res) {
    post(req, res)
    // res.json({ yea: "oh yea bro" })
}