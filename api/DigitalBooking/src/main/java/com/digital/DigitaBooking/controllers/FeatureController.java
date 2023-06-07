package com.digital.DigitaBooking.controllers;

import com.digital.DigitaBooking.models.dtos.FeatureDTO;
import com.digital.DigitaBooking.services.impl.FeatureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/feature")
public class FeatureController {

    @Autowired
    private FeatureService featureService;

    @PostMapping
    public ResponseEntity<?> saveFeature(@RequestBody FeatureDTO featureDTO) {

        featureService.saveFeature(featureDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/{id}")
    public FeatureDTO getFeature(@PathVariable Long id) {

        return featureService.getFeature(id);
    }

    @GetMapping
    public Collection<FeatureDTO> getFeatures() {

        return featureService.getFeatures();
    }

    @PutMapping(path = "/{id}")
    public ResponseEntity<?> updateFeature(@PathVariable Long id, @RequestBody FeatureDTO featureDTO) {

        featureService.updateFeature(id, featureDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(path = "/{id}")
    public ResponseEntity<?> deleteFeature(@PathVariable Long id) {

        featureService.deleteFeature(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
