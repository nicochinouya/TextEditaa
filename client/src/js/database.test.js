// import { getDb } from './database';

// describe('getDb', () => {
//   it('should read data from the database', async () => {
//     // Mock the openDB function
//     const openDB = jest.fn().mockResolvedValue({
//       transaction: jest.fn().mockReturnValue({
//         objectStore: jest.fn().mockReturnValue({
//           getAll: jest.fn().mockResolvedValue(['data1', 'data2', 'data3']),
//         }),
//       }),
//     });

//     // Call the getDb function
//     const result = await getDb(openDB);

//     // Assertions
//     expect(openDB).toHaveBeenCalledWith('jate', 1);
//     expect(openDB().transaction).toHaveBeenCalledWith('jate', 'readonly');
//     expect(openDB().transaction().objectStore).toHaveBeenCalledWith('jate');
//     expect(openDB().transaction().objectStore().getAll).toHaveBeenCalled();
//     expect(result).toEqual(['data1', 'data2', 'data3']);
//   });
// });