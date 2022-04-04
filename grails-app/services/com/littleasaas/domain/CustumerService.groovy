package com.littleasaas.domain

import grails.gorm.services.Service

@Service(Custumer)
interface CustumerService {

    Custumer get(Serializable id)

    List<Custumer> list(Map args)

    Long count()

    void delete(Serializable id)

    Custumer save(Custumer custumer)

}