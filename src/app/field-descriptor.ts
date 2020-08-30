export interface FieldDescriptor {
  "fieldName": string, //key-navn i det endelige object
  "fieldStart": string, //streng der fremkommer umiddelbart inden det ønskede data
  "fieldOccurrence": number, //int der beskriver om hvilken forekomst af fieldstart der kigges efter (1 indexeret)
  "fieldNumberOfOccurrences": number, //hvormange gange det forventes at "fieldStart" fremkommer i den samlede tekststreng
  "fieldEnd": string, //streng der fremkommer umiddelbart efter det ønskede data
  "fieldEndOccurrence": number, //int der beskriver om hvilken forekomst af fieldEnd der kigges efter (1 indexeret)
  "fieldEndNumberOfOccurrences": number //hvormange gange det forventes at "fieldEnd" fremkommer i den samlede tekststreng
}
