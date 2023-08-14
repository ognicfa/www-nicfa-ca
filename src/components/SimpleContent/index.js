import React from 'react';

export default function SimpleContent({ children }) {
  return (
    <main className="container container--fluid margin-vert--lg">
        <div className="row mdxPageWrapper_node_modules-@docusaurus-theme-classic-lib-theme-MDXPage-styles-module">
            <div className="col col--8">
                <article>
                    {children}                
                </article>
            </div>
        </div>
    </main>
  );
}
