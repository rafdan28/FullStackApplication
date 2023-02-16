package com.sms.backend.controller;

import com.sms.backend.altro.DTO.Response;
import com.sms.backend.model.Utente;
import com.sms.backend.service.UtenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/utente")
public class UtenteController {
    @Autowired
    private UtenteService utenteService;
    @GetMapping("/utenteByEmail/{email}")
    public ResponseEntity<Object> getUtenteByEmail(@PathVariable("email") String email){
        Utente utente = utenteService.getUtenteByEmail(email);
        if(utente != null){
            return new ResponseEntity<>(new Response(HttpStatus.OK.value(), "User found", true, utente), HttpStatus.OK);
        }
        return new ResponseEntity<>(new Response(HttpStatus.NOT_FOUND.value(), "User NOT found", false, null), HttpStatus.OK);
//        return new ResponseEntity<>(utenteService.loadUserByUsername(email), HttpStatus.OK);
    }
    @PutMapping("/updateUtente/{email}")
    public ResponseEntity<Utente> updateUtente(@PathVariable("email") String email, @RequestBody Utente utente){
        return new ResponseEntity<>(utenteService.updateUtente(utente, email), HttpStatus.OK);
    }

    @DeleteMapping("/deleteUtente/{email}")
    public ResponseEntity<Object> deleteUtente(@PathVariable("email") String email){
        utenteService.deleteUtente(email);
        return new ResponseEntity<>(new Response(HttpStatus.OK.value(), "Utente delete successfully!", true, null), HttpStatus.OK);
    }

    @GetMapping("/allutenti")
    public List<Utente> getAllUtenti() {
        return utenteService.getAllUtenti();
    }
}
