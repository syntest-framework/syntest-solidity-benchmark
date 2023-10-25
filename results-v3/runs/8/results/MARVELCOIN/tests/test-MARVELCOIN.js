const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintqkzyhZ3 = BigInt("174")
		const stringSVmr7dO = "loSv"
		const stringoRGM2gW = "SNnLxz6TkAedvnmr3X8rbS36KLJ07DB6LL9GJn62xGreM3eHNT"
		const MARVELCOINEEkmxFi = await MARVELCOIN.new(uintqkzyhZ3, stringSVmr7dO, stringoRGM2gW, {from: accounts[3]});
		const uint4RgU2h = BigInt("394")
		const uintWOi0DQj = BigInt("1446")
		const addresswT2v9FS = accounts[4]
		const addressUU4dHFL = accounts[0]
		const uintaqBWe9o = BigInt("360")
		const boolDyhkOHI = await MARVELCOINEEkmxFi.burn.call(uint4RgU2h, {from: "0x0000000000000000000000000000000000000001"});
		const boolwdUQrol = await MARVELCOINEEkmxFi.transferFrom.call(addressUU4dHFL, addresswT2v9FS, uintWOi0DQj, {from: accounts[4]});
		const boolJ95NUh3 = await MARVELCOINEEkmxFi.burn.call(uintaqBWe9o, {from: accounts[1]});

		await expect(MARVELCOINEEkmxFi.burn.call(uint4RgU2h, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintVmffqL6 = BigInt("371")
		const stringDaCqHNS = "vVwxhNC4wW7RVzxt3DOStVTxZkHYAQ8MkktLQ9kUDGfqL"
		const stringET5d7on = "Lts1sMExeKoui"
		const MARVELCOINySrb7k4 = await MARVELCOIN.new(uintVmffqL6, stringDaCqHNS, stringET5d7on, {from: accounts[3]});
		const uintt9B6w2J = BigInt("1391")
		const addressjrNIETt = accounts[1]
		const uintME549mI = BigInt("2022")
		const addresshwWTwp8 = accounts[4]
		const addressZgu1nTH = accounts[1]
		const uintvPcCCFO = BigInt("2031")
		const addressIqhjxux = accounts[1]
		const addresspzQkDU = accounts[2]
		const byteCAd8PvX = "0x0f181f060f1700090c0107041b0208191f1d0107040801"
		const uintEwZMyaa = BigInt("886")
		const addressupAKCoL = accounts[0]
		const uintR0VkO7p = BigInt("694")
		const addressdlWO3oM = accounts[4]
		const uintrT6fOOB = BigInt("692")
		const addressdNvuYcC = "0x0000000000000000000000000000000000000001"
		const boolVYlUyG = await MARVELCOINySrb7k4.approve.call(addressjrNIETt, uintt9B6w2J, {from: accounts[3]});
		const boolWj7kCw9 = await MARVELCOINySrb7k4.transferFrom.call(addressZgu1nTH, addresshwWTwp8, uintME549mI, {from: accounts[1]});
		const boolTj0Kako = await MARVELCOINySrb7k4.transferFrom.call(addresspzQkDU, addressIqhjxux, uintvPcCCFO, {from: accounts[3]});
		const boolIYWP3nw = await MARVELCOINySrb7k4.approveAndCall.call(addressupAKCoL, uintEwZMyaa, byteCAd8PvX, {from: accounts[4]});
		const boolf6VUsad = await MARVELCOINySrb7k4.transfer.call(addressdlWO3oM, uintR0VkO7p, {from: accounts[0]});
		const boolAmsa58l = await MARVELCOINySrb7k4.transfer.call(addressdNvuYcC, uintrT6fOOB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVYlUyG, true)
		await expect(MARVELCOINySrb7k4.transferFrom.call(addressZgu1nTH, addresshwWTwp8, uintME549mI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintCroTd8 = BigInt("1424")
		const stringCTgXGk = "2yf2VMoxvGqa3E65gvPb"
		const stringjq2Kp5t = "NmkpM5vYTe2cRQw8G3CtpQ"
		const MARVELCOINj4NP5No = await MARVELCOIN.new(uintCroTd8, stringCTgXGk, stringjq2Kp5t, {from: accounts[0]});
		const uintuZcxLzG = BigInt("1604")
		const addressRWYiwIl = accounts[2]
		const byteQblXfNB = "0x1d1e041e0418050503170a1413130114151f141f0a1313031a121a05"
		const uintMOoZ6mY = BigInt("703")
		const addressAc5AP18 = accounts[4]
		const uintAJ33uZs = BigInt("643")
		const addressinNdusY = accounts[3]
		const uintuJyvI3y = BigInt("659")
		const address8hJkQP = accounts[5]
		const uintzCCd9di = BigInt("1220")
		const addressuCAcUoj = accounts[4]
		const addressxrJgkIt = accounts[1]
		const boold6APwh = await MARVELCOINj4NP5No.transfer.call(addressRWYiwIl, uintuZcxLzG, {from: accounts[4]});
		const boolJfyrZ7K = await MARVELCOINj4NP5No.approveAndCall.call(addressAc5AP18, uintMOoZ6mY, byteQblXfNB, {from: accounts[4]});
		const boolecjwFsK = await MARVELCOINj4NP5No.transfer.call(addressinNdusY, uintAJ33uZs, {from: accounts[2]});
		const boolh5sD8lk = await MARVELCOINj4NP5No.burnFrom.call(address8hJkQP, uintuJyvI3y, {from: accounts[1]});
		const boolTDKHcKH = await MARVELCOINj4NP5No.transferFrom.call(addressxrJgkIt, addressuCAcUoj, uintzCCd9di, {from: accounts[3]});

		await expect(MARVELCOINj4NP5No.transfer.call(addressRWYiwIl, uintuZcxLzG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintQ0r6dgn = BigInt("1829")
		const stringc8k1lMJ = "UlDX"
		const stringVd5dcRK = "98CbacWfCWdpYcjfiTwg8tYQVaVY6"
		const MARVELCOINnbmYRG3 = await MARVELCOIN.new(uintQ0r6dgn, stringc8k1lMJ, stringVd5dcRK, {from: accounts[3]});
		const uintXo6w8f3 = BigInt("778")
		const addressqZ0q8Ct = accounts[4]
		const byteyXwqHSq = "0x1a020d1d0a01170c0f170f0c20081b081118091f0c18041c1a0d090c1400"
		const uintqhs0BVF = BigInt("314")
		const addressn5EwU59 = accounts[1]
		const boolySXHg2 = await MARVELCOINnbmYRG3.burnFrom.call(addressqZ0q8Ct, uintXo6w8f3, {from: accounts[2]});
		const boolfWOiHx8 = await MARVELCOINnbmYRG3.approveAndCall.call(addressn5EwU59, uintqhs0BVF, byteyXwqHSq, {from: accounts[1]});

		await expect(MARVELCOINnbmYRG3.burnFrom.call(addressqZ0q8Ct, uintXo6w8f3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintkIRlrOQ = BigInt("148")
		const stringH1yGI9I = "NDbIQGBn9Xw0B9ArcFE3n96QocOlv3Nisx"
		const stringIHy45Y = "zmpEHcfJex73GBENbInhiFHCAseDP4FCcInxJx"
		const MARVELCOINAEvHhvA = await MARVELCOIN.new(uintkIRlrOQ, stringH1yGI9I, stringIHy45Y, {from: accounts[3]});
		const uintyH9vY6p = BigInt("1862")
		const uintlIUGZJM = BigInt("1622")
		const uintcJ96h5B = BigInt("416")
		const uintDvG2Iyi = BigInt("382")
		const addresslgX4nMO = accounts[3]
		const addressUfGi6B = accounts[4]
		const byteImOtLbO = "0x081309130f1d09"
		const uintzBpzyK5 = BigInt("876")
		const addressIKkwDRq = accounts[3]
		const uintI2CWNVk = BigInt("255")
		const addressPV35KAX = accounts[1]
		const boolaWlr6F = await MARVELCOINAEvHhvA.burn.call(uintyH9vY6p, {from: accounts[3]});
		const boolRKewNt = await MARVELCOINAEvHhvA.burn.call(uintlIUGZJM, {from: accounts[3]});
		const bool4MRZwX = await MARVELCOINAEvHhvA.burn.call(uintcJ96h5B, {from: accounts[1]});
		const boolP39lzzy = await MARVELCOINAEvHhvA.transferFrom.call(addressUfGi6B, addresslgX4nMO, uintDvG2Iyi, {from: accounts[1]});
		const boolb8IXTRg = await MARVELCOINAEvHhvA.approveAndCall.call(addressIKkwDRq, uintzBpzyK5, byteImOtLbO, {from: accounts[3]});
		const boolo6i82LZ = await MARVELCOINAEvHhvA.approve.call(addressPV35KAX, uintI2CWNVk, {from: accounts[3]});

		assert.equal(boolRKewNt, true)
		assert.equal(boolaWlr6F, true)
		await expect(MARVELCOINAEvHhvA.burn.call(uintcJ96h5B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintimbxCRV = BigInt("1829")
		const stringc8k1lMJ = "UlDX"
		const stringVd5dcRK = "98CbacWfCWdpYcjfiTwg8tYQVaVY6"
		const MARVELCOINnbmYRG3 = await MARVELCOIN.new(uintimbxCRV, stringc8k1lMJ, stringVd5dcRK, {from: accounts[3]});
		const byteYL9ChC4 = "0x1a020d1d0a01170c0f170f0c20081b081118091f0c18041c1a0d090c1400"
		const uintdRr4xXo = BigInt("314")
		const addresshyhHl99 = accounts[1]
		const uintIBfLSE6 = BigInt("1107")
		const addressZOJr7wV = accounts[3]
		const boolfWOiHx8 = await MARVELCOINnbmYRG3.approveAndCall.call(addresshyhHl99, uintdRr4xXo, byteYL9ChC4, {from: accounts[1]});
		const boolVWMRciE = await MARVELCOINnbmYRG3.burnFrom.call(addressZOJr7wV, uintIBfLSE6, {from: accounts[3]});

		await expect(MARVELCOINnbmYRG3.approveAndCall.call(addresshyhHl99, uintdRr4xXo, byteYL9ChC4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintHGILMeR = BigInt("1829")
		const stringc8k1lMJ = "UlDX"
		const stringVd5dcRK = "98CbacWfCWdpYcjfiTwg8tYQVaVY6"
		const MARVELCOINnbmYRG3 = await MARVELCOIN.new(uintHGILMeR, stringc8k1lMJ, stringVd5dcRK, {from: accounts[3]});
		const uintDDg6wIo = BigInt("1569")
		const addresswXkXm5 = accounts[3]
		const uinttTQXcJ5 = BigInt("778")
		const addressGfaNKx1 = accounts[4]
		const byte1pCi5a = "0x1a020d1d0a01170c0f170f0c20081b081118091f0c18041c1a0d090c1400"
		const uinth2B4Yo5 = BigInt("313")
		const addressUFOZg1u = accounts[2]
		const uintofix5kQ = BigInt("471")
		const addressk4iA9C = accounts[4]
		const addresssv6w5Q = accounts[1]
		const booltwLSl9K = await MARVELCOINnbmYRG3.burnFrom.call(addresswXkXm5, uintDDg6wIo, {from: accounts[1]});
		const boolySXHg2 = await MARVELCOINnbmYRG3.burnFrom.call(addressGfaNKx1, uinttTQXcJ5, {from: accounts[2]});
		const boolfWOiHx8 = await MARVELCOINnbmYRG3.approveAndCall.call(addressUFOZg1u, uinth2B4Yo5, byte1pCi5a, {from: accounts[1]});
		const boolZpI90ux = await MARVELCOINnbmYRG3.transferFrom.call(addresssv6w5Q, addressk4iA9C, uintofix5kQ, {from: accounts[0]});

		await expect(MARVELCOINnbmYRG3.burnFrom.call(addresswXkXm5, uintDDg6wIo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintQ3w2vov = BigInt("967")
		const stringzU8Cono = "96se8ItE"
		const stringXgLBY6B = "h5uTt4LFRONQQWFuz4irTUy0oXt8Rma53qJXVIof7BBQjl3CLuYgzpRqkUUIfq9sKwdXxaHAvi"
		const MARVELCOINfZ2PDtZ = await MARVELCOIN.new(uintQ3w2vov, stringzU8Cono, stringXgLBY6B, {from: accounts[2]});
		const uintLJAnWID = BigInt("896")
		const addressYnITqyx = accounts[0]
		const uintPnxfiz = BigInt("1460")
		const addressdAXNrAh = accounts[6]
		const uintlsq2Tdc = BigInt("1473")
		const addressXh4XDM = accounts[3]
		const bool2nVL2F = await MARVELCOINfZ2PDtZ.transfer.call(addressYnITqyx, uintLJAnWID, {from: accounts[2]});
		const boolS6NSdLZ = await MARVELCOINfZ2PDtZ.transfer.call(addressdAXNrAh, uintPnxfiz, {from: accounts[4]});
		const booliNOUTkn = await MARVELCOINfZ2PDtZ.approve.call(addressXh4XDM, uintlsq2Tdc, {from: accounts[2]});

		assert.equal(bool2nVL2F, true)
		await expect(MARVELCOINfZ2PDtZ.transfer.call(addressdAXNrAh, uintPnxfiz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintfwZ4O0 = BigInt("1249")
		const stringcAAyRFq = "zwJ9QJ"
		const stringNG38v7x = "Frt7xW2VYypeJQ5QV4m7yKWuLBOIePs6aaBWIW1SQYw8UEFF72yJCDDG5N"
		const MARVELCOINZFhn3JC = await MARVELCOIN.new(uintfwZ4O0, stringcAAyRFq, stringNG38v7x, {from: "0x0000000000000000000000000000000000000001"});
		const uintALgk1jz = BigInt("466")
		const addressDdLoWDF = "0x0000000000000000000000000000000000000001"
		const byteQA02tuX = "0x011f190e09171a030a00080d110f1f0217070b071b1308051f0e17"
		const uintY5Ai7At = BigInt("691")
		const address7XaX1Y = accounts[1]
		const uintYpd0kzB = BigInt("1084")
		const addressp2m3S2z = accounts[3]
		const uintUDsxMuY = BigInt("1029")
		const addressENFm4qs = accounts[2]
		const addresserYL9gF = accounts[5]
		const boolJwE8NPO = await MARVELCOINZFhn3JC.approve.call(addressDdLoWDF, uintALgk1jz, {from: accounts[3]});
		const boolpvM4x9l = await MARVELCOINZFhn3JC.approveAndCall.call(address7XaX1Y, uintY5Ai7At, byteQA02tuX, {from: "0x0000000000000000000000000000000000000001"});
		const booldf1AVSm = await MARVELCOINZFhn3JC.burnFrom.call(addressp2m3S2z, uintYpd0kzB, {from: accounts[2]});
		const boolAL8pWy6 = await MARVELCOINZFhn3JC.transferFrom.call(addresserYL9gF, addressENFm4qs, uintUDsxMuY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MARVELCOIN', async () => {
		const uintapeRC8M = BigInt("1892")
		const stringoTWqGPA = "PxMpp8IzNXMkVSTBKOYcYkv"
		const stringeIRwET8 = "f4uq6WIhJGCdKh3AMhWuijk7rMuq2b8Tj3hha1lHh8UzFqf58BL"
		const MARVELCOINoaPW6p5 = await MARVELCOIN.new(uintapeRC8M, stringoTWqGPA, stringeIRwET8, {from: accounts[0]});
		const uinttnGU8fX = BigInt("0")
		const addressuadeLK = accounts[0]
		const addressIeQBAKG = accounts[4]
		const uintFTuRzcS = BigInt("1846")
		const addressfobNSkl = accounts[3]
		const uintzG5BpCs = BigInt("817")
		const addresscfPwJ6W = accounts[5]
		const addressJdUDkY3 = accounts[4]
		const boolhp2rHe7 = await MARVELCOINoaPW6p5.transferFrom.call(addressIeQBAKG, addressuadeLK, uinttnGU8fX, {from: accounts[2]});
		const boolvAfkod2 = await MARVELCOINoaPW6p5.approve.call(addressfobNSkl, uintFTuRzcS, {from: accounts[1]});
		const bools4plbD0 = await MARVELCOINoaPW6p5.transferFrom.call(addressJdUDkY3, addresscfPwJ6W, uintzG5BpCs, {from: accounts[2]});

		assert.equal(boolhp2rHe7, true)
		assert.equal(boolvAfkod2, true)
		await expect(MARVELCOINoaPW6p5.transferFrom.call(addressJdUDkY3, addresscfPwJ6W, uintzG5BpCs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})