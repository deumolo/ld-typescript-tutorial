interface IAuthor {
    id: number;
    username: string;
}

interface ICategory {
    id: number;
    title: string;
}

interface IPost {
    id: number;
    title: string;
    desc: string;
    extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
    id: number;
    title: string;
    desc: string;
    extra: T[];
}

const testMe: IPostBetter<String> = {
    id: 1,
    title: 'test',
    desc: 'test',
    extra: ['test', 'test2'],
};

interface IPostEvenBetter<T extends Object> {
    id: 1;
    title: 'test';
    desc: 'test';
    extra: T[];
}

const testMe2: IPostEvenBetter<{ id: number; username: string }> = {
    id: 1,
    title: 'test',
    desc: 'test',
    extra: [{ id: 1, username: 'test' }],
};

const testMe3: IPostEvenBetter<IAuthor> = {
    id: 1,
    title: 'test',
    desc: 'test',
    extra: [{ id: 1, username: 'test' }],
};

const testMe4: IPostEvenBetter<ICategory> = {
    id: 1,
    title: 'test',
    desc: 'test',
    extra: [{ id: 1, title: 'test' }],
};

    