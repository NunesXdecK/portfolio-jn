import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    success: boolean
}

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL,
        pass: process.env.NEXT_PUBLIC_PASSWORD,
    },
    secure: true,
    secureConnection: true,
})

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    let resu = true
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
    try {
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailToMeData, (err: any, info: any) => {
                if (info) {
                    console.log(info)
                }
                if (err) {
                    console.log(err)
                }
            })
            transporter.sendMail(mailToPersonData, (err: any, info: any) => {
                if (info) {
                    console.log(info)
                }
                if (err) {
                    console.log(err)
                }
            })
        })
        /*
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailToMeData, (err: any, info: any) => {
                if (info) {
                    console.log(info)
                }
                if (err) {
                    console.log(err)
                }
            })
            resolve(null)
        })
        await new Promise((resolve, reject) => {
            transporter.sendMail(mailToPersonData, (err: any, info: any) => {
                if (info) {
                    console.log(info)
                }
                if (err) {
                    console.log(err)
                }
            })
            resolve(null)
        })
        */
    } catch (err) {
        resu = false
        console.log(err)
    }
    res.status(200).json({ success: true })
}
