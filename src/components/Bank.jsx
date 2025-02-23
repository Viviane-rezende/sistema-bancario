import { useState } from 'react'

function Bank() {
    const [conta, setConta] = useState({
        numConta: "",
        nomeAg: "",
        numAg: "",
        nomeBanco: "",
        numBanco: "",
        tipo: "",
        saldo: 0
    })

    const [Op, setOp] = useState("")

    function Abrir(props) {
        setConta({
            numConta: Math.random(),
            nomeAg: "AgBanco",
            numAg: Math.random(),
            nomeBanco: "BancoBR",
            numBanco: 1,
            tipo: 1,
            saldo: 0
        })
        setOp("Conta aberta com sucesso!")
    }

    function Encerrar() {

    }

    function ConsultarSaldo() {

    }

    function Creditar() {

    }

    function Debitar() {

    }
    return (<div>
                <h3>Bem vindo ao banco!</h3>
            </div>
    <div>
        <h2>Abrir conta bancária</h2>
        <button>Abror Conta</button>
    </div>
    )
}



export default Bank

