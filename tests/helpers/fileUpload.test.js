import { describe, test, expect } from '@jest/globals';
import {v2 as cloudinary} from 'cloudinary';
import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({
    cloud_name: 'dsbjzd18p',
    api_key: '726384964284895',
    api_secret: 'rU6DOnzPb4EyjWlaFuHixNNDAWE',
    secure: true,
});

describe('Pruebas en fileUpload', () => { 

    test('debe cargar un file correctamente a cloudinary', async() => {
        const imageUrl = 'https://media.licdn.com/dms/image/v2/D5622AQE4cVPTiAqnEg/feedshare-shrink_800/feedshare-shrink_800/0/1733908174369?e=1743638400&v=beta&t=aRvW1icIDD-_p4ndUN_OTy2qHD9MiJ1ITcLyzSJWVT0';
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob],'foto.jpg');

        const url = await fileUpload(file);
        expect(typeof url).toBe('string');

        //console.log(url)
        const segments = url.split('/');
        //console.log(segments);
        const imageId = segments[segments.length - 1].replace('.jpg','');
        console.log(imageId);
        const cloudResp = await cloudinary.api.delete_resources(['journal-app/'+imageId]);
        console.log({cloudResp});

        
    });
    
    test('debe retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    });
 });