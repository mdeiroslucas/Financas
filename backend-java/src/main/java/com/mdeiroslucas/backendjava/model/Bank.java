package com.mdeiroslucas.backendjava.model;


import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
public class Bank {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonProperty("_id")
  private Long id;

  @Column(length = 20)
  @NotNull
  @Length(min = 5, max = 20)
  private String name;

  @NotNull
  @Digits(fraction = 0, integer=3, message="O valor deve ter exatamente 3 dígitos")
  @Column(length = 4)
  private Integer bankCode;

}
