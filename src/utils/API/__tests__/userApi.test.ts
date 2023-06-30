import userApi from "../userApi";
import apiUtils from "../apiUtils";

// Mock calls to axiosInstance.get
// The tests also cover the apiUtils.ts file
jest.mock("../apiUtils");

const mockUserList = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    }
];

const mockUserPostList = [
    {
        "userId": 1,
        "id": 1,
        "title": "test",
        "body": "test"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "test",
        "body": "test"
    }
];

let consoleSpy : jest.SpyInstance;

/**
 * Setup and teardown functions - suppress console.log
 */
beforeAll(() => {
    consoleSpy = jest.fn()

    consoleSpy = jest.spyOn(console, 'log');
    consoleSpy.mockImplementation(() => {});
});

afterAll(() => {
    consoleSpy.mockRestore();
});

/**
 * User Details tests
 */
// Users - sunny day scenario
test("getAllUserDetails() should return a list of 2 values", async () => {
    // Setup mocked response
    (apiUtils.axiosInstance.get as jest.Mock).mockResolvedValue({ data: mockUserList });
    expect(await userApi.getAllUserDetails()).toHaveLength(2);
});

// Users - rainy day scenario
test("getAppUserDetails() should return [] on exception", async () => {
    // Setup exception
    (apiUtils.axiosInstance.get as jest.Mock).mockRejectedValue(new Error());
    const mockConsole = jest.fn()

    expect(await userApi.getAllUserDetails()).toHaveLength(0);
});

/**
 * User posts tests
 */
// UserPosts - sunny day scenario
test("getUserPosts() should return 2 posts", async () => {
    // Setup mocked response
    (apiUtils.axiosInstance.get as jest.Mock).mockResolvedValue({ data: mockUserPostList });
    expect(await userApi.getUserPosts(1)).toHaveLength(2);
})

// UserPosts - rainy day scenario
test("getUserPosts() should return [] on exception", async () => {
    (apiUtils.axiosInstance.get as jest.Mock).mockRejectedValue(new Error());
    expect(await userApi.getUserPosts(1)).toHaveLength(0);
});