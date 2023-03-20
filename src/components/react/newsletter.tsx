

import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


type Props = {}
const url = "https://connect.mailerlite.com/api/subscribers"
function Newsletter({ }: Props) {

    const [subscribed, setSubscribed] = useState(false)

    useEffect(() => {
        const isSubscribed = localStorage.getItem('subscribed')
        setSubscribed(isSubscribed === 'true')
    })

    const onSubmit = (e: any) => {
        e.preventDefault()
        const email = e.target.email.value
        const data = {
            email,
            fields: {
                name: email
            },
            groups: [
                "83046576296035907"
            ]
        }
        // fetch(url,
        //     {
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         method: "POST",
        //         body: JSON.stringify(data)
        //     })
        //     .then(function (res) { console.log(res) })
        //     .catch(function (res) { console.log(res) })

        setSubscribed(true)
        localStorage.setItem('subscribed', 'true')
    }

    if (subscribed) {
        return <span className='text-xl text-center'>¡Gracias por unirte a Hamaka! 😊 Te avisaremos por email de todo lo que estamos preparando para ti.</span>
    }

    return (
        <form onSubmit={onSubmit}>

            <div className="text-2xl align-middle">
                Déjanos tu email y te avisaremos cuando esté lista
            </div>
            <div className="flex gap-4 my-4">
                <div className="flex-1 ">
                    <input
                        type="email"
                        id="emai"
                        name='email'
                        className="mt-1 focus:ring-primary f☺ocus:border-primary block shadow-sm sm:text-sm border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-700 mx-auto px-8 py-4 text-4xl w-full"
                        placeholder="¿Listo para aprender? 😎  Escribe tu email aquí" required />


                </div>
                <div className="w-fit min-w-fit" >
                    <button
                        className="px-8 py-4 font-bold text-white rounded-full bg-primary hover:bg-primary/80 focus:outline-none focus:ring-primary-100 dark:focus:ring-primary-900 focus:ring disabled:bg-primary/60 disabled:cursor-not-allowed"
                        type="submit"

                    >¡Apúntate ya!</button>
                </div>
            </div>
        </form >
    )
}


export { Newsletter }