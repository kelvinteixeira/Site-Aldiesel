export type CostumerItems = {
  id: number,
  name: string,
  phone: string,
  street: string,
  houseNumber: string,
  district: string,
  city: string,
  state: string,
  entryDate?: string
  costumerState?: string
}

export type CarItems = {
  id: number,
  model: string,
  licensePlate: string,
  year: string,
  color: string
  problem: string
  idCostumer: number,
  entryDate: string
}

export type ServiceOrderItems = {
  id: number,
  situation: string,
  diagnosis: string,
  changeDate: string,
  mechanic: string,
  idCar: number
}

export type DtcItems = {
  id: number,
  code: string,
  dtc: string,
  dtcState: string
  idServiceOrder: number,
  actions: string
}

export type FormActions = {
  setSubmitting: (props: boolean) => void
  resetForm: () => void
}