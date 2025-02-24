import { useState, useRef } from 'react'

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

    const cred = useRef()
    const deb = useRef()

    function Abrir() {
        setConta({
            numConta: Math.floor(Math.random() * 1000),
            nomeAg: "AgBanco",
            numAg: Math.floor(Math.random() * 1000),
            nomeBanco: "BancoBR",
            numBanco: 1,
            tipo: 1,
            saldo: 0
        })


        alert("Conta aberta com sucesso!" + "\n\nNúmero da conta: " + conta.numConta + "\nNome Agência: " + conta.nomeAg + "\nNum Agência: " + conta.numAg + "\nNome banco: " + conta.nomeBanco + "\nNum Banco: " + conta.numBanco + "\nTipo: " + conta.tipo + "\nSaldo: " + conta.saldo)
    }

    function Encerrar() {

        if (conta.saldo >= 0) {

            setConta(prevState => ({
                ...prevState,
                tipo: 4,
                saldo: 0,
                prevSaldo: prevState.saldo
            }))
        }


        alert("Conta encerrada com sucesso!" + "\n\nNúmero da conta: " + conta.numConta + "\nNome Agência: " + conta.nomeAg + "\nNum Agência: " + conta.numAg + "\nNome banco: " + conta.nomeBanco + "\nNum Banco: " + conta.numBanco + "\nTipo: " + conta.tipo + "\nSaldo: " + conta.saldo + "\nSaldo anterior: " + conta.prevSaldo)
    }

    function ConsultarSaldo() {
        alert("Consultar saldo" + "\n\nSaldo da conta: " + conta.saldo)

    }

    function Creditar() {
        if (conta.tipo != 4) {

            const credito = cred.current.value
            let totalSaldo = parseFloat(credito) + parseFloat(conta.saldo)

            setConta(prevState => ({
                ...prevState,
                saldo: totalSaldo
            }))

            alert("Você creditou: " + credito + "\nSaldo atual: " + totalSaldo)
        }

    }

    function Debitar() {
        if (conta.tipo != 4) {
            const debit = deb.current.value
            let totalSaldo = parseFloat(conta.saldo) - parseFloat(debit)


            setConta(prevState => ({
                ...prevState,
                saldo: totalSaldo
            }))

            alert("Você debitou: " + debit + "\nSaldo atual: " + totalSaldo)
        }

    }
    return (<>
        <div>
            <h1>Bem vindo ao banco!</h1>
        </div>
        <div>
            <h2>Abrir conta bancária</h2>
            <button onClick={Abrir}>Abrir Conta</button>

        </div>
        <div>
            <h2>Encerrar conta bancária</h2>
            <button onClick={Encerrar}>Encerrar Conta</button>

        </div>
        <div>
            <h2>Consultar saldo atual </h2>
            <button onClick={ConsultarSaldo}>Consultar Saldo</button>

        </div>
        <div>
            <h2>Creditar na conta</h2>
            <input type='number' ref={cred}></input><br /><br />
            <button onClick={Creditar}>Creditar</button>

        </div>
        <div>
            <h2>Debitar da conta</h2>
            <input type='number' ref={deb}></input><br /><br />
            <button onClick={Debitar}>Debitar</button>

        </div>
    </>
    )
}



export default Bank

