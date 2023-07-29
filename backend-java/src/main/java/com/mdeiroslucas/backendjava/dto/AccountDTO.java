package com.mdeiroslucas.backendjava.dto;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.mdeiroslucas.backendjava.model.Bank;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotNull;

public record AccountDTO(
    @JsonProperty("_id")
    Long id,

    @NotNull
    @Digits(integer = 5, fraction = 0)
    Integer agency,

    @NotNull
    @Digits(integer = 1, fraction = 0)
    Integer dac,

    @NotNull
    @Digits(integer = 5, fraction = 0)
    Integer accountNumber,

    @NotNull
    @Length(min = 2, max = 2)
    String accountType,

    @NotNull
    Bank bank
) {
    


}
