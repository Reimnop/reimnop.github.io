import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Reimnop/reimnop.github.io.git',
        dotfiles: true
    },
    () => {
        console.log('deployed successfully!');
    }
);