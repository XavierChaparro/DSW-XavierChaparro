const questions = [
    {
        question: "¿Que es la etiqueta Head?",
        type: "select",
        key: "head",
        options: [
            {
                ask: "<style>",
                value: 'style'
            },
            {
                ask: "<link>",
                value: "link"
            },
            {
                ask: "etc...",
                value: "etc"
            }
        ]
    },
    {
        question: "¿Qué etiqueta se usa para escribir un párrafo de texto?",
        type: "select",
        key: "text",
        options: [
            {
                ask: "<ptext>texto</ptext>",
                value: 'ptext'
            },
            {
                ask: "<paragraph>texto</paragraph>",
                value: "paragraph"
            },
            {
                ask: "<br>texto</br>",
                value: "br"
            },
            {
                ask: "<p>texto</p>",
                value: "p"
            }
        ]
    },
    {
        question: "¿Cómo se crea un enlace correctamente?",
        type: "select",
        key: "links",
        options: [
            {
                ask: "<link url='http://www.unad.com'>Web unad</link>",
                value: 'link'
            },
            {
                ask: "<a href='http://www.unad.com'>Web Unad</a>",
                value: "a"
            },
            {
                ask: "<a>http://www.unad.com</a>",
                value: "as"
            },
            {
                ask: "<a url='http://www.unad.com'>Web Unad</a>",
                value: "ass"
            },
        ]
    },
    {
        question: "¿Qué significan las siglas HTML?",
        type: "select",
        key: "html",
        options: [
            {
                ask: "Hyper Tag Mailup Language",
                value: 'hyper'
            },
            {
                ask: "Hyper Text Markup Language",
                value: "Hyper_text"
            },
            {
                ask: "Hyper Tag Media Language",
                value: "Hyper_tag"
            },
            {
                ask: "Hyperlink Text Media Language",
                value: "Hyper_media"
            }
        ]
    },
    {
        question: "¿Cómo se escribe un comentario en HTML?",
        type: "select",
        key: "comment",
        options: [
            {
                ask: "/* mi comentario */",
                value: 'commenct'
            },
            {
                ask: "<!-- mi comentario -->",
                value: "comment"
            },
            {
                ask: "-- mi comentario",
                value: "my_comment"
            },
            {
                ask: "// mi comentario",
                value: "other"
            }
        ]
    },
];
const App = () => {
    const [ asks, setAsks ] = React.useState({});
    const makeValidations = ( key, value ) => {
        asks[ key ] = value;
        setAsks({
            ...asks
        });
    }
    const handleClick = () => {
        alert('Gracias por responder!!!');
    }
    return (
        <div className = "FormQuestion_container">
            {
                questions.map((element) => {
                    return (
                        <div className = "FormSection" key = {`formSection${element.key}`}>
                            <label>
                                { element.question }
                            </label>
                            {
                                element.type === 'select' ? (
                                    <select
                                        value = { asks[ element.key ] && asks[ element.key ] !== '' ? asks[ element.key ] : 'select' }
                                        onChange = {
                                            (e) => makeValidations( element.key, e.target.value )
                                        }
                                    >
                                        <option value = "select">
                                            Seleccionar
                                        </option>
                                        {
                                            element.options.map((option, index) => {
                                                return (
                                                    <option key = { `option_${index}_${element.key}` } value = { option.value }>
                                                        { option.ask }
                                                    </option>
                                                )
                                            })
                                        }
                                    </select>
                                ) : (
                                    <input
                                        type = { element.type }
                                        onChange = {
                                            (e) => makeValidations( element.key, e.target.value )
                                        }
                                        placeholder = { element.placeholder }
                                    />
                                )
                            }
                        </div>
                    )
                })
            }
            {
                Object.keys( asks ).length === questions.length ? (
                    <button onClick = { handleClick }>
                        Enviar
                    </button>
                ) : (
                    <div></div>
                ) 
            }
        </div>
    )
}
ReactDOM.render( <App />, document.getElementById('FormQuestions') )