package com.littleasaas.domain

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import spock.lang.Specification
import org.hibernate.SessionFactory

@Integration
@Rollback
class CustumerServiceSpec extends Specification {

    CustumerService custumerService
    SessionFactory sessionFactory

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Custumer(...).save(flush: true, failOnError: true)
        //new Custumer(...).save(flush: true, failOnError: true)
        //Custumer custumer = new Custumer(...).save(flush: true, failOnError: true)
        //new Custumer(...).save(flush: true, failOnError: true)
        //new Custumer(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //custumer.id
    }

    void "test get"() {
        setupData()

        expect:
        custumerService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Custumer> custumerList = custumerService.list(max: 2, offset: 2)

        then:
        custumerList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        custumerService.count() == 5
    }

    void "test delete"() {
        Long custumerId = setupData()

        expect:
        custumerService.count() == 5

        when:
        custumerService.delete(custumerId)
        sessionFactory.currentSession.flush()

        then:
        custumerService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Custumer custumer = new Custumer()
        custumerService.save(custumer)

        then:
        custumer.id != null
    }
}
