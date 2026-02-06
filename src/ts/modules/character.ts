// character.ts
export async function changeCharacterImage(character: 'ruka' | 'hina', fileName: string, isActive: boolean) {
  const characterImageContainer = document.getElementById('opening-character-container') as HTMLElement;
  const oldImages = document.querySelectorAll('#opening-character-container img') as NodeListOf<HTMLImageElement>;

  const tatieSrc = `/src/assets/images/characters/${character}/full/${fileName}.png`;
  const faceSrc = `/src/assets/images/characters/${character}/face/${fileName}.png`;

  const displayCharacterTatie = async (isActive: boolean) => {
    const tempImage = new Image();
    tempImage.src = tatieSrc;
    tempImage.onload = () => {
      const characterImage = document.createElement('img');
      characterImage.src = tatieSrc;
      characterImageContainer.appendChild(characterImage);

      requestAnimationFrame(() => {
        // 古いやつ
        if (oldImages.length > 0) {
          oldImages.forEach((oldImage) => {
            oldImage.classList.remove("active");
            oldImage.classList.remove("fade-in");
            if (isActive) {
              oldImage.classList.add("active");
            } else {
              oldImage.classList.add("fade-out");
            }
            setTimeout(() => {
              oldImage.remove();
            }, 500);
          });
        }
        // 新しいやつ
        if (isActive) {
          characterImage.classList.add('active');
          setTimeout(() => {
            characterImage.classList.remove('active');
          }, 2000);
        } else {
          characterImage.classList.add('fade-in');
        }
      });
    }
  }

  const displayCharacterFace = () => {
    const characterFaceImageContainer = document.querySelector('.text-character-container') as HTMLElement;
    characterFaceImageContainer.innerHTML = '';
    const characterFaceImage = document.createElement('img');
    characterFaceImage.src = faceSrc;
    characterFaceImage.classList.add('fade-in');
    characterFaceImageContainer.appendChild(characterFaceImage);
  }
  displayCharacterTatie(isActive);
  displayCharacterFace();
}

export function changeCharacterImageWithoutFace(character: 'ruka' | 'hina', fileName: string) {
  const characterImageContainer = document.getElementById('opening-character-container') as HTMLElement;
  const currentCharacterImage = document.querySelector(`#opening-character-container img`) as HTMLImageElement;

  const newImageSrc = `/src/assets/images/characters/${character}/full/${fileName}.png`;
  const tempImage = new Image();
  tempImage.src = newImageSrc;
  tempImage.onload = () => {
    const characterImage = document.createElement('img');
    characterImage.src = newImageSrc;
    characterImage.classList.add('fade-in');
    characterImageContainer.appendChild(characterImage);
    // 古いやつがある場合
    if (currentCharacterImage) {
      currentCharacterImage.classList.remove("active");
      currentCharacterImage.classList.remove("fade-in");
      currentCharacterImage.classList.add("fade-out");
      setTimeout(() => {
        currentCharacterImage.remove();
      }, 500);
    }
  }
}

export async function deleteCharacterFace() {
  const currentCharacterFaceImage = document.querySelector('.text-character-container img') as HTMLImageElement;
  if (currentCharacterFaceImage) {
    currentCharacterFaceImage.classList.remove("fade-in");
    currentCharacterFaceImage.classList.add("fade-out");
    setTimeout(() => {
      currentCharacterFaceImage.remove();
    }, 500);
  }
}

export async function deleteCharacterTatie() {
  const currentCharacterImage = document.querySelector(`#opening-character-container img`) as HTMLImageElement;
  if (currentCharacterImage) {
    currentCharacterImage.classList.remove("active");
    currentCharacterImage.classList.remove("fade-in");
    currentCharacterImage.classList.add("fade-out");
    setTimeout(() => {
      currentCharacterImage.remove();
    }, 500);
  }
}