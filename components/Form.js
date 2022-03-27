import Link from './Link'
import React from 'react'
import ReactDOM from 'react-dom'
import Notification from '@/components/Notification'

export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      phone: '',
    }
  }

  // handleInputChanged(event) {
  //   this.setState({
  //     searchQuery: event.target.value
  //   });
  // }

  handleButtonClicked() {
    event.preventDefault()
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'https://forms-api.op-onai.kz', true)
    xhr.addEventListener('error', (event) => {
      ReactDOM.render(
        <Notification
          status="error"
          text="Извините, вышла ошибка сервера. Пишите нам по +7-(747)-421-72-51"
        />,
        document.getElementById('form-notification')
      )
      return 0
    })
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onreadystatechange = function () {
      // Call a function when the state changes.
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        ReactDOM.render(
          <Notification
            status="success"
            text="Мы получили вашу заявку, ждите сообщения в WhatsApp!"
          />,
          document.getElementById('form-notification')
        )
      } else {
        ReactDOM.render(
          <Notification
            status="error"
            text="Извините, вышла ошибка сервера. Пишите нам по +7-(747)-421-72-51"
          />,
          document.getElementById('form-notification')
        )
      }
    }

    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    }

    const validatePhone = (phone) => {
      return String(phone)
        .toLowerCase()
        .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im) // eslint-disable-line
    }

    var name = event.target.name.value
    var email = event.target.email.value.toLowerCase()
    var phone = event.target.phone.value
    if (!validateEmail(email)) {
      ReactDOM.render(
        <Notification status="error" text="Неверная Почта, пожалуйста, перепроверьте адрес." />,
        document.getElementById('form-notification')
      )
    } else if (!validatePhone(phone)) {
      ReactDOM.render(
        <Notification status="error" text="Неверный Номер, формат должен быть +7 777 123 12 12." />,
        document.getElementById('form-notification')
      )
    } else if (name.length < 1) {
      ReactDOM.render(
        <Notification status="error" text="Пожалуйта, введите имя." />,
        document.getElementById('form-notification')
      )
    } else {
      xhr.send(`{
    "name": "${name}",
    "email": "${email}",
    "phone": "${phone}"
  }`)
    }
  }

  render() {
    return (
      <div className="rounded-xl bg-gray-100 dark:bg-gray-800">
        <div id="form-notification"></div>
        <div className="px-6 py-6  md:py-12 md:px-12 lg:px-16 xl:flex xl:items-center ">
          <div className="pb-4 sm:pb-8 xl:w-0 xl:flex-1 ">
            <h2 className="text-xl font-extrabold leading-8 tracking-tight sm:text-3xl sm:leading-9">
              Записаться на курс
            </h2>
            <p className="text-md mt-3 lg:pr-4">
              Если у вас есть вопросы о нашей методике обучения или хотите получить совета, оставьте
              вашу почту и номер. Мы ответим вам по WhatsApp в течение часа.
            </p>
          </div>
          <div
            id="form"
            className="mx-auto flex w-full max-w-md flex-col px-4 sm:px-6 md:px-8 lg:px-10"
          >
            <div className="mt-4">
              <form onSubmit={this.handleButtonClicked.bind(this)} autoComplete="off">
                <div className="mb-2 flex flex-col">
                  <div className="relative flex ">
                    <span className="inline-flex items-center  rounded-l-md border-t border-l border-b border-gray-300 bg-white  px-3 text-sm text-gray-500 shadow-sm">
                      <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className=" w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Ваша почта"
                    />
                  </div>
                </div>
                <div className="mb-2 flex flex-col">
                  <div className="relative flex ">
                    <span className="inline-flex items-center  rounded-l-md border-t border-l border-b border-gray-300 bg-white  px-3 text-sm text-gray-500 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className=" w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="+7 777 123 12 12"
                    />
                  </div>
                </div>
                <div className="mb-6 flex flex-col">
                  <div className="relative flex ">
                    <span className="inline-flex items-center  rounded-l-md border-t border-l border-b border-gray-300 bg-white  px-3 text-sm text-gray-500 shadow-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className=" w-full flex-1 appearance-none rounded-r-lg border border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-600"
                      placeholder="Ваше Имя"
                    />
                  </div>
                </div>
                <div className="flex w-full">
                  <button
                    type="submit"
                    className="w-full rounded-lg  bg-primary-600 py-2 px-4 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2  focus:ring-offset-primary-200 "
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
