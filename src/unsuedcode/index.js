    // Set up mirror camera
    // useFrame(() => {
    //     if (mirrorMesh.current && !mirrorCamera.current) {
    //         mirrorCamera.current = new THREE.PerspectiveCamera();
    //         mirrorCamera.current.position.copy(mirrorMesh.current.position);
    //         mirrorCamera.current.rotation.copy(mirrorMesh.current.rotation);
    //         mirrorCamera.current.rotation.x *= -1;
    //     }

    //     if (mirrorMesh.current && mirrorCamera.current && !mirrorTexture) {
    //         const renderTarget = new THREE.WebGLRenderTarget(
    //             window.innerWidth * window.devicePixelRatio,
    //             window.innerHeight * window.devicePixelRatio
    //         );
    //         setMirrorTexture(renderTarget.texture);
    //     }

    //     if (mirrorMesh.current && mirrorCamera.current && mirrorTexture) {
    //         mirrorCamera.current.updateMatrixWorld();

    //         // Render the scene to the render target texture
    //         renderer.setRenderTarget(mirrorTexture);
    //         renderer.render(scene, mirrorCamera.current);
    //         renderer.setRenderTarget(null);

    //         mirrorMesh.current.material.envMap = mirrorTexture;
    //     }
    // });