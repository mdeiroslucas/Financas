package com.mdeiroslucas.backendjava.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mdeiroslucas.backendjava.model.Bank;

public interface BankRepository extends JpaRepository<Bank, Long>{
  
}
