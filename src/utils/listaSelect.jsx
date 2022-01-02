const situacaoLista = [
  { id: 1, name: 'Finalizado' },
  { id: 2, name: 'Andamento' },
  { id: 3, name: 'Análise' }
]

export function getSelect() {
  return situacaoLista.map(item => {
    return <option key={item.id}> {item.name} </option>
  })
}
