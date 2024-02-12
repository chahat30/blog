import { generateHTML } from '@tiptap/html';
import Bold from '@tiptap/extension-bold';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import parse from 'html-react-parser';

const parseJsonToHtml  = (json) =>{
    return parse(generateHTML(json,[
        Bold,
        Italic,
        Text,
        Paragraph,
        Document,
        Strike,
        ListItem,
        OrderedList,
        BulletList
      ]));
};

export default parseJsonToHtml;