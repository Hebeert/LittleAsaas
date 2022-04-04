package com.littleasaas.domain

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class CustumerController {

    CustumerService custumerService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond custumerService.list(params), model:[custumerCount: custumerService.count()]
    }

    def show(Long id) {
        respond custumerService.get(id)
    }

    def create() {
        respond new Custumer(params)
    }

    def save(Custumer custumer) {
        if (custumer == null) {
            notFound()
            return
        }

        try {
            custumerService.save(custumer)
        } catch (ValidationException e) {
            respond custumer.errors, view:'create'
            return
        }

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'custumer.label', default: 'Custumer'), custumer.id])
                redirect custumer
            }
            '*' { respond custumer, [status: CREATED] }
        }
    }

    def edit(Long id) {
        respond custumerService.get(id)
    }

    def update(Custumer custumer) {
        if (custumer == null) {
            notFound()
            return
        }

        try {
            custumerService.save(custumer)
        } catch (ValidationException e) {
            respond custumer.errors, view:'edit'
            return
        }

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'custumer.label', default: 'Custumer'), custumer.id])
                redirect custumer
            }
            '*'{ respond custumer, [status: OK] }
        }
    }

    def delete(Long id) {
        if (id == null) {
            notFound()
            return
        }

        custumerService.delete(id)

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'custumer.label', default: 'Custumer'), id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'custumer.label', default: 'Custumer'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
