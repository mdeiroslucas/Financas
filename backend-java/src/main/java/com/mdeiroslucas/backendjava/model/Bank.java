package com.mdeiroslucas.backendjava.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
public class Bank {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @JsonProperty("_id")
  private Long id;

  @NotNull
  private String name;

  private Integer bankCode;
  
  @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, mappedBy = "bank")
  private List<Account> accounts = new ArrayList<Account>();
  
}
