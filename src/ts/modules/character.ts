// character.ts
export async function changeCharacterImage(character: 'ruka' | 'hina', fileName: string, isActive: boolean) {
  const characterImageContainer = document.getElementById('opening-character-container') as HTMLElement;
  const currentCharacterImage = document.querySelector(`#opening-character-container img`) as HTMLImageElement;

  const displayCharacterTatie = async (character: 'ruka' | 'hina', fileName: string, isActive: boolean) => {
    const characterImage = document.createElement('img');
    characterImage.src = `/src/assets/images/characters/${character}/full/${fileName}.png`;
    characterImageContainer.appendChild(characterImage);

    if (isActive) {
      characterImage.classList.add('active');
      setTimeout(() => {
        characterImage.classList.remove('active');
      }, 2000);
    } else {
      characterImage.classList.add('fade-in');
    }
  }

  const displayCharacterFace = async (character: 'ruka' | 'hina', fileName: string) => {
    const characterFaceImageContainer = document.querySelector('.text-character-container') as HTMLElement;
    characterFaceImageContainer.innerHTML = '';
    const characterFaceImage = document.createElement('img');
    characterFaceImage.src = `/src/assets/images/characters/${character}/face/${fileName}.png`;
    characterFaceImage.classList.add('fade-in');
    characterFaceImageContainer.appendChild(characterFaceImage);
  }

  if (currentCharacterImage) {
    currentCharacterImage.classList.remove("active");
    currentCharacterImage.classList.remove("fade-in");
    if (isActive) {
      currentCharacterImage.classList.add("active");
    } else {
      currentCharacterImage.classList.add("fade-out");
    }
    setTimeout(() => {
      currentCharacterImage.remove();
    }, 500);
  }
  displayCharacterTatie(character, fileName, isActive);
  displayCharacterFace(character, fileName);
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