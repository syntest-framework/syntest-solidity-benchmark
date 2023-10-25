const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintCg72JGF = BigInt("1063")
		const Cover_ZapIn_General_V1mrH06e = await Cover_ZapIn_General_V1.new(uintCg72JGF, {from: accounts[0]});
		const uintUHLmoX1 = BigInt("140")
		const addresswbMtn6m = await Cover_ZapIn_General_V1mrH06e.owner.call({from: accounts[5]});
		await Cover_ZapIn_General_V1mrH06e.onlyOwner.call({from: accounts[3]});
		const uint16pKg2vG = await Cover_ZapIn_General_V1mrH06e.set_new_goodwill.call(uintUHLmoX1, {from: accounts[4]});
		const boolcWR39jP = await Cover_ZapIn_General_V1mrH06e.isOwner.call({from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinthoU0WkX = BigInt("1417")
		const Cover_ZapIn_General_V1CnaT9rn = await Cover_ZapIn_General_V1.new(uinthoU0WkX, {from: accounts[0]});
		const bytewh2c4W2 = "0x1b11120311100b011406151a1a1e16130e05"
		const addressycZUvcs = accounts[3]
		const addressMmih7do = accounts[2]
		const uintUcocFB3 = BigInt("1343")
		const addresszBgtLeY = accounts[4]
		const addressD8deck = accounts[2]
		const addressHNvk4vj = accounts[5]
		const addressFihvzc0 = accounts[3]
		const addressg8xHa8r = accounts[0]
		const 
lnNjMJT = await Cover_ZapIn_General_V1CnaT9rn.ZapIn.call(addressFihvzc0, addressHNvk4vj, addressD8deck, addresszBgtLeY, uintUcocFB3, addressMmih7do, addressycZUvcs, bytewh2c4W2, {from: accounts[2]});
		const addressY51VEWW = await Cover_ZapIn_General_V1CnaT9rn.inCaseTokengetsStuck.call(addressg8xHa8r, {from: accounts[3]});
		const addressVlrqERT = await Cover_ZapIn_General_V1CnaT9rn.owner.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintf9sQYyP = BigInt("854")
		const Cover_ZapIn_General_V1TzCPZu = await Cover_ZapIn_General_V1.new(uintf9sQYyP, {from: "0x0000000000000000000000000000000000000001"});
		const addressJIcPXA = accounts[3]
		const addressjiaP1Ew = "0x0000000000000000000000000000000000000001"
		const addressZVvsdp5 = accounts[3]
		const addresshVo0XZn = await Cover_ZapIn_General_V1TzCPZu.inCaseTokengetsStuck.call(addressJIcPXA, {from: accounts[4]});
		const addressoUIb1lP = await Cover_ZapIn_General_V1TzCPZu.toPayable.call(addressjiaP1Ew, {from: accounts[3]});
		const 
SMTixpA = await Cover_ZapIn_General_V1TzCPZu._getCoverDetails.call(addressZVvsdp5, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintl6gPKe = BigInt("476")
		const Cover_ZapIn_General_V1h5Mtcmz = await Cover_ZapIn_General_V1.new(uintl6gPKe, {from: accounts[5]});
		const uintdKpG2Tc = BigInt("1811")
		const uintXh3fydy = BigInt("461")
		const addressAbM4Sas = accounts[2]
		const uint16yl8Nsoz = await Cover_ZapIn_General_V1h5Mtcmz.set_new_goodwill.call(uintdKpG2Tc, {from: accounts[2]});
		await Cover_ZapIn_General_V1h5Mtcmz._enterCover.call(addressAbM4Sas, uintXh3fydy, {from: accounts[4]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintRwBT0Eu = BigInt("1328")
		const Cover_ZapIn_General_V1dZS6mEK = await Cover_ZapIn_General_V1.new(uintRwBT0Eu, {from: accounts[5]});
		await Cover_ZapIn_General_V1dZS6mEK.withdraw.call({from: accounts[5]});
		await Cover_ZapIn_General_V1dZS6mEK.nonReentrant.call({from: accounts[1]});
		const addressE8KgE7F = await Cover_ZapIn_General_V1dZS6mEK.owner.call({from: accounts[2]});
		await Cover_ZapIn_General_V1dZS6mEK.renounceOwnership.call({from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintyqV8pvs = BigInt("1696")
		const Cover_ZapIn_General_V1RqV7k4V = await Cover_ZapIn_General_V1.new(uintyqV8pvs, {from: accounts[0]});
		const uintEDvdr9 = BigInt("329")
		const uintcLpRj5Q = BigInt("620")
		const addresssjeRZe = accounts[2]
		const addressIfo0OLc = accounts[2]
		const addressAqYNxNu = await Cover_ZapIn_General_V1RqV7k4V.owner.call({from: accounts[1]});
		const boolTCqsYa7 = await Cover_ZapIn_General_V1RqV7k4V.isOwner.call({from: accounts[4]});
		const uint16OUPUzSC = await Cover_ZapIn_General_V1RqV7k4V.set_new_goodwill.call(uintEDvdr9, {from: accounts[0]});
		await Cover_ZapIn_General_V1RqV7k4V._enterCover.call(addresssjeRZe, uintcLpRj5Q, {from: accounts[0]});
		await Cover_ZapIn_General_V1RqV7k4V.renounceOwnership.call({from: accounts[2]});
		const 
BUSoMnL = await Cover_ZapIn_General_V1RqV7k4V._getCoverDetails.call(addressIfo0OLc, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintjbstcOd = BigInt("1942")
		const Cover_ZapIn_General_V1zV56Pqw = await Cover_ZapIn_General_V1.new(uintjbstcOd, {from: accounts[3]});
		const addressIC8OnP = accounts[0]
		await Cover_ZapIn_General_V1zV56Pqw.renounceOwnership.call({from: accounts[3]});
		const addresszgjLEpZ = await Cover_ZapIn_General_V1zV56Pqw.owner.call({from: accounts[3]});
		const addressmA7nmN2 = await Cover_ZapIn_General_V1zV56Pqw.transferOwnership.call(addressIC8OnP, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintH6CmV4d = BigInt("1587")
		const Cover_ZapIn_General_V1BVCeC0G = await Cover_ZapIn_General_V1.new(uintH6CmV4d, {from: accounts[2]});
		const byteXzyaEIz = "0x171a04051b0b151e1f10041315030e1d050c04061f031f1f1f15"
		const addresssUQcw4t = accounts[1]
		const addressC3krYL7 = accounts[3]
		const uintFOMdRp = BigInt("1955")
		const addressD5pMP6 = accounts[3]
		const addressZal4k5 = accounts[3]
		const addressJWW5sjN = accounts[3]
		const addressQlfcyZc = "0x0000000000000000000000000000000000000000"
		const 
i1qgP2l = await Cover_ZapIn_General_V1BVCeC0G.ZapIn.call(addressQlfcyZc, addressJWW5sjN, addressZal4k5, addressD5pMP6, uintFOMdRp, addressC3krYL7, addresssUQcw4t, byteXzyaEIz, {from: accounts[5]});
	});
})