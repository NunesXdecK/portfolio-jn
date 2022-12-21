import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    success: boolean
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const mailToMeData = {
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: process.env.NEXT_PRIVATE_EMAIL,
        subject: "Enviaram mensagem para mim",
        text: req.body.message,
        html: `
            <div>
                Nome: ${req.body.name}<br />
                E-mail: ${req.body.email}<br />
                Telefone: ${req.body.telephone}<br />
                Mensagem: ${req.body.message}<br />
            </div>`
    }
    const mailToPersonData = {
        from: process.env.NEXT_PUBLIC_EMAIL,
        to: req.body.email,
        subject: "Obrigado pela mensagem",
        text: req.body.message,
        html: `
            <div>
                Obrigado, eu recebi sua mensagem e seus dados de contato. Logo mais entrarei em contato.
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                Att 
                <br/>
                José Neto
            </div>`
    }

    let nodemailer = require("nodemailer")
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_PASSWORD,
        },
        secure: true,
    })
    transporter.sendMail(mailToMeData, (err: any, info: any) => {
        if (err) {
            console.error(err)
        }
    })
    transporter.sendMail(mailToPersonData, (err: any, info: any) => {
        if (err) {
            console.error(err)
        }
    })
    /*
    */
    res.status(200).json({ success: true })
}
