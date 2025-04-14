const utils = require("eslint-plugin-vue/lib/utils");

module.exports = {
    'no-i-tag': {
      meta: {
        type: 'suggestion',
        fixable: 'code',
        docs: {
          description: 'Disallow <i> tags and suggest using <Icon>',
        },
        schema: [],
      },
      create(context) {
        return utils.defineTemplateBodyVisitor(context,{
          "VElement[name='i']"(node) {
            console.log(node.name)
            const classAttr = node.startTag.attributes.find(attr => attr.key.name === 'class');
            const classValue = classAttr?.value?.value || '';

            context.report({
              node,
              message: '<i> tag is not allowed. Use <Icon> instead.',
              fix(fixer) {
                const openingTag = `<Icon name="${classValue}">`;
                const closingTag = `</Icon>`;
                const content = node.children?.map(child => context.getSourceCode().getText(child)).join('') ?? '';
                const newTag = `${openingTag}${content}${closingTag}`;

                return fixer.replaceTextRange(node.range, newTag);
              },
            });
          }
        })
      }
    }
}