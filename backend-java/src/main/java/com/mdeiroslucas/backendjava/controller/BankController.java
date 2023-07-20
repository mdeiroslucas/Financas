package com.mdeiroslucas.backendjava.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.mdeiroslucas.backendjava.dto.BankDTO;
import com.mdeiroslucas.backendjava.service.BankService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Validated
@RestController
@RequestMapping("/api/banks")
public class BankController {
  
  private final BankService bankService;

  public BankController(BankService bankService){
    this.bankService = bankService;
  }

  @GetMapping
  public List<BankDTO> findAll(){
    return bankService.findAll();
  }

  @PostMapping("/new")
  @ResponseStatus(code = HttpStatus.CREATED)
  public BankDTO create(@RequestBody @Valid BankDTO bankDTO){
    return bankService.create(bankDTO);
  }

  @GetMapping("/{id}")
  @ResponseStatus(code = HttpStatus.ACCEPTED)
  public BankDTO findById(@PathVariable Long id){
    return bankService.findById(id);
  }

  @PutMapping("/{id}")
  public BankDTO update(@PathVariable @Positive Long id, @RequestBody @Valid BankDTO bankDTO){
    return bankService.update(id, bankDTO);
  }

  @DeleteMapping("/{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delte(@PathVariable @NotNull @Positive Long id){
    bankService.delete(id);
  }


}
