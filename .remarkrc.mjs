import remarkFrontmatter from 'remark-frontmatter';
import remarkLintFrontmatterSchema from 'remark-lint-frontmatter-schema';

const remarkConfig = {
	plugins: [
		remarkFrontmatter,
		[
			remarkLintFrontmatterSchema,
			{
				schemas: {
					/* One schema for many files */
					'schema.yaml': [
						/* Per-file association */

						/* Support glob patterns ———v */
						// './content/creative-work/*.md',
						// …
						// `./` prefix is optional
						'docs/decisions/*.md',
					],

					// './content/ghost.schema.yaml': [
					//   './content/casper.md',
					//   './content/ether.md',
					// ],
				},
			},
		],
	],
};

export default remarkConfig;
