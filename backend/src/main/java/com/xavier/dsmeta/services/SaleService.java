package com.xavier.dsmeta.services;

import com.xavier.dsmeta.entities.Sale;
import org.springframework.beans.factory.annotation.Autowired;
import com.xavier.dsmeta.repositories.SaleRepository;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class SaleService {
    @Autowired
    private SaleRepository repository;

    public List<Sale> findSales(){
        return repository.findAll();
    }
}
