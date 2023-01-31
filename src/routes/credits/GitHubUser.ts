export class GitHubUser {
    username: string;
    avatar: string;
    url: string;
    bio: string | null;

    constructor(username: string, avatar: string, url: string, bio: string | null) {
        this.username = username;
        this.avatar = avatar;
        this.url = url;
        this.bio = bio;
    }
}