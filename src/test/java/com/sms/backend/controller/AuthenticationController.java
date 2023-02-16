package com.sms.backend.controller;

import com.sms.backend.altro.DTO.Registration;
import com.sms.backend.altro.DTO.Response;
import com.sms.backend.model.Utente;
import com.sms.backend.service.AuthenticationService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/authentication")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    private AuthenticationService authenticationService;

    @GetMapping("/signin")
    public ResponseEntity<Object> authenticateUtente(@RequestParam String email, @RequestParam String password) {
        try {
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            Utente utente = authenticationService.getDetails(email);
            return new ResponseEntity<>(new Response(HttpStatus.OK.value(), "Signed-in successfully", true, utente), HttpStatus.OK);
        }
        catch(Exception exception){
            return new ResponseEntity<>(new Response(HttpStatus.NOT_FOUND.value(), "Signed-in failed", false, null), HttpStatus.OK);
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<Object> register(@RequestBody Registration registration){
        Utente utente = authenticationService.signup(registration);
        if(utente != null){
            return new ResponseEntity<>(new Response(HttpStatus.OK.value(), "User registered", true, utente), HttpStatus.OK);
        }
        return new ResponseEntity<>(new Response(HttpStatus.NOT_FOUND.value(), "User NOT registered", false, null), HttpStatus.OK);
    }
}
