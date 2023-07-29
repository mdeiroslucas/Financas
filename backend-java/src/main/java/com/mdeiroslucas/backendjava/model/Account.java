package com.mdeiroslucas.backendjava.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
public class Account {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @JsonProperty("_id")
  private Long id;

  @NotNull
  @Column(nullable = false, length = 5)
  private Integer agency;

  @NotNull
  @Column(nullable = false, length = 1)
  private Integer dac;

  @NotNull
  @Column(nullable = false)
  private Integer accountNumber;

  @NotNull
  @Column(nullable = false, length = 2)
  private String accountType;

  @NotNull
  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "Bank_id", nullable = false)
  private Bank bank;
  
}
