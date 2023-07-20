package com.mdeiroslucas.backendjava.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.mdeiroslucas.backendjava.excecoes.RecordNotFoundException;

@RestControllerAdvice
public class ApplicationControllerAdvice  {

  @ExceptionHandler(RecordNotFoundException.class)  
  @ResponseStatus(HttpStatus.NOT_FOUND)
  public String handleRecordNotFoundException(RecordNotFoundException exception) {
    return exception.getMessage();
  }  
}

