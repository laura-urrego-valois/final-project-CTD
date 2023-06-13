package com.digital.DigitaBooking.services;


import com.digital.DigitaBooking.models.dtos.ImageDTO;

import java.util.Set;

public interface IImageService {

    void saveImage(ImageDTO imageDTO);

    ImageDTO getImage(Long id);

    void updateImage(Long id, ImageDTO imageDTO);

    void deleteImage(Long id);

    Set<ImageDTO> getImages();
}
