import JSZip from 'jszip';
import { convertImage, extractFileInfo } from './imageConverter';
import { convertToBaseMarkdown } from '../converter';

interface DownloadOptions {
    content: string;
    title: string;
    images: Array<{
        original: string;
        src: string;
    }>;
    convertContent?: boolean;
}

/**
 * 下载 Markdown 文件和相关图片
 */
export const downloadMarkdownWithImages = async (options: DownloadOptions): Promise<string> => {
    const { content, title, images, convertContent = true } = options;
    const zip = new JSZip();
    let markdown = convertContent ? convertToBaseMarkdown(content) : content;
    const imgPromises = [];

    for (const image of images) {
        const { baseName, targetFormat } = extractFileInfo(image.src);
        const imgPromise = fetch(image.src)
            .then(async res => {
                const contentType = res.headers.get('content-type') || 'image/png';
                const blob = await res.blob();

                // 如果当前格式是 webp 或与目标格式不匹配，则进行转换
                const currentFormat = contentType.split('/')[1];
                const needsConversion = currentFormat === 'webp' ||
                    (currentFormat !== targetFormat && currentFormat !== 'jpeg');

                const finalBlob = needsConversion
                    ? await convertImage(blob, targetFormat)
                    : blob;

                const fileName = `${baseName}.${targetFormat}`;
                zip.file(`images/${fileName}`, finalBlob);
                markdown = markdown.replace(image.original, `./images/${fileName}`);
            })
            .catch(error => {
                console.error('Error processing image:', error);
            });
        imgPromises.push(imgPromise);
    }

    await Promise.all(imgPromises);
    zip.file(`${title}.md`, markdown);

    const blob = await zip.generateAsync({ type: 'blob' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title}.zip`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);

    return markdown;
}; 