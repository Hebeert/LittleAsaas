package com.littleasaas.domain

class Customer {
    Integer cpfCnpj
    String name
    String andress
    String city
    String email
    String state
    Integer postalCode
    Date birthDate
    Integer age
    String gender
    Integer phone

    static constraints = {
    gender inList:["M","F"]

    }
}
