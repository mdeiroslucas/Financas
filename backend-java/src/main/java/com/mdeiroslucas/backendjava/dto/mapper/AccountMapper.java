package com.mdeiroslucas.backendjava.dto.mapper;

import com.mdeiroslucas.backendjava.dto.AccountDTO;
import com.mdeiroslucas.backendjava.model.Account;

public class AccountMapper {
    public AccountDTO toDto(Account account) {
        if (account == null) {
            return null;
        } 
        return new AccountDTO(
            account.getId(), 
            account.getAgency(), 
            account.getDac(),
            account.getAccountNumber(),
            account.getAccountType(),
            account.getBank()
            );
    }

    public Account toEntity(AccountDTO accountDTO) {
        if (accountDTO == null) {
            return null;
        }
       Account account = new Account();

       if (accountDTO.id() != null) {
        account.setId(accountDTO.id());
       }
       account.setAgency(accountDTO.agency());
       account.setDac(accountDTO.dac());
       account.setAccountNumber(accountDTO.accountNumber());
       account.setAccountType(accountDTO.accountType());
       account.setBank(accountDTO.bank());

       return account;
    }
}
