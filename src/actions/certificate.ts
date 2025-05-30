"use server";

import { Jimp, loadFont } from "jimp";
import { SANS_64_BLACK } from "jimp/fonts";
import { generateSlug } from "@/lib/utils";
import { baseUrl } from "@/lib/config";


type ImageResult = {
  content: string;
  name: string;
};

export async function generateCertificateAction(
  moduleTitle: string,
  userName: string,
  score: number
): Promise<ImageResult> {

  const imageFetched = await (await fetch(`${baseUrl}/cert-base.png`)).arrayBuffer();

  const image = await Jimp.read(imageFetched);


  const font = await loadFont(SANS_64_BLACK);

  const defaultAlignment = {
    alignmentX: 2, //center
    alignmentY: 16, // middle
  };
  const lineHeight = font.common.lineHeight;

  // nome do usuario

  image.print({
    font,
    x: 535,
    y: 640 - lineHeight,
    text: {
      text: userName,
      ...defaultAlignment,
    },
    maxWidth: 930,
  });


  // titulo do modulo
  image.print({
    font,
    x: 600,
    y: 900 + lineHeight,
    text: {
      text: moduleTitle,
      ...defaultAlignment,
    },
    maxWidth: 370,
  });

  // nota do usuario
  image.print({
    font,
    x: 1045,
    y: 900 + lineHeight,
    text: {
      text: `${score}%`,
      ...defaultAlignment,
    },
    maxWidth: 450,
  });

  // resultado do certificado gerado
  const imageResult: ImageResult = {
    content: await image.getBase64("image/png"),
    name: generateSlug(userName),
  };

  return imageResult;
}
