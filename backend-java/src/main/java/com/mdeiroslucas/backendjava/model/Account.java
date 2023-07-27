package com.mdeiroslucas.backendjava.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Account {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonProperty("_id")
  private Long id;

  @Column(nullable = false, length = 5)
  private Integer Agency;

  @Column(nullable = false, length = 1)
  private Integer DAC;

  @Column(nullable = false)
  private Integer accountNumber;

  @Column(nullable = false, length = 2)
  private String accountType;

  @Column(nullable = false)
  private Bank bankCode;
}
