const utils = require("eslint-plugin-vue/lib/utils");

module.exports = {
  meta: {
    type: 'suggestion',
    fixable: 'code',
    docs: {
      description: 'Disallow <i> tags and suggest using <font-awesome-icon>',
    },
    schema: [],
  },
  create(context) {
    return utils.defineTemplateBodyVisitor(context, {
      "VElement[name='i']"(node) {
        const startTag = node.startTag;

        context.report({
          node,
          message: '<i> tag is not allowed. Use <font-awesome-icon> instead.',
          fix(fixer) {
            const classAttr = startTag.attributes.find(attr => attr.type === 'VAttribute' && attr.key.name === 'class');
            const classValue = classAttr?.value?.value || '';

            const [icons, classes] = classValue.split(' ').reduce(([pass, fail], item) => {
              return (item.startsWith('fa') ? [[...pass, item], fail] : [pass, [...fail, item]]).map(val => val.filter(Boolean));
            }, [[], []]);

            const iconAttr = icons.length ? `icon="${icons.join(' ')}"` : '';
            const otherAttrs = startTag.attributes
              .filter(attr => attr.key.name !== 'class')
              .map(attr => context.getSourceCode().getText(attr));

            const finalAttrs = [iconAttr, classes.length ? `class="${classes.join(' ')}"` : '', ...otherAttrs]
              .filter(Boolean).sort()
              .join(' ')

            const openingTag = finalAttrs ? `<font-awesome-icon ${finalAttrs}>` : '<font-awesome-icon>'
            const closingTag = `</font-awesome-icon>`;
            const content = node.children?.map(child => context.getSourceCode().getText(child)).join('') ?? '';
            const newTag = content ? `${openingTag}${content}${closingTag}` : finalAttrs ? `<font-awesome-icon ${finalAttrs} />` : '<font-awesome-icon />'

            return fixer.replaceTextRange(node.range, newTag);
          },
        });
      }
    })
  }
}