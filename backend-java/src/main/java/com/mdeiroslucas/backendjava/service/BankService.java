package com.mdeiroslucas.backendjava.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import com.mdeiroslucas.backendjava.dto.BankDTO;
import com.mdeiroslucas.backendjava.dto.mapper.BankMapper;
import com.mdeiroslucas.backendjava.excecoes.RecordNotFoundException;
import com.mdeiroslucas.backendjava.repository.BankRepository;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Service
@Validated
public class BankService {
  private final BankRepository bankRepository;
  private final BankMapper bankMapper;

  public BankService(
    BankRepository bankRepository, 
    BankMapper bankMapper
    ){
    this.bankRepository = bankRepository;
    this.bankMapper = bankMapper;
  }

  public BankDTO create(@NotNull @Valid BankDTO bankDTO){
    return bankMapper.toDTO(bankRepository.save(bankMapper.toModel(bankDTO)));
  }

  public List<BankDTO> findAll(){
    return bankRepository.findAll().stream().map(bankMapper::toDTO).toList();
  }

  public BankDTO findById(@NotNull @Positive Long id){
    return bankRepository.findById(id).map(bankMapper::toDTO).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public BankDTO update(@NotNull @Positive Long id, @Valid BankDTO bankDTO){
    return bankRepository.findById(id)
      .map(bankFound -> {
      bankFound.setName(bankDTO.name());
      bankFound.setBankCode(bankDTO.bankCode());
      return bankMapper.toDTO(bankRepository.save(bankFound));
    }).orElseThrow(() -> new RecordNotFoundException(id));
  }

  public void delete(@NotNull @Positive Long id){
    bankRepository.deleteById(id);
  }
}
