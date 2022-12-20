interface user {
  id: number;
  firstName: string;
  password: string;
  email: string;
  isAdmin: boolean;
}

interface todo {
  id: number;
  userId: number;
  title: string;
  details: string;
  completed: boolean;
}

export class DBMock {
  wait(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  async getUserWithId(id: number): Promise<user[]> {
    await this.wait(1000);
    return this.users.filter((user) => user.id === id);
  }

  async getUserByEmail(email: string): Promise<user[]> {
    await this.wait(1000);
    return this.users.filter((user) => user.email === email);
  }

  async getUsers(): Promise<user[]> {
    await this.wait(1000);
    return this.users;
  }

  async getTodos(userId: number): Promise<todo[]> {
    await this.wait(1000);
    return this.todos.filter((todo) => todo.userId === userId);
  }

  users = [
    {
      id: 1,
      firstName: 'John',
      password: '1234',
      email: 'john@example.com',
      isAdmin: true,
    },
    {
      id: 2,
      firstName: 'Jane',
      password: '5678',
      email: 'jane@example.com',
      isAdmin: false,
    },
  ];

  todos = [
    {
      id: 1,
      userId: 1,
      title: 'Learn React',
      details: 'Learn React by building a todo app',
      completed: false,
    },
    {
      id: 2,
      userId: 2,
      title: 'Learn Svelte',
      details: 'Learn Svelte by building a todo app',
      completed: false,
    },
    {
      id: 3,
      userId: 1,
      title: 'Learn Vue',
      details: 'Learn Vue by building a todo app',
      completed: false,
    },
    {
      id: 4,
      userId: 2,
      title: 'Learn NextJS',
      details: 'Learn NextJS by building a todo app',
      completed: false,
    },
    {
      id: 5,
      userId: 1,
      title: 'Learn Swift',
      details: 'Learn Swift by building a todo app',
      completed: false,
    },
    {
      id: 6,
      userId: 1,
      title: 'Learn Kotlin',
      details: 'Learn Kotlin by building a todo app',
      completed: false,
    },
    {
      id: 7,
      userId: 2,
      title: 'Learn React-Native',
      details: 'Learn React-Native by building a todo app',
      completed: false,
    },
    {
      id: 8,
      userId: 2,
      title: 'Learn Flutter',
      details: 'Learn Flutter by building a todo app',
      completed: false,
    },
    {
      id: 9,
      userId: 1,
      title: 'Learn C++',
      details: 'Learn C++ by building a todo app',
      completed: false,
    },
  ];
}
