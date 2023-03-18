

import { useForm } from 'react-hook-form'


type Props = {}

function Newsletter({ }: Props) {

    const onSubmit = (e: any) => {
        e.preventDefault()
        console.log(e.target.email.value)

    }


    return (
        <form onSubmit={onSubmit}>
            <div className="text-2xl">
                Déjanos tu email 📨 y te avisaremos cuando esté lista.👇🏽
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
        </form>
    )
}


export { Newsletter }