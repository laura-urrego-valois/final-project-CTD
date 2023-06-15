package com.digital.DigitaBooking.services;


import com.digital.DigitaBooking.models.dtos.ImageCategoryDTO;

import java.util.Set;

public interface IImageCategoryService {

    void saveImageCategory(ImageCategoryDTO imageCategoryDTO);

    ImageCategoryDTO getImageCategory(Integer id);

    void updateImageCategory(Integer id, ImageCategoryDTO imageCategoryDTO);

    void deleteImageCategory(Integer id);

    Set<ImageCategoryDTO> getImagesCategory();
}
