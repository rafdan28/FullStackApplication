package com.sms.backend.service;

import com.sms.backend.altro.DTO.Response;
import com.sms.backend.altro.exception.ResourceNotFoundException;
import com.sms.backend.altro.exception.UserAlreadyExist;
import com.sms.backend.model.Utente;
import com.sms.backend.repository.UtenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class UtenteServiceImplementation implements UtenteService, UserDetailsService {
    @Autowired
    private UtenteRepository utenteRepository;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    public UtenteServiceImplementation(UtenteRepository utenteRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.utenteRepository = utenteRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        if(!utenteRepository.existsById(email)){
            throw new UsernameNotFoundException(String.format("User with email: %s, not found", email));
        }
        return utenteRepository.findUtenteByEmail(email);
    }
    @Override
    public Utente getUtenteByEmail(String email) throws UsernameNotFoundException {
        if(!utenteRepository.existsById(email)){
            throw new UsernameNotFoundException(String.format("User with email: %s, not found", email));
        }
        return utenteRepository.findUtenteByEmail(email);
    }

    @Override
    public Utente salvaUtente(Utente utente) {
        if(utenteRepository.existsById(utente.getEmail())){
            throw new UserAlreadyExist(utente.getEmail());
//            return new ResponseEntity<>(new Response(HttpStatus.NOT_FOUND.value(), String.format("User with email: %s, already exist!!",utente.getEmail()), HttpStatus.OK));
        }

        String encodedPassword = bCryptPasswordEncoder.encode(utente.getPassword());
        utente.setPassword(encodedPassword);

        return utenteRepository.save(utente);
    }

    @Override
    public Utente updateUtente(Utente utente, String email) {
        Utente oldUtente = utenteRepository.findById(email).orElseThrow(() -> new ResourceNotFoundException("Utente", "email", email));
        oldUtente.setNome(utente.getNome());
        oldUtente.setCognome(utente.getCognome());
        oldUtente.setEmail(utente.getEmail());
        oldUtente.setAdmin(utente.isAdmin());
        oldUtente.setRapporto(utente.getRapporto());
        String encodedPassword = bCryptPasswordEncoder.encode(utente.getPassword());
        oldUtente.setPassword(encodedPassword);
        utenteRepository.save(oldUtente);
        return oldUtente;
    }

    @Override
    public void deleteUtente(String email) {
        utenteRepository.findById(email).orElseThrow(() -> new ResourceNotFoundException("Utente", "email", email));
        utenteRepository.deleteById(email);
    }

    @Override
    public List<Utente> getAllUtenti() {
        return utenteRepository.findAll();
    }

}
