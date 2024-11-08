import { constants } from 'fs';
import { access, copyFile, mkdir, readdir, rm } from 'fs/promises';
import path from 'path';

const SOURCE_DIR = path.join(process.cwd(), 'src/contents');
const TARGET_DIR = path.join(process.cwd(), 'public/images');

const exists = async (path) => {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
};

const copyImages = async () => {
  const dirs = await readdir(SOURCE_DIR);

  if (await exists(TARGET_DIR)) await rm(TARGET_DIR, { recursive: true });

  for await (const dir of dirs) {
    const sourceDirPath = path.resolve(path.join(SOURCE_DIR, dir));
    const targetDirPath = path.resolve(path.join(TARGET_DIR, dir));
    const files = await readdir(sourceDirPath);
    const imageFiles = files.filter((file) => file.endsWith('.png'));

    if (imageFiles.length === 0) continue;

    await mkdir(targetDirPath, { recursive: true });

    await Promise.all(
      imageFiles.map((imageFile) => {
        const sourceFilePath = path.resolve(path.join(sourceDirPath, imageFile));
        const targetFilePath = path.resolve(path.join(targetDirPath, imageFile));

        copyFile(sourceFilePath, targetFilePath);
      })
    );
  }
};

await copyImages();
