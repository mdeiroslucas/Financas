package com.mdeiroslucas.backendjava.dto.mapper;

import org.springframework.stereotype.Component;

import com.mdeiroslucas.backendjava.dto.BankDTO;
import com.mdeiroslucas.backendjava.model.Bank;

@Component
public class BankMapper {
  public BankDTO toDTO(Bank bank) {
    return new BankDTO(bank.getId(), bank.getName(), bank.getBankCode());
  }

  public Bank toModel(BankDTO bankDTO) {
    if (bankDTO == null) {
      return null;
    }
    
    Bank bank = new Bank();
    
    if (bankDTO.id() != null) {
      bank.setId(bankDTO.id());
    }
    bank.setName(bankDTO.name());
    bank.setBankCode(bankDTO.bankCode());
    return bank;
  }
}
