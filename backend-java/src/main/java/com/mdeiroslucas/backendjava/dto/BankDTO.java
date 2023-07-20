package com.mdeiroslucas.backendjava.dto;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;

public record BankDTO(
  
  @JsonProperty("_id")
  Long id,

  @NotNull
  @Length(min= 5, max = 20)
  String name,
  
  @NotNull
  @Digits(fraction = 0, integer = 3,  message="O valor deve ter exatamente 3 dígitos")
  Integer bankCode
) {
  
}
