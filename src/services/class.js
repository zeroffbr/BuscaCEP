import React  from 'react'
import axios from 'axios'
const baseUrl =   'https://indicadores.integrasus.saude.ce.gov.br/api/coronavirus'

export default function useCovid(){
  this.state = {
      //defauilt value of the date time
      date: '',
  };
  var that = this;
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year

  return{
   getMunicipios(){
      return axios.get(
        `${baseUrl}/qtd-por-municipio?tipo=Óbito&data=${year}-${month}-${date}`,
      )
    },
  }
}